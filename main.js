const variants = [
  {
    id: 1,
    name: "Socks",
    image: "./assets/images/socks_blue.jpg",
    description: "Une paire de chaussettes chaudes et confortables",
    inventory: 10,
    color: "blue",
    inStock: true,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XXL" }],
    quantity: 50,
  },
  {
    id: 2,
    name: "Socks",
    image: "./assets/images/socks_green.jpg",
    description: "Une paire de chaussure haute",
    inventory: 0,
    color: "green",
    inStock: false,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XXL" }],
    quantitty: 0,
  },
];

const app = Vue.createApp({
  data() {
    return {
      brand: "Vue Mastery",
      cart: 0,
      variants: variants,
      selectedVariant: 0,
      url: "https://www.etml.ch/",
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    remove() {
      if (this.cart > 0) this.cart -= 1;
      else return;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    variant() {
      return this.variants[this.selectedVariant];
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      if (this.onSale) this.brand + " " + this.product + " are on sale!";
    },
  },
});
