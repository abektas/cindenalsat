import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import {
  approvedProductRefresh,
  getProductCardState,
  getProductRefreshProducts,
  productRefreshCounts,
  productRefreshEvidence,
} from '../lib/product-refresh-catalog'

test('approved refresh replaces public candidate lists, excludes T12, and keeps sourcing unverified', () => {
  const trend = getProductRefreshProducts('viral') ?? []
  const alibaba = getProductRefreshProducts('alibaba') ?? []

  assert.equal(productRefreshCounts.trend, 14)
  assert.equal(productRefreshCounts.alibaba, 15)
  assert.equal(approvedProductRefresh.length, 29)
  assert.deepEqual(trend.map((product) => product.id), ['T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09', 'T10', 'T11', 'T13', 'T14', 'T15'])
  assert.deepEqual(alibaba.map((product) => product.id), Array.from({ length: 15 }, (_, index) => `A${String(index + 1).padStart(2, '0')}`))
  assert.equal(approvedProductRefresh.some((product) => product.id === 'T12'), false)
  assert.equal(getProductRefreshProducts('previous'), null)

  for (const product of approvedProductRefresh) {
    const evidence = productRefreshEvidence[product.id]
    assert.ok(evidence, `${product.id} should have evidence`)
    assert.ok(evidence.description.tr && evidence.description.en, `${product.id} should have bilingual notes`)
    assert.ok(evidence.sourceLinks.length > 0, `${product.id} should link to its source page`)
    assert.ok(existsSync(fileURLToPath(new URL(`../public${product.image}`, import.meta.url))), `${product.id} image should exist`)
    assert.equal(product.priceTr, '', `${product.id} must not claim an unverified factory price`)
    const card = getProductCardState(product, true)
    assert.equal(card.imageSrc, product.image)
    assert.equal(card.supplierStatus, 'NEEDS_REVIEW')
    assert.equal(card.supplierPrice, '')
  }

  const t13 = getProductCardState(trend.find((product) => product.id === 'T13')!, true)
  assert.equal(t13.retailPrice, '', 'Amazon rank snapshot must not become a retail price')
  assert.match(t13.description, /satış adedi değildir/)

  const a08 = getProductCardState(alibaba.find((product) => product.id === 'A08')!, true)
  assert.equal(a08.retailPrice, '$3.50–4.00')
  assert.equal(a08.retailLabel, 'Alibaba liste görünümü')
  assert.match(a08.supplierNote, /teklifi doğrulamaz/)

  const previous = getProductCardState({ id: 'previous-01', category: 'previous', titleTr: 'Old', titleEn: 'Old', descTr: 'Old description', descEn: 'Old description', image: '/images/old.jpg', priceTr: '$4', priceEn: '$20', link: 'https://example.com' }, false)
  assert.equal(previous.imageSrc, '/images/old.jpg')
  assert.equal(previous.retailLabel, 'Amazon')
  assert.equal(previous.retailPrice, '$20')
})
