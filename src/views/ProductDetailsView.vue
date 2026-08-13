<template>
  <div class="product-details-page">
    <v-container max-width="1280">
      <!-- ==================== NOT FOUND ==================== -->

      <div v-if="!product" class="not-found">
        <v-icon icon="mdi-package-variant-closed" size="72" />

        <h1>Product not found</h1>

        <p>The product you're looking for doesn't exist or has been removed.</p>

        <v-btn color="primary" rounded="xl" to="/products"> Back to Products </v-btn>
      </div>

      <!-- ==================== PRODUCT ==================== -->

      <template v-else>
        <!-- ==================== BREADCRUMB ==================== -->

        <div class="breadcrumb">
          <v-btn
            icon="mdi-arrow-left"
            variant="text"
            size="small"
            class="back-btn"
            @click="goBack"
          />

          <span class="breadcrumb-link" @click="goToProducts"> Products </span>

          <v-icon icon="mdi-chevron-right" size="18" />

          <span class="breadcrumb-current">
            {{ product.title }}
          </span>
        </div>

        <!-- ==================== MAIN PRODUCT ==================== -->

        <section class="product-main">
          <!-- ==================== GALLERY ==================== -->

          <div class="gallery">
            <div class="main-image">
              <img
                :src="selectedImage || placeholder"
                :alt="product.title"
                @error="handleImgError"
              />

              <div class="image-badge">
                <v-icon icon="mdi-check-circle" size="15" />

                In stock
              </div>
            </div>

            <!-- THUMBNAILS -->

            <div v-if="product.images?.length" class="thumbnails">
              <button
                v-for="(image, index) in product.images"
                :key="image"
                class="thumbnail"
                :class="{
                  active: selectedImage === image,
                }"
                @click="selectedImage = image"
              >
                <img
                  :src="image"
                  :alt="`${product.title} preview ${index + 1}`"
                  @error="handleImgError"
                />
              </button>
            </div>
          </div>

          <!-- ==================== PRODUCT INFO ==================== -->

          <div class="product-info">
            <!-- CATEGORY -->

            <div class="product-category">
              {{ product.category }}
            </div>

            <!-- TITLE -->

            <h1 class="product-title">
              {{ product.title }}
            </h1>

            <!-- DESCRIPTION -->

            <p class="product-description">
              {{ product.longDescription || product.description }}
            </p>

            <!-- RATING -->

            <div class="rating-row">
              <div class="rating">
                <v-icon icon="mdi-star" size="18" />

                <strong>
                  {{ product.rating }}
                </strong>

                <span> ({{ product.reviews }} reviews) </span>
              </div>

              <div class="sales">
                <v-icon icon="mdi-trending-up" size="17" />

                <span> {{ product.sales }} sold </span>
              </div>
            </div>

            <v-divider class="info-divider" />

            <!-- PRICE -->

            <div class="price-section">
              <span class="price"> ${{ Number(product.price).toFixed(2) }} </span>

              <span class="license"> One-time purchase </span>
            </div>

            <!-- ACTIONS -->

            <div class="actions">
              <v-btn
                color="primary"
                size="large"
                rounded="xl"
                block
                prepend-icon="mdi-cart-outline"
                class="add-cart-btn"
                @click="addToCart"
              >
                Add to Cart
              </v-btn>

              <v-btn
                size="large"
                rounded="xl"
                variant="outlined"
                block
                prepend-icon="mdi-heart-outline"
                class="wishlist-btn"
              >
                Add to Wishlist
              </v-btn>
            </div>

            <!-- SMALL INFO -->

            <div class="purchase-info">
              <div class="purchase-info-item">
                <v-icon icon="mdi-shield-check-outline" size="20" />

                <div>
                  <strong> Secure purchase </strong>

                  <span> Safe and reliable checkout </span>
                </div>
              </div>

              <div class="purchase-info-item">
                <v-icon icon="mdi-truck-fast-outline" size="20" />

                <div>
                  <strong> Fast delivery </strong>

                  <span> Ready for your next order </span>
                </div>
              </div>
            </div>

            <!-- FEATURES -->

            <div v-if="product.features?.length" class="features">
              <h3>What's included</h3>

              <div v-for="feature in product.features" :key="feature" class="feature">
                <v-icon icon="mdi-check-circle" size="19" />

                <span>
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== PRODUCT DETAILS ==================== -->

        <section class="details-section">
          <div class="details-content">
            <p class="section-eyebrow">PRODUCT DETAILS</p>

            <h2>Designed for everyday use</h2>

            <p>
              {{ product.longDescription || product.description }}
            </p>

            <p>
              We select products that combine useful functionality, thoughtful design, and a clean
              modern aesthetic. Every item is chosen to fit naturally into your everyday routine.
            </p>
          </div>

          <div class="details-highlight">
            <div class="highlight-icon">
              <v-icon icon="mdi-star" size="24" />
            </div>
            <div>
              <strong> Carefully selected </strong>

              <span> Quality products for everyday life. </span>
            </div>
          </div>
        </section>

        <!-- ==================== REVIEWS ==================== -->

        <section class="reviews-section">
          <p class="section-eyebrow">CUSTOMER REVIEWS</p>

          <div class="reviews-header">
            <div>
              <h2>What customers say</h2>

              <p>Reviews from customers who purchased this product.</p>
            </div>

            <!-- OVERALL RATING -->

            <div class="overall-rating">
              <div class="rating-number">
                {{ product.rating }}
              </div>

              <div class="stars">
                <v-icon v-for="star in 5" :key="star" icon="mdi-star" size="18" />
              </div>

              <span> {{ product.reviews }} reviews </span>
            </div>
          </div>

          <!-- REVIEW LIST -->

          <div v-if="product.reviewsList?.length" class="reviews-list">
            <div v-for="review in product.reviewsList" :key="review.id" class="review-card">
              <div class="review-top">
                <div class="review-user">
                  <v-avatar size="44" class="review-avatar">
                    <span>
                      {{ review.name.charAt(0).toUpperCase() }}
                    </span>
                  </v-avatar>

                  <div>
                    <h3>
                      {{ review.name }}
                    </h3>

                    <div class="review-stars">
                      <v-icon
                        v-for="star in 5"
                        :key="star"
                        icon="mdi-star"
                        size="15"
                        :class="{
                          muted: star > review.rating,
                        }"
                      />
                    </div>
                  </div>
                </div>

                <span class="verified">
                  <v-icon icon="mdi-check-circle" size="15" />

                  Verified purchase
                </span>
              </div>

              <p class="review-comment">
                {{ review.comment }}
              </p>
            </div>
          </div>

          <!-- NO REVIEWS -->

          <div v-else class="no-reviews">
            <v-icon icon="mdi-comment-outline" size="48" />

            <p>No reviews yet.</p>
          </div>
        </section>

        <!-- ==================== RELATED PRODUCTS ==================== -->

        <section v-if="relatedProducts.length" class="related-section">
          <div class="section-header">
            <div>
              <p class="section-eyebrow">YOU MAY ALSO LIKE</p>

              <h2>Related products</h2>

              <p class="section-description">More products you might like.</p>
            </div>

            <v-btn
              variant="text"
              color="primary"
              append-icon="mdi-arrow-right"
              @click="goToProducts"
            >
              View all
            </v-btn>
          </div>

          <div class="related-grid">
            <ProductCard
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct.id"
              :id="relatedProduct.id"
              :title="relatedProduct.title"
              :description="relatedProduct.description"
              :image="relatedProduct.image"
              :category="relatedProduct.category"
              :price="relatedProduct.price"
              :rating="relatedProduct.rating"
              :reviews="relatedProduct.reviews"
            />
          </div>
        </section>
      </template>
    </v-container>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import ProductCard from '../components/ProductCard.vue'

