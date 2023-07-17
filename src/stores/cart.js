import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCart = defineStore('cart', () => {
  const cart = ref([]);

  const cartItemsCount = computed(() => {
    return cart.value.length;
  })
  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.details.price, 0)
  })
  function addToCart(item) {
    console.log(item);
    cart.value.push(item)
  }

  return { cart, cartItemsCount, addToCart, cartTotal }
})
