<template>
  <v-footer class="footer" border>
    <v-container max-width="1280">
      <div class="footer-content">
        <div>
          <div class="footer-brand">DigiMarket</div>

          <p class="footer-description">
            Discover digital products built for creators, developers and modern businesses.
          </p>
        </div>

        <div class="footer-links">
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>

      <v-divider class="my-6" />

      <div class="copyright">© 2026 DigiMarket. All rights reserved.</div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  margin-top: 80px;

  background: #101d18;
}

.footer-content {
  display: flex;

  justify-content: space-between;

  gap: 40px;

  padding-top: 40px;
}

.footer-brand {
  font-size: 20px;

  font-weight: 800;

  color: #f8fafc;
}

.footer-description {
  max-width: 400px;

  margin-top: 10px;

  color: #91a39c;

  line-height: 1.7;
}

.footer-links {
  display: flex;

  align-items: flex-start;

  gap: 24px;
}

.footer-links a {
  color: #91a39c;

  text-decoration: none;

  font-size: 14px;
}

.footer-links a:hover {
  color: #008f83;
}

.copyright {
  padding-bottom: 30px;

  color: #71827c;

  font-size: 13px;
}
</style>
