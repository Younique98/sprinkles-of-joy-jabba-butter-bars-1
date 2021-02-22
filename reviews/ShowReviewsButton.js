const contentTarget = document.querySelector(".reviewButton")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    // debugger
    
    if (clickEvent.target.id === "showReviews") {
        const customEvent= new CustomEvent("showReviewsClicked")
        eventHub.dispatchEvent(customEvent) 
    }
})

export const ShowReviewsButton = () => {
    // debugger
    contentTarget.innerHTML = `<button id='showReviews'>Show Product Reviews </button>`
    
}