<script setup>
const props = defineProps({
  name: String,
  price: Number,
  image: String,
});
// console.log(props.name);
</script>

<template>
  <img :src="image" :alt="name" />
  <h2>{{ name }}</h2>
  <p>${{ price }}</p>
  <button>Add {{ name }} to Cart</button>
</template>

<style scoped></style>
