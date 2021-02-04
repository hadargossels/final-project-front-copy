import React, { Component } from 'react';
import './prodactPage.css';
import data1 from '../prod.json'
export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            id:this.props.prodact[0].id,
            name:this.props.prodact[0].name,
            price:this.props.prodact[0].price,
            new_price:this.props.prodact[0].new_price,
            detail:this.props.prodact[0].detail,
            brand:this.props.prodact[0].brand,
            series:this.props.prodact[0].series,
            model:this.props.prodact[0].model,
            gender:this.props.prodact[0].gender,
            color:this.props.prodact[0].color,
            crystal:this.props.prodact[0].crystal,
            water_resistance:this.props.prodact[0].water_resistance,
            lug_width:this.props.prodact[0].lug_width,
            height:this.props.prodact[0].height,
            diameter:this.props.prodact[0].diameter,
            material:this.props.prodact[0].material,
            url:this.props.prodact[0].ImageBigOne,
            urlb1:this.props.prodact[0].ImageBigOne,
            urlb2:this.props.prodact[0].ImageBigTwo,
            urlb3:this.props.prodact[0].ImageBigThree,
            url1:this.props.prodact[0].ImageSmallOne,
            url2:this.props.prodact[0].ImageSmallTwo,
            url3:this.props.prodact[0].ImageSmallThree,
            newArray: data1,  
            selectValue: "",
            filter: 'none',
            searchList:  data1,      
            checkArray: [],
          
        }
    }
    
    changeurl1(){
        this.setState({url:this.state.urlb1});
        console.log(99)
    }

    changeurl2(){
        this.setState({url:this.state.urlb2});
    }

    changeurl3(){
        this.setState({url:this.state.urlb3});
    }

   render(){
    
       console.log(this.props.prodact[0].price)
       console.log(data1[0].Image)
      return(
        
        <main className="main">
            
            <ul className="list_kat">
                <button>Accessories</button>
                <button>Watches</button>
                <button>Fashion Watches</button>
                <button>Clothing</button>
                <button>Men's watch</button>
                <button>DIESEL</button>
            </ul>
            <div className="prodact">
                <h3 className="prod">{this.state.name}</h3>
                <p className="detail">{this.state.detail}</p>
            </div>
            <div className="main_area">
                <div className="picture">
                    
                    <img  className="bigpicture" src={this.state.url}  alt="pic0"/>
                    <ul className="pictures">
                        <li className="piclist" onClick={()=>this.changeurl1()}><img  className="smallpicture" src={this.state.url1} alt="pic1" /></li>
                        <li className="piclist" onClick={()=>this.changeurl2()}><img  className="smallpicture" src={this.state.url2} alt="pic2"/></li>
                        <li className="piclist" onClick={()=>this.changeurl3()}><img  className="smallpicture" src={this.state.url3} alt="pic3"/></li>
                    </ul>
                </div>
                <div className="prodact1">

                        <table className="prodact_details">   
                            <tbody>      
                                <tr><td className="price">Price:</td><td>{this.state.price}$</td></tr>                       
                                <tr><td className="cur_price">New price:</td><td className="cur_price">{this.state.new_price}$</td></tr>
                                <tr><td>Series</td><td>{this.state.series}</td></tr>
                                <tr><td>Model</td><td>{this.state.model}</td></tr>
                                <tr><td>Gender</td><td>{this.state.gender}</td></tr>
                                <tr><td>Color</td><td>{this.state.color}</td></tr>
                                <tr><td>Crystal</td><td>{this.state.crystal}</td></tr>
                                <tr><td>Water Resistance</td><td>{this.state.water_resistance}</td></tr>
                                <tr><td>Lug Width</td><td>{this.state.lug_width}</td></tr>
                                <tr><td>Height</td><td>{this.state.height}</td></tr>
                                <tr><td>Diameter</td><td>{this.state.diameter}</td></tr>
                                <tr><td>Material</td><td>{this.state.material}</td></tr>
                                </tbody>
                        </table>
                </div>
                <div className="main_details">
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div> 
                    <ul>
                        <li>IN STOCK</li>
                        <li>FREE SHIPPING </li>
                        <li>DELIVERY TIME </li>
                    </ul>
                    <button className='button_main'>add to cart</button>
                </div>
            </div>    
        </main>
      );
   }
}

