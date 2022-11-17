import { Header } from '../components/Header';
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
    cartData: state.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)