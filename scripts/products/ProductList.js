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

