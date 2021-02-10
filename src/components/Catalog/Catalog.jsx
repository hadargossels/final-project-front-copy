import React, { Component } from 'react'
import './Catalog.css';
import Prod from './Prod';
import myProducts from '../../prod.json';

export default class Catalog extends Component {
    constructor(props){
        super(props)

        this.Products= myProducts;

        this.state = {
            Arr:this.Products,
        }
        
        this.updateState = this.updateState.bind(this)

        this.inputRef=React.createRef()
        this.cbRef=null
        this.setCbRef=element =>{
            this.cbRef=element
        }
    }
    componentDidUpdate(prevProps) {       
        if (this.props.location.search !== prevProps.location.search) {
            let myArr =[...this.Products]
            this.cbRef.value=window.location.search.slice(3)
            myArr = myArr.filter((prod) => {
                return (prod.Title.toLowerCase().includes(this.cbRef.value.toLowerCase()))     
            });
            this.setState({ Arr: myArr })
      }
    }
    componentDidMount(){
        if(this.cbRef){
            let myArr =[...this.Products]
            this.cbRef.value=window.location.search.slice(3)
            myArr = myArr.filter((prod) => {
                return (prod.Title.toLowerCase().includes(this.cbRef.value.toLowerCase()))     
            });
            this.setState({ Arr: myArr })
        }
    }
    
    
    updateState(e){
        let flagPrice=0
        let flagHard=0
        let flagRate=0
        let myArr =[...this.Products]
        if (e.target.classList[1]==="prices"){
            flagPrice=1
            flagHard=0
            flagRate=0}
        else if(e.target.classList[2]==="ware"){
            flagPrice=0
            flagHard=1
            flagRate=0}
        else if(e.target.classList[1]==="rate"){
            flagPrice=0
            flagHard=0
            flagRate=1}
        //check by search bar
        if(e.target.id === "search")
        myArr = myArr.filter((prod) => {
            return (prod.Title.toLowerCase().includes(e.target.value.toLowerCase()))     
        });
        
        //check price
        if(flagPrice===1){
            if(e.target.id === "price1")
                myArr = myArr.filter((prod) => {
                        return (prod.Price <10)
                    });
            else if (e.target.id === "price2")
                myArr = myArr.filter((prod) => {
                    return (prod.Price <20 && prod.Price >10)
                });
            else if (e.target.id === "price3")
                myArr = myArr.filter((prod) => {
                    return (prod.Price <30 && prod.Price >20)
                });
            else if (e.target.id === "price4")
                myArr = myArr.filter((prod) => {
                    return (prod.Price <50 && prod.Price >30)
                });
            else if (e.target.id === "price5")
                myArr = myArr.filter((prod) => {
                    return (prod.Price <100 && prod.Price >50)
                });
            else if (e.target.id === "price6")
                myArr = myArr.filter((prod) => {
                    return (prod.Price >100)
                });
        }
        //check if hardware
        if(flagHard===1){
            if(e.target.id === "hardware")
            myArr = myArr.filter((prod) => {
                return (prod.Hardware ===true)
            });
            else if (e.target.id === "all")
                myArr = [...this.Products]
            else if (e.target.id === "accessories")
            myArr = myArr.filter((prod) => {
                return (prod.Hardware ===false)
            });
        }
        if(flagRate===1){
            if(e.target.id === "rating1")
            myArr = myArr.filter((prod) => {
                return (prod.Rating >4)
            });
            else if(e.target.id === "rating2")
            myArr = myArr.filter((prod) => {
                return (prod.Rating >3)
            });
            else if(e.target.id === "rating3")
            myArr = myArr.filter((prod) => {
                return (prod.Rating >2)
            });
            else if(e.target.id === "rating4")
            myArr = myArr.filter((prod) => {
                return (prod.Rating >1)
            });
            else if(e.target.id === "rating5")
            myArr = myArr.filter((prod) => {
                return (prod.Rating >0)
            });
        }
        

        this.setState({ Arr: myArr })
        
    }
 
    

    render() {

       
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                    <br/>
                        <h4 className="text-center"><b>Items</b></h4>
                        <div className="container-fluid">
                            <form className="d-flex">
                            
                            <input id="search" ref={this.setCbRef} onChange={this.updateState} className="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
                            </form>
                        </div>
                        <br/>
                        <div className="container">
                        <div className="row">
                            <p id="all" onClick={this.updateState} className="col-6 cursor ware h6">All</p>
                            <p className="col-6 text-end">8</p>
                            <p id="hardware" onClick={this.updateState} className="col-6 cursor ware h6">Hardware wallet</p>
                            <p className="col-6 text-end">3</p>
                            <p id="accessories" onClick={this.updateState} className="col-6 cursor ware h6">Accessories</p>
                            <p className="col-6 text-end">5</p>
                        </div>
                        </div>
                        <br/>
                        <h4 className="text-center"><b>Price</b></h4>
                        <div className="container">
                            <p id="price1" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">under $10</p>
                            <p id="price2" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">$10 to $20</p>
                            <p id="price3" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">$20 to $30</p>
                            <p id="price4" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">$30 to $50</p>
                            <p id="price5" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">$50 to $100</p>
                            <p id="price6" onClick={this.updateState} style={{height:"20px"}} className="cursor prices h6">$100 &#38; above</p>
                        </div><br/>
                        <h4 className="text-center"><b>Avg. customer review</b></h4>
                        <div className="container">
                            <div id="rating1" onClick={this.updateState} className="cursor rate"><span className="stars">★★★★</span><span className="starsNot">★</span> &#38; up</div>
                            <div id="rating2" onClick={this.updateState} className="cursor rate"><span className="stars">★★★</span><span className="starsNot">★★</span> &#38; up</div>
                            <div id="rating3" onClick={this.updateState} className="cursor rate"><span className="stars">★★</span><span className="starsNot">★★★</span> &#38; up</div>
                            <div id="rating4" onClick={this.updateState} className="cursor rate"><span className="stars">★</span><span className="starsNot">★★★★</span> &#38; up</div>
                            <div id="rating5" onClick={this.updateState} className="cursor rate"><span className="stars"></span><span className="starsNot">★★★★★</span> &#38; up</div>
                        </div>
                     </div>

                    <div className="col-9">
                        <br/>
                        <div className="container d-flex justify-content-center flex-wrap">
                            {
                                this.state.Arr.map((prod) =>
                                    <Prod key={prod.Title} id={prod.id} rating={prod.Rating} price={prod.Price} title={prod.Title} image={prod.Image} />
                                )
                            }
                            {
                                !this.state.Arr.length && <h1>No products to be shown</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
