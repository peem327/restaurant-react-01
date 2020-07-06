import React, { Component } from "react";

// const ProductItem = (props) =>{
//     const{productName, unitPrice}=props;
//     return(
//         <div>
//             <p>{productName}</p>
//             <p>{unitPrice}</p>
//         </div>
//     )
// }

class ProductItem extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { productName, unitPrice, thumbnail} = this.props.product;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail}/>
        <div className="row mt-2">
          <div className="col-auto">
          <h5 className ="mt2">{productName}</h5>
          </div>
          <div className="col-auto">
          <p className="title text-right">{unitPrice} THB</p>
          </div>
        </div>
     
      

        {this.props.onAddOrder && 
        <button className = "btn btn-block btn-default"  onClick={() => this.props.onAddOrder(this.props.product)}> 
          ซื้อ
        </button>
        }
        {(this.props.onDelProduct || this.props.EditProduct)&&
        <button className = "btn btn-default col-5"  onClick={() => this.props.onEditProduct(this.props.product)}> 
          แก้ไข
        </button>
        }
        {this.props.onDelProduct &&
        <button className = "btn btn-danger col-5 float-right title"  onClick={() => this.props.onDelProduct(this.props.product) }> 
          ลบ
        </button>
         }
        <hr/>
      </div>
    );
  }
}

export default ProductItem;
