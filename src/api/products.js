let products = [
  { id: 1, name: "Wheat", price: 100, quantity: 50 },
  { id: 2, name: "Rice", price: 120, quantity: 30 }
];

export function getProducts() {
  return Promise.resolve([...products]);
}

export function addProduct(product) {
  product.id = Date.now();
  products.push(product);
  return Promise.resolve(product);
}

export function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  return Promise.resolve();
}
