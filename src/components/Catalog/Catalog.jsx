import React, { Component } from 'react'
import './Catalog.css';
import Prod from './Prod';
import {db} from '../../firebase'

export default class Catalog extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            Products:[],
            priceBTC:"",
            allProducts:[]
        }
        
        this.updateState = this.updateState.bind(this)
        this.updateStateSearch = this.updateStateSearch.bind(this)

        this.price0=React.createRef()
        this.price1=React.createRef()
        this.price2=React.createRef()
        this.price3=React.createRef()
        this.price4=React.createRef()
        this.price5=React.createRef()
        this.rate0=React.createRef()
        this.rate1=React.createRef()
        this.rate2=React.createRef()
        this.rate3=React.createRef()
        this.rate4=React.createRef()
        this.typeRef1=React.createRef()
        this.typeRef2=React.createRef()
        this.typeRef3=React.createRef()

        this.searchRef=React.createRef()
    }

    componentDidUpdate(prevProps) {    
    if(this.props.location.search!==prevProps.location.search){
        this.searchRef.current.value=window.location.search.slice(3)
        let myArr =[...this.state.allProducts]
        myArr = myArr.filter((prod) => {
            return (prod.description.toLowerCase().includes(this.searchRef.current.value.toLowerCase())
            || prod.title.toLowerCase().includes(this.searchRef.current.value.toLowerCase()))     
        }); 
        myArr.sort(function(a,b){
            return b.price-a.price})
        this.setState({ Products: myArr})
        }
    }

    componentDidMount(){

        db.ref('products').on('value', (snapshot)=>{
            if(snapshot.val()!=null){
            let arrProducts = []
            let arrAllProducts = []
            for (let obj in snapshot.val()) {
                arrProducts.push(snapshot.val()[obj])
                arrAllProducts.push(snapshot.val()[obj])
            }
            
        if(window.location.search!==""){
            this.searchRef.current.value=window.location.search.slice(3)
            let myArr =[...arrAllProducts]
            myArr = myArr.filter((prod) => {
                return (prod.description.toLowerCase().includes(this.searchRef.current.value.toLowerCase())
                || prod.title.toLowerCase().includes(this.searchRef.current.value.toLowerCase()))     
            }); 
            myArr.sort(function(a,b){
                return b.price-a.price})
            this.setState({ Products: myArr,allProducts:arrAllProducts })
            }
        else
            this.setState({Products: arrProducts,allProducts:arrAllProducts})}})



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
        // if(this.cbRef){
        //     let myArr =[...this.state.allProducts]
        //     this.cbRef.value=window.location.search.slice(3)
        //     myArr = myArr.filter((prod) => {
        //         return (prod.title.toLowerCase().includes(this.cbRef.value.toLowerCase())
        //         || prod.description.toLowerCase().includes(this.cbRef.value.toLowerCase()))     
        //     });
        //     myArr.sort(function(a,b){
        //         return b.price-a.price})
        //     this.setState({ Products: myArr })
        // }
    }
    
    updateStateSearch(e){
        let myArr =[...this.state.allProducts]
        if(e.target.id === "search")
        myArr = myArr.filter((prod) => {
            return (prod.title.toLowerCase().includes(e.target.value.toLowerCase())
                || prod.description.toLowerCase().includes(e.target.value.toLowerCase())
            )     
        });
        this.setState({ Products: myArr })
    }
    updateState(e){
        
        let myArr =[...this.state.allProducts]

        let arrprice=[]
        if (this.price0.current.checked) arrprice.push([0,10])
        if (this.price1.current.checked) arrprice.push([10,20])
        if (this.price2.current.checked) arrprice.push([20,30])
        if (this.price3.current.checked) arrprice.push([30,50])
        if (this.price4.current.checked) arrprice.push([50,100])
        if (this.price5.current.checked) arrprice.push([100,1000])

        let arrRate=[]
        if (this.rate0.current.checked) arrRate.push(4)
        if (this.rate1.current.checked) arrRate.push(3)
        if (this.rate2.current.checked) arrRate.push(2)
        if (this.rate3.current.checked) arrRate.push(1)
        if (this.rate4.current.checked) arrRate.push(0)

        
       let arrNew=[]
       for (let i=0;i<myArr.length;i++)
            for(let j=0;j<arrprice.length;j++)
                if(myArr[i].price>arrprice[j][0]&& myArr[i].price<arrprice[j][1] && !arrNew.includes(myArr[i]) )
                    arrNew.push(myArr[i])
        

        for (let i=0;i<myArr.length;i++)
            for(let j=0;j<arrRate.length;j++)
                if(myArr[i].rating>arrRate[j] && !arrNew.includes(myArr[i]))
                    arrNew.push(myArr[i])
        
        for (let i=0;i<myArr.length;i++)
            if(this.typeRef2.current.checked && myArr[i].hardware===true && !arrNew.includes(myArr[i]))
                arrNew.push(myArr[i])

        for (let i=0;i<myArr.length;i++)
            if(this.typeRef3.current.checked && myArr[i].accessories===true && !arrNew.includes(myArr[i]))
                arrNew.push(myArr[i])
     
        if(this.typeRef1.current.checked)
            arrNew=[...this.state.allProducts]
        
        arrNew.sort(function(a,b){
            return a.price-b.price})
        
        this.setState({ Products: arrNew })
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
                            
                            <input id="search"  ref={this.searchRef} onChange={this.updateStateSearch} className="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
                            </form>
                        </div>
                        <br/>
                        <div className="container" onChange={this.updateState}>
                            <div className="row">
                            <div className="form-check col-6">
                            <input className="form-check-input" ref={this.typeRef1} type="checkbox" value="all" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                All
                            </label>
                            </div>
                            <p className="col-6 text-end">{this.state.allProducts.length}</p>
                            <div className="form-check col-6">
                            <input className="form-check-input" ref={this.typeRef2} type="checkbox" value="hardware" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                hardware wallet
                            </label>
                            </div>
                            <p className="col-6 text-end">{this.state.allProducts.filter((obj)=>{return obj.hardware===true}).length}</p>

                            <div className="form-check col-6">
                            <input className="form-check-input" ref={this.typeRef3} type="checkbox" name="accessories" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                accessories
                            </label>
                            </div>
                            <p className="col-6 text-end">{this.state.allProducts.filter((obj)=>{return obj.hardware===false}).length}</p>

                            </div>
                        </div>

                        <br/>

                        <h4 className="text-center"><b>price</b></h4>
                        <div className="container" onChange={this.updateState}>
                            <div className="row">
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="10" ref={this.price0} id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    under $10
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price<10}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="20" ref={this.price1} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $10 to $20
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price>=10 && obj.price<20}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="30" ref={this.price2} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $20 to $30
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price>=20 && obj.price<30}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="50" ref={this.price3} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $30 to $50
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price>=30 && obj.price<50}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="100" ref={this.price4} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    $50 to $100
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price>=50 && obj.price<100}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="1000" ref={this.price5} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                     $100 &#38; above
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.price>=100}).length}</p>
                                </div>
                        </div>
                        <br/>
                        <h4 className="text-center"><b>Avg. customer review</b></h4>
                        <div className="container" onChange={this.updateState}>
                            <div className="row">
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="1" ref={this.rate0} id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                <span className="stars">★★★★</span><span className="starsNot">★</span> &#38; up
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.rating>=4}).length}</p>

                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="2" ref={this.rate1} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    <span className="stars">★★★</span><span className="starsNot">★★</span> &#38; up
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.rating>=3}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="3" ref={this.rate2} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                <span className="stars">★★</span><span className="starsNot">★★★</span> &#38; up
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.rating>=2}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="4" ref={this.rate3} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                <span className="stars">★</span><span className="starsNot">★★★★</span> &#38; up
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.rating>=1}).length}</p>
                                <div className="form-check col-10">
                                <input className="form-check-input" type="checkbox" value="5" ref={this.rate4} id="flexCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                <span className="stars"></span><span className="starsNot">★★★★★</span> &#38; up
                                </label>
                                </div>
                                <p className="col-2 text-end">{this.state.allProducts.filter((obj)=>{return obj.rating>=0}).length}</p>
                                </div>
                        </div>
                    
                     </div>

                    <div className="col-9">
                        <br/>
                        <div className="container d-flex justify-content-center flex-wrap">
                            {
                                this.state.Products.length>0
                                ?this.state.Products.map((prod) =>
                                    <Prod key={prod.title} priceBTC={this.state.priceBTC} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
                                    )
                                :<h1>No products to be shown</h1>
                                }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
