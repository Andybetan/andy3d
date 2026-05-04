<script setup>
import { computed, inject, ref } from 'vue'
import { cardmarketStock } from '../data/cardmarketStock'

const { t, locale } = inject('i18n')

const FEATURED_PRINTS = 4

const tab = ref('all')

const cardmarketUrl = computed(
  () =>
    `https://www.cardmarket.com/${locale.value === 'es' ? 'es' : 'en'}/Pokemon/Users/AndyBetan`,
)

function pick(obj) {
  if (!obj || typeof obj !== 'object') return ''
  const v = obj[locale.value] ?? obj.en ?? ''
  return typeof v === 'string' ? v.trim() : ''
}

function tcgName(item) {
  const n = pick(item.name)
  if (n) return n
  const num = item.number?.trim()
  const set = pick(item.setName)
  if (num && set) return `${num} · ${set}`
  return t('cardmarket.cardFallbackTitle')
}

function tcgHref(item) {
  if (item.href && item.href.trim()) return item.href.trim()
  return cardmarketUrl.value
}

function stockBadge(item) {
  const s = item.status
  if (s === 'in_stock') return t('cardmarket.stockStatus.in_stock')
  if (s === 'sold') return t('cardmarket.stockStatus.sold')
  if (s === 'coming_soon') return t('cardmarket.stockStatus.coming_soon')
  return ''
}

function badgeClassTcg(item) {
  if (item.status === 'in_stock')
    return 'bg-emerald-500/90 text-slate-950 shadow-md shadow-emerald-900/25'
  if (item.status === 'sold') return 'bg-slate-600/95 text-slate-100'
  return 'bg-amber-500/25 text-amber-200 border border-amber-400/40'
}

function tcgAspect(kind) {
  return kind === 'etb' ? 'aspect-[5/4]' : 'aspect-[63/88]'
}

function tcgCardOpacity(raw) {
  return raw.status === 'sold' ? 'opacity-[0.88]' : ''
}

const printsFeatured = computed(() => {
  locale.value
  const items = t('gallery.items')
  if (!Array.isArray(items)) return []
  return items.slice(0, FEATURED_PRINTS).map((item, i) => ({
    kind: 'print',
    key: `print-${i}`,
    title: item.title,
    description: item.description,
    image: item.image,
  }))
})

const tcgItems = computed(() =>
  cardmarketStock.map((item, i) => ({
    kind: 'tcg',
    key: `tcg-${i}`,
    raw: item,
  })),
)

function interleave(a, b) {
  const out = []
  const n = Math.max(a.length, b.length)
  for (let i = 0; i < n; i++) {
    if (a[i]) out.push(a[i])
    if (b[i]) out.push(b[i])
  }
  return out
}

const visibleItems = computed(() => {
  const p = printsFeatured.value
  const c = tcgItems.value
  if (tab.value === 'prints') return p
  if (tab.value === 'tcg') return c
  return interleave(p, c)
})

const selectedPrint = ref(null)

function openPrint(item) {
  if (item?.image) selectedPrint.value = item
}

function closePrint() {
  selectedPrint.value = null
}

function tabBtnClass(active) {
  return active
    ? 'bg-linear-to-r from-cyan-500/25 via-surface-700 to-amber-500/25 text-white border-cyan-400/35 shadow-lg shadow-cyan-500/10'
    : 'bg-surface-800/80 text-slate-400 border-slate-600/50 hover:text-slate-200 hover:border-slate-500'
}
</script>

