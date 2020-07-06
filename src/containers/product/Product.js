import React, { Component } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import ProductList from "./../../components/Product/ProductList";
import {connect} from 'react-redux';
import {productsFetch, productDelete} from './../../actions'
// import axios from "axios";
import {withRouter} from 'react-router-dom'

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
//     axios.get("http://localhost:3004/products").then((res) => {
//       this.setState({ products: res.data });
//     });
  }

editProduct(product){
    this.props.history.push('products/edit/' + product.id);
}

delProduct(product) {
   this.props.productDelete(product.id);
//     axios.delete("http://localhost:3004/products/" + product.id).then((res) => {
//       axios.get("http://localhost:3004/products").then((res) => {
//         this.setState({ products: res.data });
//       });
//     });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>สินค้า</h1>
            </div>
            <div className="col-md-6">
              <button className="btn btn-success title float-right" onClick={() => this.props.history.push('products/add')}>
                เพิ่ม
              </button>
            </div>
          </div>
          {this.props.products && Array.isArray(this.props.products) &&
         (<ProductList 
            products={this.props.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />) }
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
	return { products };
}

export default withRouter(connect(mapStateToProps,  { productsFetch, productDelete })(Product));
