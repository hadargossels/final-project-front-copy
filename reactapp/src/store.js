import './store.css';
import React, { Component } from 'react';
import StateFullComp from './Components/StateFullComp';
import {Link, Route } from 'react-router-dom';
import data1 from './Components/prod.json'
import back from './unnamed.jpg'


class Store extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            newArray: data1,  
            selectValue: "",
            filter: 'none',
            searchList:  data1,      
            checkArray: []
            
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
        if(e.target.value ==='price'){
        
        let myArr = [...this.state.searchList];
            myArr.sort((a, b) => {
                return a.price - b.price;
            })
            this.setState({ searchList: myArr })
        }
      }

      handleCheckbox=(e)=>  {
        let checkIs = e.target.value;
        let array_checkd = [...this.state.checkArray];
        if(e.target.checked){
            array_checkd=[...array_checkd, checkIs]
        }
        else{
            array_checkd = array_checkd.filter((item) => {
                return item !== checkIs
            })
        }
      const newArr = [...this.state.newArray].filter(({brand})=>!array_checkd.length|| array_checkd.indexOf(brand)!=-1)
      this.setState({checkArray:array_checkd,searchList:newArr})
    }

    // changeArray(){
    //     let myArr = [...this.state.newArray];
    //     myArr = myArr.filter((prodact) =>{
    //         return (prodact.price>100)
    //     })
    //     this.setState({ searchList: myArr })
    // }    
    
   render(){  
    console.log(this.props.match.params.id)
    return (

        <div className="App1">
            <div className="grid_main1">
                <div className="brand_list">
                    <h4 className="lists_check">BRAND</h4>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="boss" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle1"> BOSS</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="rolex" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle2"> Rolex</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="omega" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle3"> Omega</label><br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="citizen" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle1"> Citizen</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="casio" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle2"> Casio</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="tissot" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle1"> Tissot</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="swatch" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle2"> Swatch</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="bulova" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle3"> Bulova</label><br></br>
                </div>
                <div className="brand_list">
                    <h4 className="lists_check">GENDER</h4>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="M" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle1"> Man</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="W" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle2"> WOMEN</label><br></br>
                </div>
                <div className="brand_list">
                    <h4 className="lists_check">COLOR</h4>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="white" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle1">White</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="black" onChange={this.handleCheckbox}></input>
                    <label htmlFor="vehicle2">Black</label><br></br>
                </div>
            </div>
            <div className="grid_main2"> 
                <div className="up_grid">
                    <div className="sort_type">
                        <label htmlFor="sort_type">sort by:</label>
                        <select name="type_sort" className="sort_list" id="sort_type" onChange={this.handleDropdownChange}>
                            <option>choose an option</option>
                            <option value="price">price</option>
                            <option value="size">size</option>
                            <option value="Case Thickness">Case Thickness</option>
                        </select>
                    </div>
                    <h4 className="wellcome_store">WELLCOME TO THE BEST ONLINE WATCH STORE!</h4>
                    <p className="paragraph_store">Welcome to AvielWatch.com! We are the online watch store that you have been looking for. Our goal and mission is to help you find and own the perfect luxury watch. Between our prices and our authenticity guarantee, we believe that we are the best online watch store around.</p>
                </div>
                <div className="grid">
                    {this.state.searchList.map((item1) => {
                        return <Link  className="seeafter" to = {"/product/"+item1.name}>
                        <StateFullComp key={item1.id} url={item1.ImageBigOne} name_prodact={item1.name} price={item1.price}/>
                       </Link>
                    })}
                </div>
                {/* <button onClick={()=>this.changeArray()}>click me to sort price</button> */}
            </div>
        </div>
    )
}
}

export default Store;

