<script>
export default {
  name: 'Meal',
  methods: {
    addToCart(id) {
      this.$emit('updateCart', id);
    },
  },
};
</script>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
  cart: Number,
});
// console.log(props.name);

const count = ref(0);
</script>

<template>
  <div>
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <!-- <button v-show="count === 0" @click="count++">
      Add to Cart {{ count }}
    </button>
    <button v-show="count > 0" @click="count++">In Cart {{ count }}</button> -->
    <button @click="addToCart(id)">Add to Cart</button>
  </div>
</template>

<style scoped></style>
