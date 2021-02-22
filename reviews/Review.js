import { authHelper } from "../scripts/auth/authHelper.js"


const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".reviewForm")
// we need an event listener for showNewReviewForm event in cases 
let reviews = []

export const ReviewForm = () => {
  ReviewFormRender()
}

export const ReviewFormRender = () => {
  if (!authHelper.isUserLoggedIn()) {
   contentTarget.innerHTML = `
      <h3>Please leave a review</h3>
      <form>
        <fieldset>
        <label for="review-product">Leave review: </label>
        <input type="text" id="review-Product" name="review-Product">
        </fieldset>
        
        <button id="customerReview">Leave Review</button>
      </form>
    `
  }
}

eventHub.addEventListener("click", clickEvent => {
    // debugger
    if (clickEvent.target.id.startsWith("deleteReview--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
  
      /*
          Invoke the function that performs the delete operation.
      */
      deleteReview(id)
      // debugger
    }
  })
