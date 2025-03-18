const product = ["Socks", "Boots"];
const productImage = [
  "./assets/images/socks_blue.jpg",
  "./assets/images/socks_green.jpg",
];
const etmlsite = "https://www.etml.ch/";
const description = [
  "Une paire de chaussettes chaudes et confortables",
  "Un t-shirt en coton",
];
const app = Vue.createApp({
  data() {
    return {
      product: product[0],
      productImage: productImage[0],
      description: description[0],
      etmlsite: etmlsite,
    };
  },
});
const test = ["T-shirt", "Pullover"];
const testing = Vue.createApp({
  data() {
    return {
      test: test[0],
      description: description[1],
    };
  },
});
