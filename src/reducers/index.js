import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import OrderReducer from './OrderReducer';
import {reducer as reduxForm} from 'redux-form'

export default  combineReducers ({
    orders: OrderReducer,
    products:ProductReducer,
    form : reduxForm
})

