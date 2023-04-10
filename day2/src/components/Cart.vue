<script>
export default {
  methods: {
    addToCart(id) {
      this.$emit('addToCart', id);
    },
    removeFromCart(id) {
      this.$emit('removeFromCart', id);
    },
  },
};
</script>

<script setup>
const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
  cart: Number,
  colour: String,
});
</script>

<template>
  <div>
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <button @click="removeFromCart(id)">&lt;</button>
    <p>{{ cart }}</p>
    <button @click="addToCart(id)">&gt;</button>
    <p>${{ cart * price }}</p>
  </div>
</template>

<style scoped></style>
