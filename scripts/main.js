console.log("Welcome to Sprinkles of Joy!")

import "./customers/RegisterForm.js"
import "./orders/OpenCart.js"
import "./orders/OrderList.js"
import { CustomerNav } from "./customers/CustomerNav.js"
import { CategorySelect } from "./categories/CategorySelect.js"
import { LoginForm } from "./customers/LoginForm.js"
import { ProductList } from "./products/ProductList.js"
import { ReviewList } from "../reviews/ReviewList.js"
import { reviewForm} from "../reviews/ReviewForm.js"
import { ShowReviewsButton } from "../reviews/ShowReviewsButton.js"

LoginForm()
CustomerNav()
CategorySelect()
ProductList()
ReviewList()
reviewForm()
ShowReviewsButton()