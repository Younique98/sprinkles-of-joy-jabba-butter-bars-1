import { saveReview } from "./ReviewProvider.js"
import { getProducts, useProducts } from "../scripts/products/ProductProvider.js"

const contentTarget = document.querySelector(".form__review")
const eventHub = document.querySelector("#container")

export const reviewForm = () => {
    getProducts()
        .then(() => {
            const arrayOfProducts = useProducts()
            render(arrayOfProducts)
            
        })
}

const render = (productsArray) => {
    // debugger
    contentTarget.innerHTML = `
    <h2>Please leave a review</h2>
    <form action="" class="reviewForm">
        <fieldset>
            <label for="review-productId">Review: </label>
            <select name="review-productId" id="review-productId">
                <option value="0">Please select a product...</option>
                ${productsArray.map(product => `<option value="${product.id}">${product.name}</option>`).join("")}
            </select>
        </fieldset>
        <fieldset>
        <label id="review-rating" for="rating">Please choose a rating</label>
        <select name="reviews" id="productReviews">
        
        <option id = "rating" value ="1">1</option>
        <option id = "rating" value ="2">2</option>
        <option id = "rating" value ="3">3</option>
        <option id = "rating" value ="4">4</option>
        <option id = "rating" value ="5">5</option>
        </select>
        </fieldset>
        <fieldset>
            <label for="review-text">Please leave a review: </label>
            <input type="text" id="review-text" name="review-text">
        </fieldset>
        <button id="savereview">Save review</button>
    </form>
    `}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "savereview") {
        clickEvent.preventDefault()
        const productId = document.getElementById("review-productId").value

        const rating = document.getElementById("rating").value
        const text = document.getElementById("review-text").value
       
        const newReview = {
            
            "productId": parseInt(productId),
            "rating": parseInt(rating),
            "text": text
        }
        saveReview(newReview)
       
    }
})