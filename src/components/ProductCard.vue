<template>
  <v-card class="product-card" variant="flat" rounded="xl" @click="goToDetails">
    <!-- IMAGE -->

    <div class="product-image-wrapper">
      <v-img :src="image" :alt="title" cover class="product-image" />

      <div class="product-actions">
        <v-chip class="product-category" size="small" variant="flat">
          {{ category }}
        </v-chip>

        <v-btn
          class="favorite-btn"
          icon="mdi-heart-outline"
          size="small"
          variant="flat"
          @click.stop
        />
      </div>
    </div>

    <!-- CONTENT -->

    <div class="product-content">
      <h3 class="product-title">
        {{ title }}
      </h3>

      <p class="product-description">
        {{ description }}
      </p>

      <div class="product-meta">
        <div class="rating">
          <v-icon icon="mdi-star" size="16" />

          <span>{{ rating }}</span>

          <span class="reviews"> ({{ reviews }}) </span>
        </div>

        <div class="price">${{ Number(price).toFixed(2) }}</div>
      </div>

      <v-btn
        block
        color="primary"
        variant="tonal"
        rounded="lg"
        class="details-btn"
        append-icon="mdi-arrow-right"
        @click.stop="goToDetails"
      >
        View Details
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  reviews: {
    type: Number,
    required: true,
  },
})

function goToDetails() {
  router.push(`/products/${props.id}`)
}
</script>

<style scoped>
.product-card {
  overflow: hidden;

  cursor: pointer;

  border: 1px solid #1e302a;

  background: #101d18;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);

  border-color: #17675e;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
}

/* IMAGE */

.product-image-wrapper {
  position: relative;

  height: 230px;

  overflow: hidden;

  background: #16251f;
}

.product-image {
  width: 100%;
  height: 100%;

  transition: transform 0.35s ease;
}

.product-card:hover .product-image {
  transform: scale(1.04);
}

/* ACTIONS */

.product-actions {
  position: absolute;

  top: 14px;
  left: 14px;
  right: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-category {
  color: #55d4c6;

  background: rgba(11, 21, 18, 0.88);

  border: 1px solid rgba(85, 212, 198, 0.2);

  font-weight: 700;
}

.favorite-btn {
  background: rgba(11, 21, 18, 0.88);

  color: #b5c3be;
}

/* CONTENT */

.product-content {
  padding: 22px;
}

.product-title {
  margin: 0;

  color: #f8fafc;

  font-size: 18px;

  font-weight: 800;
}

.product-description {
  display: -webkit-box;

  overflow: hidden;

  margin: 9px 0 18px;

  color: #91a39c;

  font-size: 13px;

  line-height: 1.6;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-meta {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;
}

.rating {
  display: flex;

  align-items: center;

  gap: 5px;

  color: #d9e2df;

  font-size: 13px;
}

.rating .v-icon {
  color: #f5b942;
}

.reviews {
  color: #71827c;
}

.price {
  color: #f8fafc;

  font-size: 20px;

  font-weight: 800;
}

.details-btn {
  font-weight: 700;
}
</style>
