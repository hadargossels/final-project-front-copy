import React, { Component } from 'react';
import './Store.css';
import {Route,Link,NavLink,Switch, BrowserRouter as Router} from 'react-router-dom'

const product = [
    {src: "img/souffle1.jpg",
    category: 'pens',
    brand: 'brandA',
    color: 'multi',
    price: 10,
    priceRange: "0-10",
    name: 'aa',
    id: 1
    },
    {src: "img/souffle_2.jpg",
     category: 'pencils',
     brand: 'brandB',
     color: 'multi',
     price: 15,
     priceRange: "11-20",
     name: 'aa',
     id: 2
     },
     {src: "img/notebooks/noteb1.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'pink',
     price: 6,
     priceRange: "0-10",
     name: 'aa',
     id: 3
     },
     {src: "img/notebooks/noteb2.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'purple',
     price: 23,
     priceRange: "21-30",
     name: 'aa',
     id: 4
     },
     {src: "img/notebooks/noteb3.jpg",
     category: 'notebooks',
     brand: 'brandA',
     color: 'purple',
     price: 8,
     priceRange: "0-10",
     name: 'aa',
     id: 5
     },
     {src: "img/notebooks/noteb4.jpg",
     category: 'notebooks',
     brand: 'brandB',
     color: 'blue',
     price: 9,
     priceRange: "0-10",
     name: 'aa',
     id: 6
     },
     {src: "img/notebooks/noteb5.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'multi',
     price: 11,
     priceRange: "11-20",
     name: 'aa',
     id: 7
     },
     {src: "img/notebooks/noteb6.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'yellow',
     price: 7,
     priceRange: "0-10",
     name: 'aa',
     id: 8
     },
     {src: "img/notebooks/noteb7.jpg",
     category: 'notebooks',
     brand: 'brandA',
     color: 'red',
     price: 18,
     priceRange: "11-20",
     name: 'aa',
     id: 9
     },
     {src: "img/notebooks/noteb8.jpg",
     category: 'notebooks',
     brand: 'brandB',
     color: 'yellow',
     price: 14,
     priceRange: "11-20",
     name: 'aa',
     id: 10
     },
     {src: "img/notebooks/noteb9.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'yellow',
     price: 18,
     priceRange: "11-20",
     name: 'aa',
     id: 11
     },
     {src: "img/notebooks/noteb10.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'blue',
     price: 18,
     priceRange: "11-20",
     name: 'aa',
     id: 12
     }
 ]

class Store extends Component{
    constructor() {
      super();

      this.state = {
      product: product,
      display: product,
      checked: []
    }
    this.isChecked = this.isChecked.bind(this);
    this.filter = this.filter.bind(this);
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
    this.filter(e)},300) 
    }

    filter (e) {
      let display = [...this.state.display];
      let filterThat = [...this.state.product];
      let filtered = [];
      
      let name = e.target.name
      console.log(name)
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
      if (display.length === 0) {
        display = product
      }
      setTimeout(()=>{
        this.setState({display: display})
      console.log(this.state.display)
      },300)
    }



   render(){

      return(
          <div className='storeCont'>
              <div className='filter' >
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
              <div className='storeDisp'>
              {this.state.display.map((v) =>
                  <div className='product' key={v.id} productid={v.id}>
                    <NavLink exact to={"/Product/"+v.id} ><img src={v.src} alt='product' width='200px'/></NavLink><br/>
                    <span className='prodName'>{v.name}</span><br/>
                    <span className='price'>{v.price}$</span>
                  </div>)}
                  
              </div>
          </div>
        

      );
   }
  }

export default Store;
