import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCart = defineStore('cart', () => {
  const cart = ref([]);

  const cartItemsCount = computed(() => {
    return cart.value.length;
  })
  function addToCart(item) {
    cart.push(item)
  }

  return { cart, cartItemsCount, addToCart }
})