<template>
  <section id="coleccion" class="section-padding scroll-mt-20 relative overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-500/6 via-transparent to-amber-500/7"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[min(90vw,52rem)] h-px bg-linear-to-r from-transparent via-cyan-400/25 to-transparent"
      aria-hidden="true"
    />

    <div class="relative max-w-6xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <p
          class="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-transparent bg-linear-to-r from-cyan-400 to-amber-400 bg-clip-text mb-3"
        >
          {{ t('fusion.badge') }}
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
          {{ t('fusion.title') }}
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          {{ t('fusion.subtitle') }}
        </p>
      </div>

      <!-- Filtros interactivos -->
      <div
        class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        role="tablist"
        aria-label="Filtrar vitrina"
      >
        <button
          type="button"
          role="tab"
          :aria-selected="tab === 'all'"
          :class="[
            'px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-300',
            tabBtnClass(tab === 'all'),
          ]"
          @click="tab = 'all'"
        >
          {{ t('fusion.tabAll') }}
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="tab === 'prints'"
          :class="[
            'px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-300',
            tabBtnClass(tab === 'prints'),
          ]"
          @click="tab = 'prints'"
        >
          {{ t('fusion.tabPrints') }}
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="tab === 'tcg'"
          :class="[
            'px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-300',
            tabBtnClass(tab === 'tcg'),
          ]"
          @click="tab = 'tcg'"
        >
          {{ t('fusion.tabTcg') }}
        </button>
      </div>

      <!-- Puente visual 3D ↔ TCG -->
      <div
        class="hidden sm:flex items-center justify-center gap-3 mb-10 text-xs text-slate-500 font-medium uppercase tracking-widest"
        aria-hidden="true"
      >
        <span class="h-px flex-1 max-w-24 bg-linear-to-r from-transparent to-cyan-500/35" />
        <span class="text-cyan-500/80 font-black">◆</span>
        <span>{{ t('fusion.bridge') }}</span>
        <span class="text-amber-400/80 font-black">★</span>
        <span class="h-px flex-1 max-w-24 bg-linear-to-l from-transparent to-amber-500/35" />
      </div>

      <Transition name="fusion-grid" mode="out-in">
        <div
          :key="tab"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          <template v-for="entry in visibleItems" :key="entry.key">
            <!-- Piezas 3D -->
            <button
              v-if="entry.kind === 'print'"
              type="button"
              class="group text-left rounded-2xl overflow-hidden bg-surface-900/90 border border-cyan-500/15 hover:border-cyan-400/45 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ring-1 ring-white/4"
              @click="openPrint(entry)"
            >
              <div class="relative aspect-[3/4] bg-linear-to-br from-surface-700 to-surface-900 overflow-hidden">
                <span
                  class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-cyan-500/90 text-slate-950 shadow-md"
                >
                  {{ t('fusion.badgePrint') }}
                </span>
                <img
                  v-if="entry.image"
                  :src="entry.image"
                  :alt="entry.title"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  class="absolute inset-x-0 bottom-0 pt-12 pb-2 px-2 bg-linear-to-t from-black/85 via-black/40 to-transparent"
                >
                  <p class="text-[10px] font-semibold text-cyan-200/90 text-center uppercase tracking-wide">
                    {{ t('fusion.hintPrint') }}
                  </p>
                </div>
              </div>
              <div class="p-3 border-t border-white/6">
                <p class="text-xs font-semibold text-white leading-snug line-clamp-2 group-hover:text-cyan-200 transition-colors">
                  {{ entry.title }}
                </p>
                <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {{ entry.description }}
                </p>
              </div>
            </button>

            <!-- TCG -->
            <a
              v-else-if="entry.kind === 'tcg'"
              :href="tcgHref(entry.raw)"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'group flex flex-col rounded-2xl overflow-hidden bg-surface-900/90 border border-amber-500/18 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/15 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ring-1 ring-white/4',
                tcgCardOpacity(entry.raw),
              ]"
            >
              <div
                class="relative w-full bg-linear-to-br from-surface-800 to-surface-950 overflow-hidden"
                :class="tcgAspect(entry.raw.kind)"
              >
                <span
                  class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                  :class="badgeClassTcg(entry.raw)"
                >
                  {{ stockBadge(entry.raw) }}
                </span>
                <span
                  class="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500/85 text-slate-950"
                >
                  {{ t('fusion.badgeTcg') }}
                </span>
                <img
                  v-if="entry.raw.image"
                  :src="entry.raw.image"
                  :alt="tcgName(entry.raw)"
                  class="absolute inset-0 w-full h-full object-contain object-center p-1.5 transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div
                  class="absolute inset-x-0 bottom-0 pt-10 pb-1.5 px-2 bg-linear-to-t from-black/90 via-black/45 to-transparent"
                >
                  <p
                    class="text-right text-sm font-bold tabular-nums text-amber-300 drop-shadow-md"
                    :class="{ 'line-through opacity-70': entry.raw.status === 'sold' }"
                  >
                    {{ entry.raw.price }}
                  </p>
                </div>
              </div>
              <div class="p-3 flex flex-col flex-1 border-t border-white/6">
                <p class="text-xs font-semibold text-white leading-snug line-clamp-2">
                  {{ tcgName(entry.raw) }}
                </p>
                <p v-if="pick(entry.raw.rarity)" class="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {{ pick(entry.raw.rarity) }}
                </p>
                <span class="text-[10px] font-medium text-amber-400/90 mt-2">
                  {{ t('fusion.ctaTcg') }}
                </span>
              </div>
            </a>
          </template>
        </div>
      </Transition>

      <p class="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
        {{ t('fusion.footerHint') }}
      </p>

      <div
        id="cardmarket"
        class="scroll-mt-20 mt-10 rounded-3xl border border-amber-500/20 bg-linear-to-br from-surface-800/90 to-surface-900 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
      >
        <div
          class="shrink-0 w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400"
          aria-hidden="true"
        >
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h15l-1.5 9h-12z M6 6 5 3H2M9 20a1 1 0 102 0 1 1 0 00-2 0zm8 0a1 1 0 102 0 1 1 0 00-2 0z"
            />
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-white font-semibold mb-1">{{ t('fusion.cardmarketStripTitle') }}</p>
          <p class="text-sm text-slate-400">{{ t('fusion.cardmarketStripText') }}</p>
        </div>
        <a
          :href="cardmarketUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 text-sm font-semibold shadow-lg shadow-amber-500/25 hover:brightness-105 transition-all"
        >
          {{ t('cardmarket.cta') }}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <p class="mt-4 text-[11px] text-slate-600 text-center max-w-2xl mx-auto">
        {{ t('cardmarket.stockDisclaimer') }}
      </p>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="selectedPrint"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-900/95 backdrop-blur-sm"
          @click.self="closePrint"
        >
          <div
            class="relative rounded-3xl bg-surface-800 border border-cyan-500/30 shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            @click.stop
          >
            <button
              type="button"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-700/90 hover:bg-surface-600 border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
              :aria-label="t('fusion.closeLightbox')"
              @click="closePrint"
            >
              <span class="text-xl font-bold leading-none">×</span>
            </button>
            <div class="flex-1 flex items-center justify-center min-h-0 p-4 pt-14">
              <img
                :src="selectedPrint.image"
                :alt="selectedPrint.title"
                class="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl"
              />
            </div>
            <div class="px-5 py-4 border-t border-slate-600/40 text-center">
              <p class="text-lg font-semibold text-slate-100">{{ selectedPrint.title }}</p>
              <p class="text-xs text-cyan-400/90 mt-1 uppercase tracking-wider">{{ t('fusion.badgePrint') }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fusion-grid-enter-active,
.fusion-grid-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.fusion-grid-enter-from,
.fusion-grid-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active .relative,
.lightbox-leave-active .relative {
  transition: transform 0.2s ease;
}
.lightbox-enter-from .relative,
.lightbox-leave-to .relative {
  transform: scale(0.96);
}
</style>
