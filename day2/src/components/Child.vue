<script>
export default {
  props: {
    counter: {
      type: Number,
    },
  },
  data: () => ({
    childCounter: 0,
  }),
  created() {
    // the prop needs to be re-assigned here. Vue doesn't like prop mutation
    this.childCounter = this.counter;
  },
  methods: {
    increment() {
      this.childCounter++;
      this.$emit('update:counter', this.childCounter);
    },
  },
};
</script>

<template>
  <div>Child Counter: {{ childCounter }}</div>
  <button @click="increment">Increment Counter</button>
</template>
