<template>
  <v-app-bar height="72" color="background" elevation="0" border>
    <v-container class="d-flex align-center" max-width="1280">
      <!-- LOGO -->

      <router-link to="/" class="logo">
        <div class="logo-icon">
          <v-icon icon="mdi-storefront-outline" size="24" />
        </div>

        <span>DigiMarket</span>
      </router-link>

      <v-spacer />

      <!-- NAVIGATION -->

      <div class="nav-links">
        <router-link to="/" class="nav-link"> Discover </router-link>

        <router-link to="/products" class="nav-link"> Categories </router-link>

        <router-link to="/deals" class="nav-link"> Deals </router-link>
      </div>

      <v-spacer />

      <!-- ACTIONS -->

      <div class="nav-actions">
        <v-btn icon variant="text" class="nav-action">
          <v-icon icon="mdi-magnify" />
        </v-btn>

        <v-btn icon variant="text" class="nav-action">
          <v-icon icon="mdi-heart-outline" />
        </v-btn>

        <v-btn icon variant="text" class="nav-action">
          <v-icon icon="mdi-cart-outline" />
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  color: #f8fafc;

  font-size: 20px;
  font-weight: 800;
}

.logo-icon {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: #008f83;

  color: white;

  box-shadow: 0 8px 20px rgba(0, 143, 131, 0.2);
}

.nav-links {
  display: flex;
  align-items: center;

  gap: 32px;
}

.nav-link {
  text-decoration: none;

  color: #91a39c;

  font-size: 14px;
  font-weight: 600;

  transition: 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #55d4c6;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.nav-action {
  color: #a5b5af;
}

.nav-action:hover {
  color: #55d4c6;
}
</style>
