const etmlsite = "https://www.etml.ch/";
const products = ["Socks", "Boots"];
const products_images = [
  "./assets/images/socks_blue.jpg",
  "./assets/images/socks_green.jpg",
];
const products_descriptions = [
  "Une paire de chaussettes chaudes et confortables",
  "Une paire de chaussure haute",
];
const products_size = [
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
  { id: 4, size: "XXL" },
];
const header = Vue.createApp({});
const nav = Vue.createApp({});
const app = Vue.createApp({
  data() {
    return {
      products: products[0],
      products_images: products_images[0],
      products_descriptions: products_descriptions[0],
      products_size: products_size,
      inventory: 1,
    };
  },
});
const footer = Vue.createApp({
  data() {
    return {
      etmlsite: etmlsite,
    };
  },
});
