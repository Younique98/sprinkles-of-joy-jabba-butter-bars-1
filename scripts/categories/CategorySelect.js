import { getCategories, useCategories } from "./CategoryProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".filter__category")

let categories = []


export const CategorySelect = () => {
  
  getCategories()
  
  .then(() => {
    categories = useCategories()
    
    render(categories)
    
  })
  
  
}


const render = (categoriesCollection) => {
  
  contentTarget.innerHTML = `
      <select class="dropdown" id="categorySelect">
          <option value="0">All baked goods...</option>
          ${categoriesCollection.map(category => `<option value="${category.id}">${category.name}</option>`).join("")
        }
      </select>

  `
  
  
}




eventHub.addEventListener("change", changeEvent => {
  
  if (changeEvent.target.id === "categorySelect") {
    const selectedCategory = changeEvent.target.value

    

    const categoryCustomEvent = new CustomEvent("categorySelected", {
      detail: {
        selectedCategory: parseInt(selectedCategory)
      }
    })
    eventHub.dispatchEvent(categoryCustomEvent)
  }
})

eventHub.addEventListener("categorySelected", categoryChosenEvent => document.querySelector("#categorySelect").value = 0)
