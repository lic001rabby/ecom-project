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


  /**
   * Adds an item to the cart.
   *
   * @param {any} item - The item to be added to the cart.
   */
  function addToCart(item) {
    console.log(item);
    cart.value.push(item)
  }

  /**
   * Removes the specified item from the cart.
   *
   * @param {any} item - The item to be removed from the cart.
   * @return {undefined} This function does not return any value.
   */
  function removeFromCart(item) {
    cart.value.splice(cart.value.indexOf(item), 1)
  }



  /**
   * Clears the cart by setting the value to an empty array.
   *
   * @param {none} None - This function does not take any parameters.
   * @return {undefined} This function does not return a value.
   */
  function clearCart() {
    cart.value = [];
  }

  return { cart, cartItemsCount, addToCart, cartTotal, removeFromCart, clearCart }
})
