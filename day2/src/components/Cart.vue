<script>
import styles from './Cart.module.css';
export default {
  data() {
    return {
      styles,
    };
  },
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
  <div :class="styles.cart">
    <img :class="styles.image" :src="image" :alt="name" />
    <div>
      <h2 :class="styles.name">{{ name }}</h2>
      <p :class="styles.price">${{ price }}</p>
      <div :class="styles.info">
        <div :class="styles.buttons">
          <button :class="styles.button" @click="removeFromCart(id)">
            <img src="../assets/chevron.svg" alt="Decrease" />
          </button>
          <p :class="styles.items">{{ cart }}</p>
          <button
            :class="[styles.button, styles.rotate]"
            @click="addToCart(id)"
          >
            <img src="../assets/chevron.svg" alt="Increase" />
          </button>
        </div>
        <p :class="styles.total">${{ cart * price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