import { products } from '../data/products'

import { useCartStore } from '../stores/cart'

const route = useRoute()

const router = useRouter()

const cartStore = useCartStore()

// =====================================================
// CURRENT PRODUCT
// =====================================================

const product = computed(() => {
  const id = Number(route.params.id)

  return products.find((item) => item.id === id)
})

// =====================================================
// ADD TO CART
// =====================================================

function addToCart() {
  if (!product.value) {
    return
  }

  cartStore.addToCart(product.value)
}

// =====================================================
// SELECTED IMAGE
// =====================================================

// Simple inline SVG placeholder (data URL) used when images fail to load
const placeholder =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'><rect width='100%' height='100%' fill='%23102118'/><text x='50%' y='50%' fill='%2371827c' font-family='Arial, Helvetica, sans-serif' font-size='28' dominant-baseline='middle' text-anchor='middle'>Image unavailable</text></svg>"

const selectedImage = ref('')

watch(
  product,

  (newProduct) => {
    if (!newProduct) {
      selectedImage.value = ''

      return
    }

    selectedImage.value = newProduct.images?.[0] || newProduct.image || placeholder
  },

  {
    immediate: true,
  },
)

// Replace broken thumbnail/main images with the placeholder
function handleImgError(event) {
  try {
    event.target.src = placeholder
  } catch (e) {
    console.error('Error handling image load error:', e)
  }
}

