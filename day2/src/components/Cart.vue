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
  mounted() {
    console.log(this.isLast);
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
  isLast: Boolean,
});
</script>

<template>
  <div :class="styles.cart">
    <div :class="styles.imageContainer">
      <img :class="styles.image" :src="image" :alt="name" />
      <p :class="styles.itemOnImage">{{ cart }}</p>
    </div>
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
        <p :class="styles.total">${{ parseFloat(cart * price).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
