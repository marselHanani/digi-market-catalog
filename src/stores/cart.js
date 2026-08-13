import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    cartCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),

    cartTotal: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const existingItem = this.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity++
        return
      }

      this.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId)
    },

    increaseQuantity(productId) {
      const item = this.items.find((item) => item.id === productId)

      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(productId) {
      const item = this.items.find((item) => item.id === productId)

      if (!item) {
        return
      }

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(productId)
      }
    },

    clearCart() {
      this.items = []
    },
  },
})
