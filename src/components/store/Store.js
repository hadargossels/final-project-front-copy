import React, { Component } from 'react';
import './Store.css';
import {NavLink} from 'react-router-dom'
import bootstrap from 'bootstrap'
import Header from '../header/Header'

 const product = [
  {src: "/img/souffle1.jpg",
  category: 'pens',
  brand: 'brandA',
  color: 'multi',
  price: 10,
  priceRange: "0-10",
  name: 'pen1',
  description: 'aaaaaa',
  id: 1,
  date: new Date ('2019-06-28'),
  featured: 15
  },
  {src: "/img/souffle_2.jpg",
   category: 'pencils',
   brand: 'brandB',
   color: 'multi',
   price: 15,
   priceRange: "11-20",
   name: 'pencil1',
   description: 'aaaaaa',
   id: 2,
   date: new Date ('2012-06-28'),
   featured: 8
   },
   {src: "/img/notebooks/noteb1.jpg",
   category: 'notebooks',
   brand: 'brandC',
   color: 'pink',
   price: 6,
   priceRange: "0-10",
   name: 'notebook1',
   description: 'aaaaaa',
   id: 3,
   date: new Date ('2018-06-28'),
   featured: 17
   },
   {src: "/img/notebooks/noteb2.jpg",
   category: 'notebooks',
   brand: 'brandD',
   color: 'purple',
   price: 23,
   priceRange: "21-30",
   name: 'notebook2',
   description: 'aaaaaa',
   id: 4,
   date: new Date ('2019-08-28'),
   featured: 5
   },
   {src: "/img/notebooks/noteb3.jpg",
   category: 'notebooks',
   brand: 'brandA',
   color: 'purple',
   price: 8,
   priceRange: "0-10",
   name: 'notebook3',
   description: 'bbb',
   id: 5,
   date: new Date ('2019-07-28'),
   featured: 6
   },
   {src: "/img/notebooks/noteb4.jpg",
   category: 'notebooks',
   brand: 'brandB',
   color: 'blue',
   price: 9,
   priceRange: "0-10",
   name: 'notebook4',
   description: 'bbb',
   id: 6,
   date: new Date ('2020-06-28'),
   featured: 24
   },
   {src: "/img/notebooks/noteb5.jpg",
   category: 'notebooks',
   brand: 'brandC',
   color: 'multi',
   price: 11,
   priceRange: "11-20",
   name: 'notebook5',
   description: 'bbb',
   id: 7,
   date: new Date ('2004-06-28'),
   featured: 16
   },
   {src: "/img/notebooks/noteb6.jpg",
   category: 'notebooks',
   brand: 'brandD',
   color: 'yellow',
   price: 7,
   priceRange: "0-10",
   name: 'notebook6',
   description: 'bbb',
   id: 8,
   date: new Date ('2012-06-28'),
   featured: 22
   },
   {src: "/img/notebooks/noteb7.jpg",
   category: 'notebooks',
   brand: 'brandA',
   color: 'red',
   price: 18,
   priceRange: "11-20",
   name: 'notebook7',
   description: 'ccccccc',
   id: 9,
   date: new Date ('2018-11-28'),
   featured: 30
   },
   {src: "/img/notebooks/noteb8.jpg",
   category: 'notebooks',
   brand: 'brandB',
   color: 'yellow',
   price: 14,
   priceRange: "11-20",
   name: 'notebook8',
   description: 'ccccccc',
   id: 10,
   date: new Date ('2019-06-13'),
   featured: 4
   },
   {src: "/img/notebooks/noteb9.jpg",
   category: 'notebooks',
   brand: 'brandC',
   color: 'yellow',
   price: 18,
   priceRange: "11-20",
   name: 'notebook9',
   description: 'ccccccc',
   id: 11,
   date: new Date ('2017-04-28'),
   featured: 19
   },
   {src: "/img/notebooks/noteb10.jpg",
   category: 'notebooks',
   brand: 'brandD',
   color: 'blue',
   price: 18,
   priceRange: "11-20",
   name: 'notebook10',
   description: 'ccccccc',
   id: 12,
   date: new Date ('2021-02-28'),
   featured: 6
   }
]

class Store extends Component{
    constructor(props) {
      super(props);

      this.state = {
      product: product,
      display: product,
      checked: [],
      searchKey: "",
      results: [],
      filterDis: "flex",
      storeDis: "flex",
      errorDis: "none",
      cart: JSON.parse(localStorage.getItem("cart")),
      addMsg: "",
    }
    this.isChecked = this.isChecked.bind(this);
    this.filter = this.filter.bind(this);
    this.searchK = this.searchK.bind(this);
    this.search = this.search.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.searchK()
    this.newFeatured()
      }

