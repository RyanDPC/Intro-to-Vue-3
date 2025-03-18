const variants = [
  {
    id: 1,
    name: "Socks",
    image: "./assets/images/socks_blue.jpg",
    description: "Une paire de chaussettes chaudes et confortables",
    inventory: 10,
    color: "blue",
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XXL" }],
  },
  {
    id: 2,
    name: "Socks",
    image: "./assets/images/socks_green.jpg",
    description: "Une paire de chaussure haute",
    inventory: 0,
    color: "green",
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
    updateImage(variantImage) {
      this.currentVariant.image = variantImage;
    },
    updateVariant(color) {
      this.currentVariant = this.variants.find(
        (variant) => variant.color === color
      );
    },
    remove() {
      if (this.cart > 0) this.cart -= 1;
      else return;
    },
  },
});
