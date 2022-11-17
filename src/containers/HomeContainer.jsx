import { connect } from "react-redux";
import { Home } from "../components/Home";
import { addToCart, removeToCart } from "../services/actions/actions"

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))

})

const mapStateToProps = state => ({
    cartData: state.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)