// =====================================================
// RELATED PRODUCTS
// =====================================================

const relatedProducts = computed(() => {
  if (!product.value) {
    return []
  }

  return products
    .filter((item) => item.id !== product.value.id && item.category === product.value.category)
    .slice(0, 3)
})

// =====================================================
// NAVIGATION
// =====================================================

function goToProducts() {
  router.push('/products')
}

function goBack() {
  router.back()
}
</script>

<style scoped>
/* =====================================================
   PAGE
===================================================== */

.product-details-page {
  min-height: 100vh;

  padding: 25px 0 100px;

  background: #0b1512;

  color: #f8fafc;
}

/* =====================================================
   BREADCRUMB
===================================================== */

.breadcrumb {
  display: flex;

  align-items: center;

  gap: 8px;

  margin-bottom: 30px;

  color: #71827c;

  font-size: 14px;
}

.back-btn {
  color: #91a39c;
}

.breadcrumb-link {
  color: #55d4c6;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;
}

.breadcrumb-link:hover {
  color: #7be4d8;
}

.breadcrumb-current {
  max-width: 400px;

  overflow: hidden;

  color: #91a39c;

  text-overflow: ellipsis;

  white-space: nowrap;
}

/* =====================================================
   MAIN PRODUCT
===================================================== */

.product-main {
  display: grid;

  grid-template-columns:
    minmax(0, 1.1fr)
    minmax(380px, 0.9fr);

  gap: 70px;

  align-items: start;
}

/* =====================================================
   GALLERY
===================================================== */

.gallery {
  min-width: 0;
}

.main-image {
  position: relative;

  width: 100%;

  height: 560px;

  overflow: hidden;

  border-radius: 24px;

  background: #101d18;

  border: 1px solid #1e302a;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.22);
}

.main-image :deep(.v-img) {
  width: 100%;

  height: 100%;
}

.main-image img {
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;
}

.image-badge {
  position: absolute;

  top: 18px;
  left: 18px;

  display: flex;

  align-items: center;

  gap: 6px;

  padding: 8px 12px;

  border-radius: 999px;

  background: rgba(11, 21, 18, 0.88);

  border: 1px solid rgba(85, 212, 198, 0.2);

  color: #55d4c6;

  font-size: 12px;

  font-weight: 700;

  backdrop-filter: blur(8px);
}

.thumbnails {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 12px;

  margin-top: 14px;
}

.thumbnail {
  height: 105px;

  padding: 0;

  overflow: hidden;

  border: 2px solid transparent;

  border-radius: 14px;

  background: #101d18;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.thumbnail:hover {
  transform: translateY(-2px);

  border-color: #294139;
}

.thumbnail.active {
  border-color: #008f83;

  box-shadow: 0 0 0 2px rgba(0, 143, 131, 0.15);
}

.thumbnail img {
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;
}

/* =====================================================
   PRODUCT INFO
===================================================== */

.product-info {
  padding-top: 10px;
}

.product-category {
  display: inline-flex;

  align-items: center;

  padding: 7px 12px;

  border-radius: 999px;

  background: rgba(0, 143, 131, 0.12);

  border: 1px solid rgba(85, 212, 198, 0.16);

  color: #55d4c6;

  font-size: 12px;

  font-weight: 800;
}

.product-title {
  margin: 18px 0 15px;

  color: #f8fafc;

  font-size: clamp(36px, 4vw, 52px);

  line-height: 1.08;

  font-weight: 800;

  letter-spacing: -1.5px;
}

.product-description {
  margin: 0;

  color: #91a39c;

  font-size: 16px;

  line-height: 1.8;
}