      addMsg () {
        setTimeout(()=>{this.setState({addMsg: "Item added to cart"})},5)
        setTimeout(()=>{this.setState({addMsg: ""})},10000)
      }

    addToCart (e) {
      
      let itemId = e.target.id
      let quantity = e.target.previousElementSibling.value
      let cart = [];
      if (this.state.cart !== null) {
        cart = [...this.state.cart]
      }
      let src = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].src
      src = src.substring(21)
      let name = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText
      let price = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[2].childNodes[0].childNodes[1].innerText
      price = price.substring(0, price.length-1)
      let flag = true
      if (cart.length > 0){
         for (const element of cart) {
            if (element.itemId === itemId) {
               flag = false
               let elQu = element.quantity
               elQu = parseInt(elQu)
               elQu = elQu + parseInt(quantity)
               element.quantity = elQu
            }
         }
      }
      if (flag == true) {
         let cartObj = {itemId: itemId, quantity: quantity, src: src, name: name, price: price}
         cart.push(cartObj)
      }
      
      setTimeout(()=>{this.setState({cart})
      localStorage.setItem("cart",JSON.stringify(cart));
      this.addMsg();},5);
      
    }

    newFeatured () {
      let path = this.props.location.pathname
      path = path.substring(7);
      if (path === 'New') {
        this.state.product.sort((a, b) => b.date - a.date)
      }
      else if (path === 'Featured')
      this.state.product.sort((a, b) => b.featured - a.featured)

      else this.state.product.sort((a, b) => a.id - b.id)
    }
    
    sort (e) {
      let byPrice =  this.state.product
      if (e.target.value === 'high')
      byPrice.sort((a, b) => b.price - a.price);
      else if (e.target.value === 'low')
      byPrice.sort((a, b) => a.price - b.price);
      this.setState({product: byPrice})
    }

    isChecked (e) {
      this.search()
      let checkbox = e.target.value
      let checkedBox =[...this.state.checked]
      if(e.target.checked){
        checkedBox.push(checkbox)
      }
      else {
        checkedBox = checkedBox.filter((v)=>{
          return v !== checkbox
        })
      } 
      setTimeout(()=>{this.setState({checked: checkedBox})
    this.setState({display: []});
    this.filter(e)},5) 
    }

    filter (e) {
      let display = [...this.state.display];
      let filterThat = [...this.state.product];
      let filtered = [];
      let name = e.target.name
      let filterby = [...this.state.checked]
      
      if (name === 'category'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.category === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'brands'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.brand === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'color'){
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.color === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      else if (name === 'priceRange'){
        console.log(name)
        for (let i = 0; i<filterby.length; i++){
          filtered = filterThat.filter((v)=> {return v.priceRange === filterby[i]}) 
          filtered.forEach(element => {display.push(element)});         
        }
      }
      
      if (display.length === 0 && this.state.searchKey == "") {
        display = product
      }
      else if (display.length === 0 && this.state.searchKey !== "") {
        
        display = [...this.state.results]
      }
      setTimeout(()=>{
        this.setState({display: display})
      },5)
    }

    searchK () {
      let searchKey = this.props.location.search
      searchKey = searchKey.substring(3);
      setTimeout(() => {
        this.setState({searchKey: searchKey})
        this.search()
      }, 5);
    }

    search() {
      if (this.state.searchKey !== "") {
        let display = [];
        let results = [];
        let re = new RegExp (this.state.searchKey, "g")
        for (const element of product) {
        if (re.test(element.name) || re.test(element.description)){
          console.log(re.test(element.name))
          display.push(element);
          results.push(element);
        }
        }
        if (results.length === 0) {
          setTimeout(()=>{
            this.setState({filterDis: "none"})
          this.setState({storeDis: "none"})
          this.setState({errorDis: "flex"})
          console.log(this.state.storeDis)
          },5)
        }
        console.log(this.state.searchKey)
      console.log(this.state.results.length)
        setTimeout(()=>{
          this.setState({display: display})
          this.setState({results:results})
        },5)
      }
    }

    
 

   render(){
      return(
          <div className='storeCont'>
            <div className="searchErr" style={{display: this.state.errorDis}}>Sorry, your search didn't match any results, please try searching something else.</div>
              <div className='filter' style={{display: this.state.filterDis}}>
                  <div className='sort filterDiv'>
                      <span className='title'>Sort By:</span><br/>
                      <select className='sortSel' onChange={(e) => this.sort(e)}>
                          <option value='low'>Price: Low - High</option>
                          <option value='high'>Price: High - Low</option>
                      </select>
                  </div>
                  <div className='category filterDiv'>
                  <span className='title'>Category:</span><br/>
                    <input type="checkbox" id="pens" name="category" value="pens" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="pens"> Pens</label><br/>
                    <input type="checkbox" id="pencils" name="category" value="pencils" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="pencils"> Pencils</label><br/>
                    <input type="checkbox" id="diaries" name="category" value="diaries" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="diaries"> Diaries & Planners</label><br/>
                    <input type="checkbox" id="notebooks" name="category" value="notebooks" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="notebooks"> Notebooks & Pads</label><br/>
                    <input type="checkbox" id="school" name="category" value="school" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="school"> School & Office Supplies</label><br/>
                    <input type="checkbox" id="folders" name="folders" value="folders" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="folders"> Filing & Folders</label><br/>
                  </div>
                  <div className='brands filterDiv'>
                  <span className='title'>Brands:</span><br/>
                    <input type="checkbox" id="brandA" name="brands" value="brandA" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="brandA"> brandA</label><br/>
                    <input type="checkbox" id="brandB" name="brands" value="brandB" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="brandB"> brandB</label><br/>
                    <input type="checkbox" id="brandC" name="brands" value="brandC" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="brandC"> brandC</label><br/>
                    <input type="checkbox" id="brandD" name="brands" value="brandD" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="brandD"> brandD</label><br/>
                  </div>
                  <div className='color filterDiv'>
                  <span className='title'>Color:</span><br/>
                    <input type="checkbox" id="black" name="color" value="black" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="black"> Black</label><br/>
                    <input type="checkbox" id="white" name="color" value="white" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="white">White</label><br/>
                    <input type="checkbox" id="purple" name="color" value="purple" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="purple"> Purple</label><br/>
                    <input type="checkbox" id="blue" name="color" value="blue" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="blue"> Blue</label><br/>
                    <input type="checkbox" id="green" name="color" value="green" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="green"> Green</label><br/>
                    <input type="checkbox" id="yellow" name="color" value="yellow" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="yellow"> Yellow</label><br/>
                    <input type="checkbox" id="orange" name="color" value="orange" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="orange"> Orange</label><br/>
                    <input type="checkbox" id="red" name="color" value="red" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="red"> Red</label><br/>
                    <input type="checkbox" id="pink" name="color" value="pink" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="pink"> Pink</label><br/>
                    <input type="checkbox" id="multi" name="color" value="multi" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="multi">Multi</label><br/>
                  </div>
                  <div className='price filterDiv'>
                  <span className='title'>Price:</span><br/>
                    <input type="checkbox" id="0-10" name="priceRange" value="0-10" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="0-10">0-10 USD</label><br/>
                    <input type="checkbox" id="11-20" name="priceRange" value="11-20" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="11-20">11-20 USD</label><br/>
                    <input type="checkbox" id="21-30" name="priceRange" value="21-30" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="21-30">21-30 USD</label><br/>
                    <input type="checkbox" id="31-40" name="priceRange" value="31-40" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="31-40">31-40 USD</label><br/>
                    <input type="checkbox" id="41-50" name="priceRange" value="41-50" onChange={(e) => this.isChecked(e)}/>
                    <label htmlFor="41-50">41-50 USD</label><br/>
                  </div>
              </div>
              <div className='storeDisp' style={{display: this.state.storeDis}}>
              {this.state.display.map((v) =>
              <div key={"divkey"+v.id}>
                <div className='product' productid={v.id}>
                    <NavLink exact to={"/Product/"+v.id} ><img src={v.src} alt='product' width='180px'/></NavLink><br/>
                    <span className='prodName' style={{fontSize:"20px"}}>{v.name}</span><br/>
                    <span className='price'>{v.price}$</span><br/>
                    <button type="button" className='fas fa-search-plus' data-bs-toggle="modal" data-bs-target={"#modal"+v.id+""}></button>
                </div>
                <div className="modal fade" id={"modal"+v.id+""} tabIndex="-1" aria-labelledby={"exampleModalLabel"+v.id} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h5 className="modal-title" id={"exampleModalLabel"+v.id}>{v.name}</h5>
                        <div className="modCon">
                        <div className="modLeft">
                          <img src={v.src} alt='product' width='200px'/>
                          <span>{v.price}$</span>
                        </div>
                        <div className="modRight">
                          <p>{v.description}</p>
                          <div className='buy'>
                            <select className='qt'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <button className='addcart' id={v.id} onClick={this.addToCart}>ADD TO CART</button>
                          </div>
                          <span className='addMsg'>{this.state.addMsg}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}                  
              </div>
          </div>
        

      );
   }
  }

export default Store;
