/**
 * Lê scripts/portfolio-urls-raw.txt (gerado com curl+grep ao HTML do portfólio)
 * e imprime contagens + lista deduplicada (remove logos, prefere URLs sem sufixo WxH).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rawPath = path.join(__dirname, 'portfolio-urls-raw.txt')
const raw = fs.readFileSync(rawPath, 'utf8').trim().split('\n').filter(Boolean)

const filtered = raw.filter((u) => !/LOGO/i.test(u) && !/-150x\d+\./i.test(u))

/** Chave estável para agrupar full + miniatura WordPress */
function stemKey(u) {
  const noq = u.split('?')[0]
  return noq
    .replace(/-\d+x\d+(?=\.[^.]+$)/i, '')
    .replace(/-scaled(?=\.[^.]+$)/i, '')
}

function hasWpSizeSuffix(u) {
  return /-\d+x\d+\.[^.]+$/i.test(u.split('?')[0])
}

const byStem = new Map()
for (const u of filtered) {
  const k = stemKey(u)
  const prev = byStem.get(k)
  if (!prev) {
    byStem.set(k, u)
    continue
  }
  const uSmall = hasWpSizeSuffix(u)
  const pSmall = hasWpSizeSuffix(prev)
  if (uSmall && !pSmall) continue
  if (!uSmall && pSmall) {
    byStem.set(k, u)
    continue
  }
  if (u.length >= prev.length) byStem.set(k, u)
}

const urls = [...byStem.values()].sort()

console.error('raw:', raw.length, 'after logo filter:', filtered.length, 'deduped:', urls.length)

const out = `/**
 * Imagens do portfólio público (HTML de https://www.obrasremodelacoes.pt/portfolio/).
 * Gerado: ${new Date().toISOString().slice(0, 10)}
 *
 * Atualizar: curl o HTML → scripts/portfolio-urls-raw.txt (grep wp-content/uploads)
 * depois: node scripts/build-portfolio-list.mjs
 */
export const portfolioImageUrls = ${JSON.stringify(urls, null, 2)}
`

const dest = path.join(__dirname, '../src/content/portfolioScrape.js')
fs.writeFileSync(dest, out, 'utf8')
console.error('Wrote', dest, urls.length, 'URLs')