/* =====================================================
   RATING
===================================================== */

.rating-row {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 20px;

  margin-top: 22px;
}

.rating {
  display: flex;

  align-items: center;

  gap: 6px;

  color: #d9e2df;

  font-size: 14px;
}

.rating .v-icon {
  color: #f5b942;
}

.rating span {
  color: #71827c;
}

.sales {
  display: flex;

  align-items: center;

  gap: 6px;

  color: #71827c;

  font-size: 14px;
}

.sales .v-icon {
  color: #55d4c6;
}

.info-divider {
  margin: 28px 0;

  border-color: #1e302a;
}

/* =====================================================
   PRICE
===================================================== */

.price-section {
  display: flex;

  align-items: baseline;

  gap: 14px;

  margin-bottom: 24px;
}

.price {
  color: #f8fafc;

  font-size: 36px;

  font-weight: 800;
}

.license {
  color: #71827c;

  font-size: 13px;
}

/* =====================================================
   ACTIONS
===================================================== */

.actions {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;
}

.add-cart-btn {
  box-shadow: 0 10px 25px rgba(0, 143, 131, 0.18);
}

.wishlist-btn {
  border-color: #294139 !important;

  color: #b4c3bd !important;
}

.wishlist-btn:hover {
  border-color: #008f83 !important;

  color: #55d4c6 !important;
}

/* =====================================================
   PURCHASE INFO
===================================================== */

.purchase-info {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;

  margin-top: 18px;
}

.purchase-info-item {
  display: flex;

  align-items: flex-start;

  gap: 10px;

  padding: 14px;

  border: 1px solid #1e302a;

  border-radius: 14px;

  background: #101d18;
}

.purchase-info-item > .v-icon {
  margin-top: 2px;

  color: #55d4c6;
}

.purchase-info-item div {
  display: flex;

  flex-direction: column;

  gap: 4px;
}

.purchase-info-item strong {
  color: #dce6e2;

  font-size: 12px;
}

.purchase-info-item span {
  color: #71827c;

  font-size: 11px;

  line-height: 1.4;
}

/* =====================================================
   FEATURES
===================================================== */

.features {
  margin-top: 24px;

  padding: 24px;

  border: 1px solid #1e302a;

  border-radius: 20px;

  background: #101d18;
}

.features h3 {
  margin: 0 0 18px;

  color: #f8fafc;

  font-size: 17px;

  font-weight: 800;
}

.feature {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 12px;

  color: #91a39c;

  font-size: 14px;
}

.feature .v-icon {
  color: #22c55e;
}

/* =====================================================
   DETAILS
===================================================== */

.details-section {
  display: grid;

  grid-template-columns:
    1fr
    300px;

  gap: 60px;

  margin-top: 90px;

  padding: 60px 70px;

  border-radius: 28px;

  background: #101d18;

  border: 1px solid #1e302a;
}

.details-content {
  max-width: 850px;
}

.section-eyebrow {
  margin: 0 0 10px;

  color: #55d4c6;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 1.5px;
}

.details-content h2 {
  margin: 0 0 20px;

  color: #f8fafc;

  font-size: 34px;

  line-height: 1.2;

  font-weight: 800;
}

.details-content p {
  margin: 0 0 18px;

  color: #91a39c;

  font-size: 16px;

  line-height: 1.8;
}

.details-highlight {
  align-self: center;

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 20px;

  border: 1px solid #1e302a;

  border-radius: 18px;

  background: #0b1512;
}

.highlight-icon {
  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border-radius: 14px;

  background: rgba(0, 143, 131, 0.12);

  color: #55d4c6;
}

.details-highlight div:last-child {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.details-highlight strong {
  color: #f8fafc;

  font-size: 13px;
}

.details-highlight span {
  color: #71827c;

  font-size: 12px;

  line-height: 1.5;
}

/* =====================================================
   REVIEWS
===================================================== */

.reviews-section {
  margin-top: 90px;
}

.reviews-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;

  margin-bottom: 30px;
}

.reviews-header h2 {
  margin: 0;

  color: #f8fafc;

  font-size: 32px;

  font-weight: 800;

  letter-spacing: -0.8px;
}

.reviews-header p {
  margin: 8px 0 0;

  color: #71827c;

  font-size: 15px;
}

