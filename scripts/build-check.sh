#!/bin/bash
# build-check.sh — Cloudflare Pages build öncesi doğrulama scripti
# Kullanıcının onayıyla eklendi: her build'den önce kritik dosyaları kontrol eder

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_ROOT"

ERRORS=0
WARNINGS=0

echo "🔍 Pre-build kontrolleri başlıyor..."
echo ""

# 1. open-next.config.ts var mı ve doğru mu?
if [ ! -f "open-next.config.ts" ]; then
  echo "❌ open-next.config.ts eksik — OpenNext Cloudflare build için gerekli"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ open-next.config.ts var"
  # converter: edge kontrolü
  if grep -q "converter.*edge" open-next.config.ts; then
    echo "✅ open-next.config.ts'de converter: 'edge' var"
  else
    echo "❌ open-next.config.ts'de converter: 'edge' eksik — aws-apigw-v2 ile uyumsuz"
    ERRORS=$((ERRORS + 1))
  fi
  # wrapper: cloudflare-node kontrolü
  if grep -q "wrapper.*cloudflare-node" open-next.config.ts; then
    echo "✅ open-next.config.ts'de wrapper: 'cloudflare-node' var"
  else
    echo "❌ open-next.config.ts'de wrapper: 'cloudflare-node' eksik — converter: edge ile uyumsuz"
    ERRORS=$((ERRORS + 1))
  fi
  # middleware.external kontrolü
  if grep -q "external.*true" open-next.config.ts; then
    echo "✅ middleware.external: true var"
  else
    echo "⚠️ middleware.external: true eksik — OpenNext middleware için gerekli"
    WARNINGS=$((WARNINGS + 1))
  fi
fi

# 2. wrangler.jsonc var mı ve doğru mu?
if [ ! -f "wrangler.jsonc" ]; then
  echo "❌ wrangler.jsonc eksik — Cloudflare deploy için gerekli"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ wrangler.jsonc var"
  # services bölümü var mı? (WORKER_SELF_REFERENCE hatası)
  if grep -q '"services"' wrangler.jsonc 2>/dev/null; then
    echo "⚠️ wrangler.jsonc'de 'services' bölümü var — WORKER_SELF_REFERENCE hatası olabilir"
    WARNINGS=$((WARNINGS + 1))
  fi
fi

# 3. package.json'da gerekli paketler var mı?
if [ ! -f "package.json" ]; then
  echo "❌ package.json eksik"
  ERRORS=$((ERRORS + 1))
else
  # @opennextjs/cloudflare
  if grep -q '"@opennextjs/cloudflare"' package.json; then
    echo "✅ @opennextjs/cloudflare eklendi"
  else
    echo "❌ @opennextjs/cloudflare eksik — OpenNext build için gerekli"
    ERRORS=$((ERRORS + 1))
  fi

  # wrangler
  if grep -q '"wrangler"' package.json; then
    echo "✅ wrangler eklendi"
  else
    echo "❌ wrangler eksik — Cloudflare deploy için gerekli"
    ERRORS=$((ERRORS + 1))
  fi

  # next-auth v5
  if grep -q '"next-auth"' package.json; then
    NEXT_AUTH_VERSION=$(grep '"next-auth"' package.json | head -1)
    if echo "$NEXT_AUTH_VERSION" | grep -qE '"5\.|beta'; then
      echo "✅ next-auth v5 (Auth.js) kullanılıyor"
    else
      echo "⚠️ next-auth v5 kullanılmıyor — Next.js 15 ile uyumsuz olabilir"
      WARNINGS=$((WARNINGS + 1))
    fi
  fi

  # framer-motion 11+
  if grep -q '"framer-motion"' package.json; then
    FM_VERSION=$(grep '"framer-motion"' package.json | head -1)
    if echo "$FM_VERSION" | grep -qE '"11\.|"12\.'; then
      echo "✅ framer-motion 11+ kullanılıyor (React 19 uyumlu)"
    else
      echo "⚠️ framer-motion 11+ kullanılmıyor — React 19 ile uyumsuz olabilir"
      WARNINGS=$((WARNINGS + 1))
    fi
  fi

  # react 19
  if grep -q '"react"' package.json; then
    REACT_VERSION=$(grep '"react"' package.json | head -1)
    if echo "$REACT_VERSION" | grep -qE '"19\.'; then
      echo "✅ React 19 kullanılıyor"
    else
      echo "⚠️ React 19 kullanılmıyor — Next.js 15 ile uyumsuz olabilir"
      WARNINGS=$((WARNINGS + 1))
    fi
  fi
fi

# 4. next.config.js'de output standalone mı?
if [ ! -f "next.config.js" ]; then
  echo "❌ next.config.js eksik"
  ERRORS=$((ERRORS + 1))
else
  if grep -q "output.*standalone" next.config.js; then
    echo "✅ next.config.js'de output: 'standalone' var"
  else
    echo "❌ next.config.js'de output: 'standalone' eksik — OpenNext için gerekli"
    ERRORS=$((ERRORS + 1))
  fi
fi

# 5. robots.ts / sitemap.ts route handler'ları silinmiş mi?
if [ -f "app/robots.ts" ]; then
  echo "⚠️ app/robots.ts var — output: standalone ile uyumsuz olabilir"
  WARNINGS=$((WARNINGS + 1))
fi
if [ -f "app/sitemap.ts" ]; then
  echo "⚠️ app/sitemap.ts var — output: standalone ile uyumsuz olabilir"
  WARNINGS=$((WARNINGS + 1))
fi

# 6. package-lock.json yok mu? (bun install kullanıyoruz)
if [ -f "package-lock.json" ]; then
  echo "⚠️ package-lock.json var — Cloudflare bun install kullanır, silinebilir"
  WARNINGS=$((WARNINGS + 1))
else
  echo "✅ package-lock.json yok (bun install kullanılacak)"
fi

# 7. public/robots.txt ve public/sitemap.xml var mı?
if [ -f "public/robots.txt" ]; then
  echo "✅ public/robots.txt var"
else
  echo "⚠️ public/robots.txt eksik — SEO için gerekli"
  WARNINGS=$((WARNINGS + 1))
fi

if [ -f "public/sitemap.xml" ]; then
  echo "✅ public/sitemap.xml var"
else
  echo "⚠️ public/sitemap.xml eksik — SEO için gerekli"
  WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "════════════════════════════════════════"
echo "Sonuç: $ERRORS hata, $WARNINGS uyarı"

if [ $ERRORS -gt 0 ]; then
  echo "❌ Build öncesi kontroller başarısız — hataları düzeltin"
  exit 1
else
  echo "✅ Tüm pre-build kontrolleri geçti — build'e hazır"
  exit 0
fi
