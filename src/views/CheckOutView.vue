<template>
  <div class="container mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Checkout</h2>

    <div v-if="cartItems.length === 0" class="text-center text-gray-600">
      Your cart is empty.
    </div>

    <div v-else>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="border rounded-lg p-4 mb-4"
      >
        <h3 class="text-lg font-semibold">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.details.description }}</p>
        <p class="text-gray-600 mt-2">Price: {{ item.details.price }}</p>
      </div>

      <div class="text-right">
        <p class="text-xl font-semibold">Total: {{ totalPrice }}</p>
        <button
          @click="placeOrder"
          class="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCart } from "@/stores/cart";

export default {
  setup() {
    const cartStore = useCart();
    const cartItems = computed(() => cartStore.cart);

    const totalPrice = computed(() => {
      return cartStore.cartTotal;
    });

    const placeOrder = () => {
      cartStore.clearCart();
      alert("Thank you for your order!");
    };

    return {
      cartItems,
      totalPrice,
      placeOrder,
    };
  },
};
</script>
