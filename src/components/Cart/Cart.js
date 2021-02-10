import React, { Component } from 'react'
import NavBar from "./NavBar";
import Counters from "./Countres";
import './Cart.css'
import queryString from 'query-string'
import data from '../../data2'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            counters: [
            
            ],
            item:(this.props.match)?this.props.match.params.item:"",
            total:0,
            
          };
         
    }
    componentDidMount = () => {
      const storge = JSON.parse(localStorage.getItem("counters") || "[]");
      console.log(storge)
      this.setState({counters:storge});
      // const total =JSON.parse(localStorage.getItem("totals") || 0);
      // this.setState({total:total})
      
    };
    componentDidUpdate=()=>{
      localStorage.setItem("counters", JSON.stringify(this.state.counters))
      this.totalToPay()
    }
    componentWillUnmount = () => {
      
    //  localStorage.setItem("counters", JSON.stringify(this.state.counters));
    };
    addItemToCart=()=>{
      // if(JSON.parse(localStorage.getItem("counters"))){
      //   let storge=JSON.parse(localStorage.getItem("counters"))
      //   // this.setState.counters({counters:storge})
      // }
      if(this.state.item){
      let name = this.state.item
      
     let product=data.filter(item=>item.name===name)
     
      product=product[0]
      // console.log(product)
      let i=this.state.i
       
      let aa=[...this.state.counters]
      aa.push({id:i,value:0,name:product.name,price:product.price,src:product.src})
        
      // this.setState({counters:aa,i:i+1})
        // console.log("this.state.counters",this.state.counters)
        return product
      }
      
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value++;
        this.setState({ counters });

        // let total=JSON.parse(localStorage.getItem("total"))
        // total+=+counter.price
        // localStorage.setItem("total", JSON.stringify(total))


        // let totalStorge=+this.state.total
        // this.setState({total:totalStorge})

        // let value= +counter.value
        // value+=1
        // this.setState({value:value})
        // localStorage.setItem("counters.value", JSON.stringify(value))
      };
    
      handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counters[index] };
        counters[index].value--;
        this.setState({ counters });
      };
    
      handleReset = () => {
        const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
    
      handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        console.log("counters",counters)
        this.setState({ counters:counters});
        localStorage.setItem("counters", JSON.stringify(counters));
      };
    
      handleRestart = () => {
        window.location.reload();
      };
      totalToPay=() =>{
        let products=JSON.parse(localStorage.getItem("counters"))
        if(products.length===0){
            return 0
      }else {
        console.log("products",products)
        let total1=0
        for(let i=0;i<products.length;i++){
            total1+=(+products[i].value)*(+products[i].price)
        }
        // let total = products.reduce((total,item)=>{
        //   return (+total.price)*(+total.value)+(+item.price)*(+item.value)
            // return +total.price*+total.value+((+item.price)*(+item.value))
        // })
        console.log("totalhere11",total1)
        return total1
      }
        
      }
      
    render() {
      
        return (
            <div>
      
 
                <NavBar total={this.totalToPay}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
            
          />
         
        </main>
        <button className="btn btn-success" style={{marginLeft:"5rem",marginTop:"2rem"}}>Continue to checkout</button>
            </div>
        )
    }
}
