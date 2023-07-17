<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart(product)"
    />
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { useProducts } from "../../../composables/products";
import { useCart } from "@/stores/cart";
const { addToCart } = useCart();

const { products } = useProducts();
</script>
