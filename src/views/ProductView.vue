<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-3xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600 my-2">Price: {{ product.details.price }}</p>
        <p class="text-gray-600 my-2">Company: {{ product.details.company }}</p>
        <p class="text-gray-600 my-2">{{ product.details.description }}</p>
        <p class="text-gray-600 my-2">
          Created At: {{ product.details.createdAt }}
        </p>
        <p class="text-gray-600 my-2">
          Updated At: {{ product.details.updatedAt }}
        </p>
        <p class="text-gray-600 my-2">DOB: {{ product.details.dob }}</p>
        <button
          @click="addTo"
          class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/stores/cart"; // Import the Pinia store
import { useRoute } from "vue-router";
import { useProducts } from "../composables/products";

const { params } = useRoute();
const { getProductById } = useProducts();
const product = getProductById(params.id);
const { addToCart } = useCart();

const addTo = () => {
  addToCart(product);
  alert("Product added to the cart!");
};
</script>

<style></style>
