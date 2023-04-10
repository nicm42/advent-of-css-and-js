<script>
import styles from './App.module.css';
export default {
  data() {
    return {
      styles,
      meals: [
        {
          id: 1,
          name: 'French Fries with Ketchup',
          price: 2.23,
          image: 'src/assets/plate__french-fries.png',
          cart: 0,
          colour: 'rgba(122, 179, 243, 0.2)',
        },
        {
          id: 2,
          name: 'Salmon and Vegetables',
          price: 5.12,
          image: 'src/assets/plate__salmon-vegetables.png',
          cart: 0,
          colour: 'rgba(233, 121, 178, 0.2)',
        },
        {
          id: 3,
          name: 'Spaghetti with Sauce',
          price: 7.83,
          image: 'src/assets/plate__spaghetti-meat-sauce.png',
          cart: 0,
          colour: 'rgba(215, 215, 249, 0.2)',
        },
        {
          id: 4,
          name: 'Bacon and Eggs',
          price: 3.34,
          image: 'src/assets/plate__bacon-eggs.png',
          cart: 0,
          colour: 'rgba(120, 247, 187, 0.2)',
        },
        {
          id: 5,
          name: 'Chicken Salad',
          price: 4.5,
          image: 'src/assets/plate__chicken-salad.png',
          cart: 0,
          colour: 'rgba(233, 121, 178, 0.6)',
        },
        {
          id: 6,
          name: 'Fish Sticks and Fries',
          price: 2.75,
          image: 'src/assets/plate__fish-sticks-fries.png',
          cart: 0,
          colour: '#D7D7F9',
        },
        {
          id: 7,
          name: 'Ravioli',
          price: 8.62,
          image: 'src/assets/plate__ravioli.png',
          cart: 0,
          colour: 'rgba(122, 179, 243, 0.2)',
        },
        {
          id: 8,
          name: 'Tortellini',
          price: 6.12,
          image: 'src/assets/plate__tortellini.png',
          cart: 0,
          colour: 'rgba(233, 121, 178, 0.2)',
        },
      ],
    };
  },
  methods: {
    addToCart(id) {
      let mealToUpdate = this.meals.find((meal) => meal.id === id);
      let index = this.meals.indexOf(mealToUpdate);
      this.meals[index].cart += 1;
    },
    removeFromCart(id) {
      let mealToUpdate = this.meals.find((meal) => meal.id === id);
      let index = this.meals.indexOf(mealToUpdate);
      this.meals[index].cart -= 1;
    },
  },
  computed: {
    sumOfMeals() {
      return this.meals.reduce((total, meal) => meal.cart + total, 0);
    },
    mealsToShow() {
      return this.meals.filter((meal) => meal.cart > 0);
    },
    totalPrice() {
      return this.meals.reduce(
        (total, meal) => meal.cart * meal.price + total,
        0
      );
    },
  },
};
</script>

<script setup>
import Meal from './components/Meal.vue';
import Cart from './components/Cart.vue';
</script>

<template>
  <div :class="styles.setup">
    <div :class="styles.section">
      <h1 :class="styles.heading">To Go Menu</h1>
      <Meal
        v-for="meal of meals"
        v-bind="meal"
        :key="meal.id"
        @addToCart="addToCart($event)"
      />
    </div>
    <div :class="styles.section">
      <h2 :class="styles.heading">Your Cart</h2>
      <p v-if="sumOfMeals === 0">Your cart is empty</p>
      <div>
        <template v-for="(meal, index) in meals">
          <Cart
            v-if="meal.cart > 0"
            v-bind="meal"
            :key="meal.id"
            :is-last="index === mealsToShow.length - 1"
            @addToCart="addToCart($event)"
            @removeFromCart="removeFromCart($event)"
          />
        </template>
      </div>
      <hr :class="styles.line" v-if="sumOfMeals > 0" />
      <div :class="styles.totalPrice" v-if="sumOfMeals > 0">
        <p :class="styles.total">Total:</p>
        <p :class="styles.price">${{ parseFloat(totalPrice).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
