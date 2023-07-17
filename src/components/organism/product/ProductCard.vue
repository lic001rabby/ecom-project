<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover rounded-t-lg"
    />
    <div class="p-4">
      <h2 class="text-xl font-semibold">{{ product.name }}</h2>
      <p class="text-gray-600 mt-2">{{ product.details.price }}</p>
      <button
        @click="addToCart(product)"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/stores/cart";
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { addToCart } = useCart();
</script>
