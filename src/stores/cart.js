import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCart = defineStore('cart', () => {
  const cart = ref([]);

  const cartItemsCount = computed(() => {
    return cart.value.length;
  })
  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + item.details.price, 0).toFixed(2)
  })
  function addToCart(item) {
    console.log(item);
    cart.value.push(item)
  }
  function removeFromCart(item) {
    cart.value.splice(cart.value.indexOf(item), 1)
  }

  return { cart, cartItemsCount, addToCart, cartTotal, removeFromCart }
})
