import React, { Component } from 'react';
import Calculator from './Calculator';
import ProductList from "./../Product/ProductList";
import axios from 'axios';

export class Monitor extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         totalPrice : 0,
         orders : [],
         confirm : false,
         msg : '' 
      };
      this.addOrder = this.addOrder.bind(this);
      this.delOrder = this.delOrder.bind(this);
      this.cancelOrder = this.cancelOrder.bind(this);
      this.confirmOrder = this.confirmOrder.bind(this);
    };
    
    addOrder(product){
     let findOrder = this.state.orders.find(order => order.product.id == product.id);
     if(findOrder){
            findOrder.quantity++;
     }else{
         this.state.orders.push({product : product, quantity:1});
     }
     const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
     this.setState({totalPrice, order: this.state.orders})
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id == product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id != product.id)
        const totalPrice = this.state.totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice, orders: resultOrder, confirm: false });
    }

    cancelOrder(){
        this.setState({totalPrice: 0, orders:[], confirm: false })
    }

    confirmOrder(){
        const{orders, totalPrice} =this.state;
        if(orders && orders.length > 0) {
        axios.post("http://localhost:3004/orders", {orderedDate : new Date(), totalPrice, orders}).then(res => {
            this.setState({totalPrice: 0, orders:[], confirm: true, msg: 'บันทึกรายการสั่งซื้อเรียบร้อยค่ะ'  })
        })
    }else{
        this.setState({totalPrice : 0, orders : [], confirm: true, msg: 'เลือกสินค้าก่อนนะค่ะ'})
    }
    }

    render() {
        return (
            <div className ='container-fluid'>
               {this.state.confirm &&
                <div className="alert alert-info text-right" role="alert">
                    {this.state.msg}
                </div>
                }
                <div className ='row'>
                    <div className = 'col-md-9'>
                        <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className = 'col-md-3'>
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder ={this.confirmOrder}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;
