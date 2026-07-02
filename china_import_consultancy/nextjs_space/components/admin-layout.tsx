'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { LayoutDashboard, FileText, Briefcase, Settings, LogOut, Home, ChevronRight, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const sidebarItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/blog', label: 'Blog Yazıları', icon: FileText },
  { href: '/admin/services', label: 'Hizmetler', icon: Briefcase },
  { href: '/admin/products', label: 'Ürünler', icon: ShoppingBag },
  { href: '/admin/testimonials', label: 'Müşteri Yorumları', icon: Star },
  { href: '/admin/site-content', label: 'Site İçerikleri', icon: Settings },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession() || {}
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/admin/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex-shrink-0 hidden md:flex flex-col">
        <div className="p-4 border-b">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
              ÇA
            </div>
            <div>
              <p className="font-display font-bold text-sm">Admin Paneli</p>
              <p className="text-xs text-muted-foreground">{session.user?.email}</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            Siteye Git
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between p-3">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
              ÇA
            </div>
            <span className="font-display font-bold text-sm">Admin</span>
          </Link>
          <div className="flex items-center gap-2">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant={pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href)) ? 'default' : 'ghost'} size="sm" className="p-2">
                  <item.icon className="w-4 h-4" />
                </Button>
              </Link>
            ))}
            <button onClick={() => signOut({ callbackUrl: '/admin/login' })}>
              <Button variant="ghost" size="sm" className="p-2 text-red-500">
                <LogOut className="w-4 h-4" />
              </Button>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:p-6 p-4 pt-16 md:pt-6 overflow-auto">
        {children}
      </main>
    </div>
  )
}
