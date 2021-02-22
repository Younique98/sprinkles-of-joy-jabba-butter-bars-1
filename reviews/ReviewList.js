import { getReviews, useReviews } from "./ReviewProvider.js";
import { ReviewFormRender } from "./Review.js"
import {getProducts, useProducts } from "../scripts/products/ProductProvider.js";

// Query the DOM for the element that your  will be added to 
const contentTarget = document.querySelector(".userReviews")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector("#container")

let allReviews = []
let allProducts = []

eventHub.addEventListener("showReviewsClicked", customEvent => {
  ReviewList()
})

eventHub.addEventListener("ReviewStateChanged", event => {
  if (contentTarget.innerHTML !== "") {
    ReviewList()
  }
})

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const ReviewList = () => {
  getReviews()
  .then(getProducts)
    .then(() => {
      allReviews = useReviews()
      allProducts = useProducts()
      render()
      
    })
}

const render = () => {
  debugger
  const allReviewsConvertedToStrings = allReviews.map(reviewObject => {
    const relatedProductObject = allProducts.find(Product => Product.id === reviewObject.ProductId)
    return ReviewFormRender(reviewObject, relatedProductObject)
   
  }).join("")

  contentTarget.innerHTML = `
    <h3>Product Reviews</h3>
    <section class="ProductsList">
    ${allReviewsConvertedToStrings}
    </section>
  `
  //debugger
}