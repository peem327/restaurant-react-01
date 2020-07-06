import React, { Component } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
// import axios from "axios";
import {connect} from 'react-redux';
import {ordersFetch,ordersDelete} from './../../actions'

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: null,
    };
  }

  componentDidMount() {
    // axios.get("http://localhost:3004/orders").then((res) => {
    //   this.setState({ orders: res.data });
    // });
    this.props.ordersFetch();
  }

  delOrder(order) {
    this.props.ordersDelete(order.id);
  //   axios.delete("http://localhost:3004/orders/" + order.id).then((res) => {
  //     axios.get("http://localhost:3004/orders").then((res) => {
  //       this.setState({ orders: res.data });
  //     });
  //   });
  }

  showOrder() {
    return (
      this.props.orders &&
      this.props.orders.map((order) => {
        const date = new Date(order.orderedDate);
        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="btn btn-danger btn-sm title"
                onClick={() => this.delOrder(order)}
              >
                x
              </button>
            </p>
            <h5>
              วันที่{" "}
              {date.toLocaleDateString() + "" + date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map((record) => {
                  return (
                    <li>
                      {record.product.productName} x {record.quantity} =
                      {record.product.unitPrice * record.quantity}
                    </li>
                  );
                })}
            </ul>
            <p className="title">ยอดรวม {order.totalPrice}</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>รายการสั่งซื้อ</h1>
          <div className="row">{this.showOrder()}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps({orders}) {
  return { orders }
}

export default connect(mapStateToProps, {ordersFetch, ordersDelete})(Order);