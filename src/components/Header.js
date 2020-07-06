import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date : new Date()
    };
   
  }
  
  tick(){
    this.setState({date : new Date()});
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div className ="container-fluid mt-4">
        <div className = "row">
          <div className = "col-8 text-lift">
              <h1 className ='text-success'> <img style={{height:50}} src="/images/logo/logo.png" alt=""/>เอลตี้ คาเฟ่</h1>
          </div>
          <div className ="col-4 text-right mt-4">
           <h5>{this.state.date.toLocaleTimeString()} </h5>
           <ul className="list-inline">
                <li className="list-inline-item title"><Link className="text-success" to="">หน้าหลัก</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-success" to="/orders">รายการสั่งซื้อ</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-success" to="/products">สินค้า</Link></li>
                <li className="list-inline-item title">|</li>
                <li className="list-inline-item title"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
            </ul> 
          </div>
        </div>
        <hr/>
      </div>
      
    );
  }
}

export default componentName;
