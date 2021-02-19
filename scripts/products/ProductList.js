import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []
let category = []

export const ProductList = () => {
  
  getProducts()
    
  .then(() => {
      category = getCategories()
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)

    return Product(product, productCategory) 
    
  }).join("")
}



eventHub.addEventListener("categorySelected", event => {
  const categoryName = event.detail.selectedCategory
  const category = useCategories()
  const filteredCategorysArray = category.filter(
    categoryObject => {
      if (categoryObject.id === categoryName) {
        
        return true
      }
    }
  )
  render(filteredCategorysArray)
  
})

eventHub.addEventListener("categorySelected", event => {
  const productName = event.detail.selectedCategory
  const products = useProducts()
  const filteredProductsArray = products.filter(
    categoryObject => {
      if (categoryObject.categoryId === productName) {
        
        return true
      }
    }
  )
  renderToDom(filteredProductsArray)
  
  
})

eventHub.addEventListener("categoryChosen", categoryChosenEvent => {
  if (categoryChosenEvent.detail.selectedCategory != "0") {

    const categoryArray = useCategories()

    const chosenCategoryObject = categoryArray.find(categoryObj => {
      return categoryObj.id === parseInt(categoryChosenEvent.detail.selectedCategory)
    })
    console.log(chosenCategoryObject.name)
    
    const productsArray = useProducts()
    const filteredCategorysArray = productsArray.filter(productObj => productObj.categoryId === chosenCategoryObject.name)
    render(filteredCategorysArray)
   
  }
})


const renderToDom = (productCollection) => {
  let productHTMLRepresentations = ""

  for (const product of productCollection) {
      productHTMLRepresentations += Product(product)
  }

  contentTarget.innerHTML = `
<h2>Products</h2>
<section class="productsList">
${productHTMLRepresentations}
</section>`
}
