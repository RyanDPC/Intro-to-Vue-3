const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      reviews: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      this.cart.pop(id);
    },
  },
});
