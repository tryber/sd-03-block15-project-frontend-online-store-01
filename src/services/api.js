export async function getCategories() {
  // implement here
  let categorias = [];
   return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data);
}


export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
