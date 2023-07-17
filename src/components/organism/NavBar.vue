<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-2xl font-bold">
        E-Commerce
      </router-link>
      <div class="flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-300"
          >Home</router-link
        >
        <router-link to="/cart" class="text-white hover:text-gray-300">
          Cart ({{ cartItemsCount }})
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useCart } from "@/stores/cart";

export default {
  setup() {
    const cartStore = useCart();

    const cartItemsCount = computed(() => cartStore.cartItemsCount);

    return {
      cartItemsCount,
    };
  },
};
</script>

<style></style>
