<script>
export default {
  data() {
    return {
      meals: [
        {
          name: 'French Fries with Ketchup',
          price: 2.23,
          image: 'src/assets/plate__french-fries.png',
        },
        {
          name: 'Salmon and Vegetables',
          price: 5.12,
          image: 'src/assets/plate__salmon-vegetables.png',
        },
        {
          name: 'Spaghetti with Sauce',
          price: 7.83,
          image: 'src/assets/plate__spaghetti-meat-sauce.png',
        },
        {
          name: 'Bacon and Eggs',
          price: 3.34,
          image: 'src/assets/plate__bacon-eggs.png',
        },
        {
          name: 'Chicken Salad',
          price: 4.5,
          image: 'src/assets/plate__chicken-salad.png',
        },
        {
          name: 'Fish Sticks and Fries',
          price: 2.75,
          image: 'src/assets/plate__fish-sticks-fries.png',
        },
        {
          name: 'Ravioli',
          price: 8.62,
          image: 'src/assets/plate__ravioli.png',
        },
        {
          name: 'Tortellini',
          price: 6.12,
          image: 'src/assets/plate__tortellini.png',
        },
      ],
    };
  },
};
</script>

<script setup>
import Meal from './components/Meal.vue';
</script>

<template>
  <Meal v-for="meal of meals" v-bind="meal" />
</template>

<style scoped></style>
