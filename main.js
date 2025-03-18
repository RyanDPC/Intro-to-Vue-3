const product = ["Socks", "Boots"];
const app = Vue.createApp({
  data() {
    return { product: product };
  },
});
const testing = Vue.createApp({
  data() {
    return { test: (test = ["T-shirt", "Pullover"]) };
  },
});
