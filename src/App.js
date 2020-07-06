import React,{Component} from 'react'
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Orders from './containers/order/Orders';
import Product from './containers/product/Product';
import ProductEdit from './containers/product/ProductEdit';
import "./App.css";


 class App extends Component {

renderRouter(){
  return(
  <Switch>
    <Route exact path ="/" component={Home}/>
    <Route exact path ="/about" component={About}/>
    <Route exact path = "/orders" component ={Orders}/>
    <Route exact path = "/products" component ={Product}/>
    <Route exact path = "/products/add" component ={ProductEdit}/>
    <Route exact path = "/products/edit/:id" component ={ProductEdit}/>


  </Switch>
  )
}

  

render(){
  return (<BrowserRouter>{this.renderRouter()}</BrowserRouter>);
}

}

export default App