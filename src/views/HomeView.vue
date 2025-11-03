<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CoinCardData } from '@/types'
import CoinCard from '@/components/CoinCard.vue'

const coins = ref<CoinCardData[]>([])

const rowsToShow = ref(20)

const fetchCoins = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rowsToShow.value}&page=1&sparkline=false`)
  const data = await response.json()
  coins.value = data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.current_price,
    price_change_percentage_24h: coin.price_change_percentage_24h,
    image: coin.image,
  }))
}

onMounted(() => {
  fetchCoins()
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-crypto-text mb-6">Топ криптовалют</h2>

    <div class="grid gap-4">
      <CoinCard v-for="coin in coins" :key="coin.id" :coin="coin" />
    </div>
  </div>
</template>
