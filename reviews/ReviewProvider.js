import {bakeryAPI} from "../scripts/Settings.js"

const eventHub = document.querySelector(".container")

let reviews = []

export const saveReview = review => {
    
    return fetch(`${bakeryAPI.baseURL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    })
      .then(() => getReviews())
      .then(dispatchStateChangeEvent)
  }
  
  export const deleteReview = reviewId => {
    return fetch(`${bakeryAPI.baseURL}/reviews`, {
      method: "DELETE"
    })
      .then(getReviews)
      .then(dispatchStateChangeEvent)
  }
  
  export const getReviews = () => {
    return fetch(`${bakeryAPI.baseURL}/reviews`)
      .then(response => response.json())
      .then(parsedReviews => {
        reviews = parsedReviews
      })
  }
  
  export const useReviews = () => reviews.slice()
  
  
  const dispatchStateChangeEvent = () => {
    const ReviewStateChangedEvent = new CustomEvent("ReviewStateChanged")
  
    eventHub.dispatchEvent(ReviewStateChangedEvent)
  }