<script>
export default {
  data() {
    return {
      hasBeenClicked: false,
    };
  },
  methods: {
    addToCart(id) {
      this.hasBeenClicked = true;
      this.$emit('updateCart', id);
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
});
</script>

<template>
  <div>
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <button :disabled="hasBeenClicked" @click="addToCart(id)">
      {{ hasBeenClicked ? 'In Cart' : 'Add to Cart' }}
    </button>
  </div>
</template>

<style scoped></style>
