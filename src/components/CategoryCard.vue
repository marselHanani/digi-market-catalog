<template>
  <v-card class="category-card" variant="flat" rounded="xl">
    <div class="category-icon">
      <v-icon :icon="icon" size="28" />
    </div>

    <div class="category-content">
      <h3>{{ title }}</h3>

      <p>{{ count }} products</p>
    </div>

    <v-icon class="arrow" icon="mdi-arrow-top-right" size="20" />
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  count: {
    type: Number,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.category-card {
  position: relative;

  display: flex;
  align-items: center;

  min-height: 130px;

  padding: 24px;

  border: 1px solid #1e302a;

  background: #101d18;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.category-card:hover {
  transform: translateY(-4px);

  border-color: #17675e;

  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
}

.category-icon {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 18px;

  border-radius: 16px;

  background: rgba(0, 143, 131, 0.13);

  color: #45c9bb;
}

.category-content h3 {
  margin: 0;

  color: #f8fafc;

  font-size: 16px;

  font-weight: 700;
}

.category-content p {
  margin: 6px 0 0;

  color: #71827c;

  font-size: 13px;
}

.arrow {
  position: absolute;

  top: 22px;
  right: 22px;

  color: #71827c;

  transition: 0.2s ease;
}

.category-card:hover .arrow {
  color: #55d4c6;

  transform: translate(2px, -2px);
}
</style>
