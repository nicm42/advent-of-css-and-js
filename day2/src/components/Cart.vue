<script setup>
const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
  cart: Number,
});
</script>

<template>
  <div>
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <button>&lt;</button>
    <p>{{ cart }}</p>
    <button>&gt;</button>
    <p>${{ cart * price }}</p>
  </div>
</template>

<style scoped></style>
