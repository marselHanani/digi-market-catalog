<template>
  <div class="products-page">
    <v-container max-width="1280">
      <!-- ==================== HEADER ==================== -->

      <section class="page-header">
        <div>
          <p class="page-eyebrow">MARKETPLACE</p>

          <h1>All Products</h1>

          <p class="page-description">
            Explore our complete collection of digital products for creators, designers, and
            developers.
          </p>
        </div>
      </section>

      <!-- ==================== TOOLBAR ==================== -->

      <section class="products-toolbar">
        <div class="search-box">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search products..."
            variant="solo"
            hide-details
            rounded="xl"
          />
        </div>

        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Category"
          variant="outlined"
          density="comfortable"
          hide-details
          rounded="xl"
          class="category-select"
        />

        <v-select
          v-model="sortBy"
          :items="sortOptions"
          label="Sort by"
          variant="outlined"
          density="comfortable"
          hide-details
          rounded="xl"
          class="sort-select"
        />
      </section>

      <!-- ==================== RESULTS ==================== -->

      <section class="results-section">
        <div class="results-header">
          <p>
            Showing
            <strong>
              {{ filteredProducts.length }}
            </strong>
            products
          </p>
        </div>

        <!-- PRODUCTS -->

        <div v-if="filteredProducts.length" class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
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

        <!-- EMPTY STATE -->

        <div v-else class="empty-state">
          <v-icon icon="mdi-package-variant-closed" size="56" />

          <h2>No products found</h2>

          <p>Try changing your search or category filter.</p>

          <v-btn color="primary" rounded="xl" @click="clearFilters"> Clear filters </v-btn>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

import ProductCard from '../components/ProductCard.vue'

import { products } from '../data/products'

// =====================================================
// FILTERS
// =====================================================

const search = ref('')

const selectedCategory = ref('All')

const sortBy = ref('Featured')

// =====================================================
// CATEGORIES
// =====================================================

const categories = computed(() => {
  const uniqueCategories = [...new Set(products.map((product) => product.category))]

  return ['All', ...uniqueCategories]
})

// =====================================================
// SORT OPTIONS
// =====================================================

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Highest Rated',
  'Most Reviews',
]

// =====================================================
// FILTERED PRODUCTS
// =====================================================

const filteredProducts = computed(() => {
  let result = [...products]

  // Search

  if (search.value.trim()) {
    const query = search.value.toLowerCase().trim()

    result = result.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    )
  }

  // Category

  if (selectedCategory.value !== 'All') {
    result = result.filter((product) => product.category === selectedCategory.value)
  }

  // Sort

  switch (sortBy.value) {
    case 'Price: Low to High':
      result.sort((a, b) => a.price - b.price)

      break

    case 'Price: High to Low':
      result.sort((a, b) => b.price - a.price)

      break

    case 'Highest Rated':
      result.sort((a, b) => b.rating - a.rating)

      break

    case 'Most Reviews':
      result.sort((a, b) => b.reviews - a.reviews)

      break
  }

  return result
})

// =====================================================
// CLEAR FILTERS
// =====================================================

function clearFilters() {
  search.value = ''

  selectedCategory.value = 'All'

  sortBy.value = 'Featured'
}
</script>

<style scoped>
.products-page {
  min-height: 100vh;

  padding: 40px 0 100px;

  background: #0b1512;

  color: #f8fafc;
}

.products-page h1,
.products-page p,
.products-page .page-eyebrow,
.products-page .page-description,
.products-page .results-header p,
.products-page .results-header strong,
.products-page .empty-state h2,
.products-page .empty-state p {
  color: inherit;
}

.page-header h1 {
  color: #f8fafc;
}

.page-description {
  color: #9bb5a8;
}

.page-eyebrow {
  color: #55d4c6;
}

.results-header p {
  color: #9bb5a8;
}

.results-header strong {
  color: #f8fafc;
}

.empty-state {
  color: #a5b8ac;
}

.empty-state h2 {
  color: #f8fafc;
}

/* ==================== HEADER ==================== */

.page-header {
  padding: 30px 0 45px;
}

.page-eyebrow {
  margin: 0 0 10px;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 1.5px;
}

.page-header h1 {
  margin: 0;

  font-size: 48px;

  font-weight: 800;

  letter-spacing: -1.5px;
}

.page-description {
  max-width: 650px;

  margin: 14px 0 0;

  font-size: 16px;

  line-height: 1.7;
}

/* ==================== TOOLBAR ==================== */

.products-toolbar {
  display: grid;

  grid-template-columns:
    minmax(300px, 1fr)
    220px
    220px;

  gap: 14px;

  margin-bottom: 35px;
}

.search-box {
  min-width: 0;
}

/* ==================== RESULTS ==================== */

.results-section {
  padding-top: 10px;
}

.results-header {
  margin-bottom: 20px;
}

.results-header p {
  margin: 0;

  color: #64748b;

  font-size: 14px;
}

.results-header strong {
  color: #111827;
}

/* ==================== PRODUCTS GRID ==================== */

.products-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 24px;
}

/* ==================== EMPTY ==================== */

.empty-state {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  min-height: 350px;

  text-align: center;

  color: #94a3b8;
}

.empty-state h2 {
  margin: 18px 0 8px;

  color: #111827;
}

.empty-state p {
  margin: 0 0 20px;
}

/* ==================== RESPONSIVE ==================== */

@media (max-width: 1000px) {
  .products-toolbar {
    grid-template-columns: 1fr 1fr;
  }

  .search-box {
    grid-column: 1 / -1;
  }

  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 38px;
  }

  .products-toolbar {
    grid-template-columns: 1fr;
  }

  .search-box {
    grid-column: auto;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
