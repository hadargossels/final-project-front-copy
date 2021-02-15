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
            hardware:true,
            accessories:true,
            maximumP:1000,
            minimumP:0,
            maximumR:5,
            minimumR:0,
            priceBTC:""
        }
        
        this.updateState = this.updateState.bind(this)
        this.updateStateSearch = this.updateStateSearch.bind(this)

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
            myArr.sort(function(a,b){
                return b.Price-a.Price})
            this.setState({ Arr: myArr })
      }
    }
    componentDidMount(){
        fetch("https://api.coincap.io/v2/assets")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({priceBTC:result.data[0].priceUsd})
            
          },
          (error) => {
            console.log("error")
          }
        )
        if(this.cbRef){
            let myArr =[...this.Products]
            this.cbRef.value=window.location.search.slice(3)
            myArr = myArr.filter((prod) => {
                return (prod.Title.toLowerCase().includes(this.cbRef.value.toLowerCase()))     
            });
            myArr.sort(function(a,b){
                return b.Price-a.Price})
            this.setState({ Arr: myArr })
        }
    }
    
    updateStateSearch(e){
        let myArr =[...this.Products]
        //check by search bar
        if(e.target.id === "search")
        myArr = myArr.filter((prod) => {
            return (prod.Title.toLowerCase().includes(e.target.value.toLowerCase())
                || prod.Description.toLowerCase().includes(e.target.value.toLowerCase())
            )     
        });
        this.setState({ Arr: myArr })
    }
    updateState(e){
        let myArr =[...this.Products]
        //check if hardware
        if (e.target.id === "hardware" && e.target.checked)
            myArr=[...this.Products]
        else if(e.target.id === "hardware" && e.target.checked)
            this.setState({hardware: true,accessories: false })
        else
            this.setState({accessories: true,hardware: false })

        let minimum=this.state.minimumP
        let maximum=this.state.maximumP
        if (e.target.value === "10"){
            minimum= 0
            maximum= 10
        }
        if (e.target.value === "20")
        {
            minimum= 10
            maximum= 20
        }
        if (e.target.value === "30")
        {
            minimum= 20
            maximum= 30
        }
        if (e.target.value === "50")
        {
            minimum= 30
            maximum= 50
        }
        if (e.target.value === "100")
        {
            minimum= 50
            maximum= 100
        }
        if (e.target.value === "1000")
        {
            minimum= 100
            maximum= 1000
        }
        
        
            myArr = myArr.filter((prod) => {
                return (prod.Price <maximum
                        && prod.Price>minimum
                )
            });


        myArr.sort(function(a,b){
            return a.Price-b.Price})
        
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
                            
                            <input id="search" ref={this.setCbRef} onChange={this.updateStateSearch} className="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
                            </form>
                        </div>
                        <br/>
                        <div className="container">
                        <div className="row">
                            <p id="all" onClick={this.updateState} className="col-6 cursor ware h6">All</p>
                            <p className="col-6 text-end">{this.Products.length}</p>
                            <p id="hardware" onClick={this.updateState} className="col-6 cursor ware h6">Hardware wallet</p>
                            <p className="col-6 text-end">{this.Products.filter((obj)=>{return obj.Hardware===true}).length}</p>
                            <p id="accessories" onClick={this.updateState} className="col-6 cursor ware h6">Accessories</p>
                            <p className="col-6 text-end">{this.Products.filter((obj)=>{return obj.Hardware===false}).length}</p>
                        </div>
                        </div>
                        <br/>
                        <h4 className="text-center"><b>Price</b></h4>
                        <div className="container" onChange={this.updateState}>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="10" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    under $10
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="20" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $10 to $20
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="30" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $20 to $30
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="50" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $30 to $50
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="100" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $50 to $100
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="1000" id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                     $100 &#38; above
                                </label>
                                </div>
                        </div>
                        <br/>
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
                                    <Prod key={prod.Title} priceBTC={this.state.priceBTC} id={prod.id} rating={prod.Rating} price={prod.Price} title={prod.Title} image={prod.Image} />
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
