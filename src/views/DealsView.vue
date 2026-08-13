<template>
  <v-container max-width="1280">
    <section class="deals-page">
      <p class="section-eyebrow">SPECIAL OFFERS</p>

      <h1>Deals & Offers</h1>

      <p class="description">Discover selected products at special prices.</p>

      <div class="deals-grid">
        <ProductCard
          v-for="product in deals"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :description="product.description"
          :image="product.image"
          :category="product.category"
          :price="product.price"
          :rating="product.rating"
          :reviews="product.reviews"
        />
      </div>
    </section>
  </v-container>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'

import { products } from '../data/products.js'

const deals = products.slice(0, 4)
</script>

<style scoped>
.deals-page {
  padding: 70px 0;
}

.section-eyebrow {
  margin: 0 0 10px;

  color: #008f83;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 1.5px;
}

h1 {
  margin: 0;

  color: #f8fafc;

  font-size: 42px;

  font-weight: 800;

  letter-spacing: -1px;
}

.description {
  margin: 12px 0 40px;

  color: #91a39c;

  font-size: 16px;
}

.deals-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 24px;
}

@media (max-width: 900px) {
  .deals-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .deals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
