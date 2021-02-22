import { getReviews, useReviews } from "./ReviewProvider.js";
import { ReviewFormRender } from "./Review.js"
import {getProducts, useProducts } from "../scripts/products/ProductProvider.js";

// Query the DOM for the element that your Reviews will be added to 
const contentTarget = document.querySelector(".userReviews")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

let allReviews = []
let allProducts = []


// eventHub.addEventListener("ReviewStateChanged", event => {
//   if (contentTarget.innerHTML !== "") {
//     ReviewList()
//   }
// })

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const ReviewList = () => {
  getReviews()
  .then(getProducts)
    .then(() => {
      allReviews = useReviews()
      allProducts = useProducts()
      render()
      debugger
    })
}

const render = () => {
  const allReviewsConvertedToStrings = allReviews.map(productObject => {
    const relatedProductObject = allProducts.find(Product => Product.id === productObject.ProductId)
    return ReviewFormRender(productObject, relatedProductObject)
   
  }).join("")

  contentTarget.innerHTML = `
    <h3>Product Reviews</h3>
    <section class="ProductsList">
    ${allReviewsConvertedToStrings}
    </section>
  `
  debugger
}