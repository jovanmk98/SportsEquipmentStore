
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Manufacturers from '../Manufacturer/manufacturers';
import Sports from '../Sports/sports';
import Products from '../Product/ProductList/products';
import EShopService from "../../repo/eshoprepo";
import Header from "../Header/header";
import ProductAdd from "../Product/ProductAdd/productAdd";
import Home from "../Home/home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      manufacturers: [],
      sports: [],
      products: []
    }
  }
  render (){
    return (
        <Router>
          <Header />
          <main>
            <div className="container">
          <Route path={"/manufacturers"} exact render={() =>
                <Manufacturers manufacturers={this.state.manufacturers}/>}/>
                <Route path={"/sports"} exact render={() =>
                    <Sports sports={this.state.sports}/>}/>
                <Route path={"/products/add"} exact render={() =>
                    <ProductAdd sports={this.state.sports}
                                manufacturers={this.state.manufacturers}
                                onAddProduct={this.addProduct}/>}/>


          <Route path={"/products"} exact render={() =>
              <Products products={this.state.products}
                        onDelete={this.deleteProduct}/>}/>
                        <Route path={"/home"} exact render={()=>
                        <Home />
                        }/>

                        <Redirect to={"/home"} />


            </div>
          </main>
            </Router>
    );
  }
  componentDidMount() {
    this.loadManufacturers();
    this.loadSports();
    this.loadProducts();
  }
  loadManufacturers = () =>{
    EShopService.fetchManufacturers()
        .then((data) =>{
          this.setState({
            manufacturers: data.data
          })
        });
  }
  loadProducts = () =>{
    EShopService.fetchProducts()
        .then((data) =>{
          this.setState({
            products: data.data
          })
        });
  }
  loadSports = () =>{
    EShopService.fetchSports()
        .then((data) =>{
          this.setState({
            sports: data.data
          })
        });
  }
  deleteProduct = (id) =>{
      EShopService.deleteProduct(id)
          .then(() =>{
              this.loadProducts();
          });
  }
    addProduct = (name, price, sport, manufacturer, image) => {
        EShopService.addProduct(name, price,  sport, manufacturer, image)
            .then(() => {
                this.loadProducts();
            });
    }

}




export default App;
