const variants = [
  {
    id: 1,
    name: "Socks",
    image: "./assets/images/socks_blue.jpg",
    description: "Une paire de chaussettes chaudes et confortables",
    inventory: 10,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XXL" }],
  },
  {
    id: 2,
    name: "Socks",
    image: "./assets/images/socks_green.jpg",
    description: "Une paire de chaussure haute",
    inventory: 0,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XXL" }],
  },
];

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      variants: variants,
      currentVariant: variants[0],
      url: "https://www.etml.ch/",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
