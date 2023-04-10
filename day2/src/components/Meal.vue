<script>
import styles from './Meal.module.css';
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
  <div :class="styles.meal" :style="{ '--background-color': colour }">
    <img :class="styles.image" :src="image" :alt="name" />
    <div>
      <h2 :class="styles.name">{{ name }}</h2>
      <p :class="styles.price">${{ price }}</p>
      <button
        :class="[{ [styles.inCart]: cart > 0 }, styles.button]"
        :disabled="cart > 0"
        @click="addToCart(id)"
      >
        <img v-if="cart > 0" src="../assets/check.svg" alt="" />
        {{ cart > 0 ? 'In Cart' : 'Add to Cart' }}
      </button>
    </div>
  </div>
</template>
