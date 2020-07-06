import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {

showProducts(){
    try{
    if(this.props.products){
       return this.props.products.map(product =>(
            // <ProductItem productName={product.productName} unitPrice={product.unitPrice} />
            <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder}  onDelProduct={this.props.onDelProduct}  onEditProduct={this.props.onEditProduct}/>
        ))
    }
}catch{};
}
    render() {
        return (
            <div>
                <div className='row'>
                    {this.showProducts()}
                </div>
            </div>
        )
    }
}

export default ProductList
