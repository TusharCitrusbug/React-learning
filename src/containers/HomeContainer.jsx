import { connect } from "react-redux";
import { Home } from "../components/Home";
import { addToCart } from "../services/actions/actions"

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

const mapStateToProps = state => ({
    cartData: state.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)