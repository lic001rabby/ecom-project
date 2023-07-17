<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <router-link :to="product.id" v-for="product in products" :key="product.id">
      <ProductCard :product="product" @add-to-cart="addToCart(product)"
    /></router-link>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { useProducts } from "../../../composables/products";
import { useCart } from "@/stores/cart";
const { addToCart } = useCart();

const { products } = useProducts();
</script>
