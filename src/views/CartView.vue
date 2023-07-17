<template>
  <div class="container mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Shopping Cart</h2>

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
        <button
          @click="removeFromCart(item)"
          class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Remove from Cart
        </button>
      </div>

      <div class="text-right">
        <p class="text-xl font-semibold">Total: {{ totalPrice }}</p>
        <button
          @click="checkout"
          class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useCart } from "@/stores/cart"; // Import the Pinia store
import { useRouter } from "vue-router";

export default {
  setup() {
    const cartStore = useCart();
    const cartItems = ref([]);
    const router = useRouter();

    const totalPrice = computed(() => {
      return cartItems.value.reduce(
        (total, item) => total + item.details.price,
        0
      );
    });

    cartItems.value = cartStore.cart;

    const removeFromCart = (item) => {
      cartStore.removeFromCart(item);
    };

    const checkout = () => {
      router.push("/checkout");
    };

    return {
      cartItems,
      totalPrice,
      removeFromCart,
      checkout,
    };
  },
};
</script>

<style></style>
