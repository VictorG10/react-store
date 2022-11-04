//Coffee: price_1M0M27Lm59MzefZN0MTayp3O
// Sunglasses: price_1M0M3YLm59MzefZNp0dcotG8
// Camera: price_1M0M4ILm59MzefZNJuaFDRQs

const productsArray = [
  {
    id: "price_1M0M27Lm59MzefZN0MTayp3O",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1M0M3YLm59MzefZNp0dcotG8",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1M0M4ILm59MzefZNJuaFDRQs",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