.overall-rating {
  min-width: 160px;

  display: flex;

  align-items: center;

  flex-direction: column;

  gap: 5px;

  padding: 18px 22px;

  border: 1px solid #1e302a;

  border-radius: 18px;

  background: #101d18;
}

.rating-number {
  color: #f8fafc;

  font-size: 28px;

  font-weight: 800;
}

.stars {
  display: flex;

  gap: 2px;

  color: #f5b942;
}

.overall-rating > span {
  color: #71827c;

  font-size: 11px;
}

/* =====================================================
   REVIEW LIST
===================================================== */

.reviews-list {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;
}

.review-card {
  padding: 24px;

  border: 1px solid #1e302a;

  border-radius: 20px;

  background: #101d18;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.review-card:hover {
  transform: translateY(-3px);

  border-color: #294139;
}

.review-top {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 10px;
}

.review-user {
  display: flex;

  align-items: center;

  gap: 11px;
}

.review-avatar {
  background: #008f83 !important;

  color: white;
}

.review-user h3 {
  margin: 0 0 5px;

  color: #f8fafc;

  font-size: 14px;

  font-weight: 700;
}

.review-stars {
  display: flex;

  gap: 1px;

  color: #f5b942;
}

.review-stars .muted {
  color: #33443e;
}

.verified {
  display: flex;

  align-items: center;

  gap: 4px;

  color: #55d4c6;

  font-size: 10px;

  font-weight: 700;

  white-space: nowrap;
}

.review-comment {
  margin: 18px 0 0;

  color: #91a39c;

  font-size: 13px;

  line-height: 1.7;
}

/* =====================================================
   NO REVIEWS
===================================================== */

.no-reviews {
  min-height: 220px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  gap: 10px;

  border: 1px solid #1e302a;

  border-radius: 20px;

  background: #101d18;

  color: #71827c;
}

.no-reviews p {
  margin: 0;
}

/* =====================================================
   RELATED
===================================================== */

.related-section {
  margin-top: 90px;

  padding-bottom: 30px;
}

.section-header {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 30px;
}

.section-header h2 {
  margin: 0;

  color: #f8fafc;

  font-size: 32px;

  font-weight: 800;

  letter-spacing: -0.8px;
}

.section-description {
  margin: 8px 0 0;

  color: #71827c;

  font-size: 15px;
}

.related-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 24px;
}

/* =====================================================
   NOT FOUND
===================================================== */

.not-found {
  min-height: 650px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  text-align: center;

  color: #71827c;
}

.not-found h1 {
  margin: 20px 0 8px;

  color: #f8fafc;

  font-size: 36px;

  font-weight: 800;
}

.not-found p {
  margin: 0 0 24px;

  color: #91a39c;
}

/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1100px) {
  .product-main {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(320px, 0.8fr);

    gap: 40px;
  }

  .main-image {
    height: 500px;
  }

  .reviews-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .product-main {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .main-image {
    height: 500px;
  }

  .details-section {
    grid-template-columns: 1fr;
  }

  .details-highlight {
    max-width: 400px;
  }
}

@media (max-width: 650px) {
  .product-details-page {
    padding-top: 15px;
  }

  .breadcrumb {
    margin-bottom: 20px;
  }

  .breadcrumb-current {
    max-width: 180px;
  }

  .main-image {
    height: 350px;

    border-radius: 18px;
  }

  .thumbnails {
    grid-template-columns: repeat(4, 1fr);
  }

  .thumbnail {
    height: 75px;
  }

  .product-title {
    font-size: 36px;

    letter-spacing: -1px;
  }

  .actions {
    grid-template-columns: 1fr;
  }

  .purchase-info {
    grid-template-columns: 1fr;
  }

  .details-section {
    margin-top: 60px;

    padding: 30px 22px;

    border-radius: 22px;
  }

  .details-content h2 {
    font-size: 28px;
  }

  .reviews-section {
    margin-top: 60px;
  }

  .reviews-header {
    align-items: flex-start;

    flex-direction: column;
  }

  .overall-rating {
    width: 100%;
  }

  .reviews-list {
    grid-template-columns: 1fr;
  }

  .section-header {
    align-items: flex-start;

    flex-direction: column;

    gap: 15px;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
