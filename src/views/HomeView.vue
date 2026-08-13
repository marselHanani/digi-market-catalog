<template>
  <div class="home">
    <v-container max-width="1280">
      <!-- ==================== HERO ==================== -->

      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow">CURATED MARKETPLACE</p>

          <h1>
            Discover products
            <span>made for everyday life.</span>
          </h1>

          <p class="description">
            Shop practical, modern products for work, home, travel, and your everyday routine.
          </p>

          <div class="search-wrapper">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              placeholder="Search products..."
              variant="solo"
              hide-details
              rounded="xl"
            />

            <v-btn color="primary" size="large" rounded="xl"> Search </v-btn>
          </div>

          <div class="popular">
            <span>Popular:</span>

            <v-chip
              v-for="category in categories.slice(0, 4)"
              :key="category.title"
              size="small"
              variant="tonal"
            >
              {{ category.title }}
            </v-chip>
          </div>
        </div>

        <!-- HERO PRODUCT -->

        <div class="hero-preview">
          <div class="preview-card">
            <div class="preview-badge">
              <v-icon icon="mdi-star-four-points" size="18" />

              <span> Featured collection </span>
            </div>

            <div class="preview-image">
              <v-img :src="products[1].image" cover alt="Featured headphones" />
            </div>

            <div class="preview-info">
              <div>
                <span> Wireless Audio </span>

                <strong>
                  {{ products[1].title }}
                </strong>
              </div>

              <strong class="preview-price"> ${{ products[1].price.toFixed(2) }} </strong>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== CATEGORIES ==================== -->

      <section class="categories-section">
        <div class="section-header">
          <div>
            <p class="section-eyebrow">EXPLORE</p>

            <h2>Shop by category</h2>

            <p class="section-description">Find something that fits your everyday needs.</p>
          </div>

          <v-btn to="/products" variant="text" color="primary" append-icon="mdi-arrow-right">
            View all
          </v-btn>
        </div>

        <div class="categories-grid">
          <CategoryCard
            v-for="category in categories"
            :key="category.title"
            :title="category.title"
            :count="category.count"
            :icon="category.icon"
          />
        </div>
      </section>

      <!-- ==================== PRODUCTS ==================== -->

      <section class="products-section">
        <div class="section-header">
          <div>
            <p class="section-eyebrow">FEATURED</p>

            <h2>Popular products</h2>

            <p class="section-description">Products selected for everyday use.</p>
          </div>

          <v-btn to="/products" variant="text" color="primary" append-icon="mdi-arrow-right">
            View all products
          </v-btn>
        </div>

        <div class="products-grid">
          <ProductCard
            v-for="product in products"
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
  </div>
</template>

<script setup>
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'

import { products } from '../data/products.js'

const categories = [
  {
    title: 'Bags',
    count: 24,
    icon: 'mdi-bag-person-outline',
  },

  {
    title: 'Audio',
    count: 18,
    icon: 'mdi-headphones',
  },

  {
    title: 'Coffee & Kitchen',
    count: 31,
    icon: 'mdi-coffee-outline',
  },

  {
    title: 'Home & Living',
    count: 42,
    icon: 'mdi-home-heart-outline',
  },
]
</script>

<style scoped>
.home {
  min-height: 100vh;

  background: #0b1512;
}

/* ==================== HERO ==================== */

.hero {
  min-height: 620px;

  display: grid;

  grid-template-columns:
    1.05fr
    0.95fr;

  align-items: center;

  gap: 80px;
}

.hero-content {
  padding-top: 20px;
}

.eyebrow,
.section-eyebrow {
  margin: 0 0 12px;

  color: #55d4c6;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 1.5px;
}

.hero h1 {
  max-width: 650px;

  margin: 0;

  color: #f8fafc;

  font-size: clamp(42px, 5vw, 68px);

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -2px;
}

.hero h1 span {
  display: block;

  color: #20b8aa;
}

.description {
  max-width: 560px;

  margin: 28px 0;

  color: #91a39c;

  font-size: 18px;

  line-height: 1.7;
}

/* ==================== SEARCH ==================== */

.search-wrapper {
  display: flex;

  align-items: center;

  max-width: 600px;

  gap: 12px;
}

.search-wrapper .v-text-field {
  flex: 1;
}

/* ==================== POPULAR ==================== */

.popular {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 18px;

  color: #71827c;

  font-size: 13px;
}

.popular span {
  margin-right: 4px;
}

/* ==================== HERO PREVIEW ==================== */

.hero-preview {
  display: flex;

  align-items: center;

  justify-content: center;
}

.preview-card {
  width: 380px;

  padding: 18px;

  border: 1px solid #1e302a;

  border-radius: 28px;

  background: #101d18;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);

  transform: rotate(3deg);

  transition: transform 0.3s ease;
}

.preview-card:hover {
  transform: rotate(0deg) translateY(-6px);
}

.preview-badge {
  display: flex;

  align-items: center;

  gap: 8px;

  padding: 10px 8px 14px;

  color: #8fa39c;

  font-size: 12px;

  font-weight: 700;
}

.preview-badge .v-icon {
  color: #55d4c6;
}

.preview-image {
  height: 330px;

  overflow: hidden;

  border-radius: 20px;

  background: #16251f;

  display: block;
}

.preview-image :deep(.v-img) {
  width: 100%;

  height: 100%;
}

.preview-image :deep(.v-img__img) {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 0.35s ease;
}

.preview-card:hover .preview-image :deep(.v-img__img) {
  transform: scale(1.04);
}

.preview-info {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 16px;

  padding: 18px 6px 4px;
}

.preview-info div {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.preview-info span {
  color: #71827c;

  font-size: 11px;

  font-weight: 700;
}

.preview-info strong {
  color: #f8fafc;

  font-size: 15px;
}

.preview-info .preview-price {
  color: #55d4c6;

  white-space: nowrap;
}

/* ==================== SECTION HEADER ==================== */

.section-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 32px;
}

.section-header h2 {
  margin: 0;

  color: #f8fafc;

  font-size: 32px;

  line-height: 1.2;

  font-weight: 800;

  letter-spacing: -0.8px;
}

.section-description {
  margin: 10px 0 0;

  color: #71827c;

  font-size: 15px;
}

/* ==================== CATEGORIES ==================== */

.categories-section {
  padding: 80px 0 100px;
}

.categories-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 16px;

  width: 100%;
}

/* ==================== PRODUCTS ==================== */

.products-section {
  padding: 20px 0 100px;
}

.products-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 20px;

  width: 100%;
}

/* ==================== TABLET ==================== */

@media (max-width: 1100px) {
  .categories-grid,
  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;

    gap: 40px;

    padding: 60px 0;
  }

  .hero-preview {
    display: none;
  }
}

/* ==================== MOBILE ==================== */

@media (max-width: 600px) {
  .hero {
    min-height: auto;

    padding: 40px 0;
  }

  .hero h1 {
    font-size: 38px;

    letter-spacing: -1px;
  }

  .description {
    font-size: 16px;
  }

  .search-wrapper {
    flex-direction: column;

    align-items: stretch;
  }

  .search-wrapper .v-btn {
    width: 100%;
  }

  .section-header {
    align-items: flex-start;

    flex-direction: column;

    gap: 16px;
  }

  .categories-grid,
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
