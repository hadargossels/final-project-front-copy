import React ,{Component} from 'react'

export default class ShopingBag extends Component {

    constructor(props){
        super(props)
        console.log(this.props);
        // localStorage.clear();
        // console.log(this.props.match.params.iJson);
        this.myCart=localStorage.getItem('cart');
        this.myCartNum=(window.localStorage.getItem('numOf'))?JSON.parse(window.localStorage.getItem('numOf')):[];
        // console.log(this.myCart);
        // console.log(this.myCartNum);
        this.myJson=(this.props.match.params.iJson!='mycart')?require('./workOutP.json').data[Number(this.props.match.params.iJson)]:null;
        console.log(this.myJson,Number(this.props.match.params.iJson));
        this.state= {
            totalItems : ((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0),
            totalPrice : ((Number(localStorage.getItem('totalPrice')))?Number(localStorage.getItem('totalPrice')):0),
            myArr: [],
            numOfProductsArr:[],
            isDiscount : false
        }
        this.myOnLoad();
    }
    shouldComponentUpdate(){
        document.querySelector('#myBag').innerHTML=""+((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0);
        return true 
    }
    myOnLoad(){
        this.myCart = (this.myCart)?JSON.parse(this.myCart):[];
        for(let i=0; i<this.myCart.length; i++){
            if(this.myCart[i]!=null){
                this.state.myArr.push(this.myCart[i]);
                this.state.numOfProductsArr.push(this.myCartNum[i]);
            }
        }
        localStorage.setItem('cart',JSON.stringify(this.state.myArr));
        localStorage.setItem('numOf',JSON.stringify(this.state.numOfProductsArr))
        if(this.myJson!=null){
            if(this.state.myArr.length>0){
                if(this.state.myArr[this.state.myArr.length-1].jsonPlace!=this.props.match.params.iJson){
                    this.state.myArr.push(this.myJson);
                    console.log(this.state.myArr);
                    this.state.numOfProductsArr.push(1)
                    localStorage.setItem('cart',JSON.stringify(this.state.myArr));
                    localStorage.setItem('numOf',JSON.stringify(this.state.numOfProductsArr));
                    this.state.totalItems+=1;
                    this.state.totalPrice = this.state.totalPrice*1 + Number((this.myJson.onSale)?this.myJson.price*(9/10):this.myJson.price)
                }
            }
            else{
                this.state.myArr.push(this.myJson);
                // console.log(this.state.myArr);
                this.state.numOfProductsArr.push(1)
                localStorage.setItem('cart',JSON.stringify(this.state.myArr));
                localStorage.setItem('numOf',JSON.stringify(this.state.numOfProductsArr));
                this.state.totalItems+=1;
                this.state.totalPrice = Number( this.state.totalPrice*1 + (this.myJson.onSale)?this.myJson.price*(9/10):this.myJson.price)
            }
            localStorage.setItem('totalItems',this.state.totalItems);
            localStorage.setItem('totalPrice',this.state.totalPrice)
        }
        this.props.history.push('/shopingchart/mycart');
    }

    changeNum(bol,i){
        let tempArr = [...this.state.numOfProductsArr];
        let tempTotalItems = this.state.totalItems;
        let tempTotalPrice = this.state.totalPrice;
        if(bol){
            tempArr[i]+=1;
            tempTotalItems++;
            tempTotalPrice=tempTotalPrice*1 +Number((this.state.myArr[i].onSale)?(this.state.myArr[i].price*(9/10)):Number(this.state.myArr[i].price));
            // document.querySelector('#myBag').innerHTML=""+tempTotalItems;
        } 
        else{
            if(tempArr[i]!=0){
                tempArr[i]-=1;
                tempTotalItems--;
                tempTotalPrice=tempTotalPrice*1 -Number((this.state.myArr[i].onSale)?(this.state.myArr[i].price*(9/10)):Number(this.state.myArr[i].price));
                // document.querySelector('#myBag').innerHTML=""+tempTotalItems;
            }
        }
        localStorage.setItem('numOf',JSON.stringify(tempArr))
        localStorage.setItem('totalItems',tempTotalItems)
        localStorage.setItem('totalPrice',tempTotalPrice)
        this.setState({
            numOfProductsArr : tempArr,
            totalItems : tempTotalItems,
            totalPrice : tempTotalPrice
        })
    }

    discount(){
        if(document.querySelector('#disC').value==='123'){
            this.setState({isDiscount : true});
        }
        else
            window.alert('Wrong coupon');
    }

    delItem(i){
        let tempArr=[...this.state.myArr];
        let tempNumof=[...this.state.numOfProductsArr];
        let tempTotalItems= this.state.totalItems;
        let tempTotalPrice = this.state.totalPrice;
        tempTotalItems=tempTotalItems*1 - tempNumof[i]*1;
        tempTotalPrice = tempTotalPrice*1 - (tempArr[i].onSale?tempArr[i].price*(9/10):tempArr[i].price)*tempNumof[i];
        tempArr[i]=null;
        tempNumof[i]=0;
        localStorage.setItem('numOf',JSON.stringify(tempNumof));
        localStorage.setItem('totalItems',tempTotalItems);
        localStorage.setItem('totalPrice',tempTotalPrice);
        localStorage.setItem('cart',JSON.stringify(tempArr));
        // document.querySelector('#myBag').innerHTML=""+tempTotalItems;
        this.setState({
            myArr : tempArr,
            totalItems : tempTotalItems,
            totalPrice : tempTotalPrice ,
            numOfProductsArr : tempNumof
        })
    }

    // mainCartUpdate(){
    //      document.querySelector('#myBag').innerHTML=""+this.state.totalItems;
    // }

    render(){
        let tempArr=[];
        for(let i=0; i<this.state.myArr.length; i++){
            if(this.state.myArr[i]!=null){
                tempArr.push(
                    <div className="text-center" key={i}>
                        <h3>{this.state.myArr[i].name} {(((this.state.myArr[i].onSale)?(this.state.myArr[i].price*(9/10)):Number(this.state.myArr[i].price))*this.state.numOfProductsArr[i]).toFixed(2)}$</h3>
                        <img src={this.state.myArr[i].urlImg[0]} width='30%' height="150rem"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="btn btn-dark" onClick={()=>this.changeNum(false,i)}>-</button>
                        <span className="m-2 fs-5">{this.state.numOfProductsArr[i]}</span>
                        <button className="btn btn-dark" onClick={()=>this.changeNum(true,i)}>+</button>
                        <button className="btn btn-dark ms-5" onClick={()=>this.delItem(i)}><i className="fas fa-trash"></i></button><br/>
                        <hr/>
                    </div>
                )
            }
        }
        if(tempArr.length===0){
            tempArr.push(
                <h1 className="text-danger texr-center">Your cart is empty!</h1>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        {tempArr}
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                            <h4 className="text-danger">Total items : {this.state.totalItems}</h4><br/>
                            <h4 className="text-danger">Total Price : {(this.state.isDiscount?this.state.totalPrice*(9/10):this.state.totalPrice).toFixed(2)}$</h4><br/>
                            <input id="disC" className="m-2" type="text" placeholder="Enter coupon" /><br/>
                            <button className="btn btn-dark m-2" onClick={()=>this.discount()}>get discount</button>
                            <button className="btn btn-dark m-2">Cash out</button>
                    </div>
                </div>
            </div>
        )   
    }
}