import './App1.css';
import React, { Component } from 'react';
import StateFullComp from './Components/StateFullComp';
import {data} from './data'

class App1 extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            newArray: data,  
            selectValue: "",
            filter: 'none',
            searchList:  data,      
            checkArray: []
            
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        console.log(this.state.checkArray)
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
    return (

        <div className="App1">
            <div className="grid_main1">
                <div className="brand_list">
                    <p>BRAND</p>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="boss" onChange={this.handleCheckbox}></input>
                    <label for="vehicle1"> BOSS</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="ebel" onChange={this.handleCheckbox}></input>
                    <label for="vehicle2"> Ebel</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="alpina" onChange={this.handleCheckbox}></input>
                    <label for="vehicle3"> Alpina</label><br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="citizen" onChange={this.handleCheckbox}></input>
                    <label for="vehicle1"> Citizen</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="casio" onChange={this.handleCheckbox}></input>
                    <label for="vehicle2"> Casio</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="tissot" onChange={this.handleCheckbox}></input>
                    <label for="vehicle1"> Tissot</label><br></br>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="swatch" onChange={this.handleCheckbox}></input>
                    <label for="vehicle2"> Swatch</label><br></br>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="bulova" onChange={this.handleCheckbox}></input>
                    <label for="vehicle3"> Bulova</label><br></br>
                </div>
            </div>
            <div className="grid_main2"> 
                <div className="up_grid">
                    <div className="sort_type">
                        <label for="sort_type">sort by:</label>
                        <select name="type_sort" className="sort_list" id="sort_type" onChange={this.handleDropdownChange}>
                            <option>choose an option</option>
                            <option value="price">price</option>
                            <option value="size">size</option>
                            <option value="Case Thickness">Case Thickness</option>
                        </select>
                    </div>
                    <h4>all watch</h4>
                    <p>all the option</p>
                </div>
                <div className="grid">
                    {this.state.searchList.map((item1) => {
                       return <StateFullComp url={item1.url} name_prodact={item1.name} price={item1.price}/>
                    })}
                </div>
                {/* <button onClick={()=>this.changeArray()}>click me to sort price</button> */}
            </div>
        </div>
    )
}
}

export default App1;

