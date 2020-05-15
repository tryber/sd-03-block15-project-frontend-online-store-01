export async function getCategories() {
  // implement here
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data);
}


export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  if (categoryId && query) {
    console.log("executou id e query");
   return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json())
    .then((data) => data);
    
}
  else if (categoryId) {
    console.log("executou id")
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
    .then((response) => response.json())
    .then((data) => data);
    
}
  else if (query) {
    console.log("executou query")
   return fetch(`https://api.mercadolibre.com/sites/MLB/search?&q=${query}`)
   .then((response) => response.json())
   .then((data) => data);
}
  }


