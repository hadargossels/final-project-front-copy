

import React, { Component } from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core';
import DashboardCard from "./DashbordInfo/DashboardCard";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CakeIcon from '@material-ui/icons/Cake';
import './Dashboard.css'
import DashboardCardInfo from "./DashbordInfo/DashboardCardInfo";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LineChart from './DashbordInfo/LineChart'
import axios from 'axios'
import BarChart from './DashbordInfo/BarChart'



let USER_TOKEN=JSON.parse(localStorage.getItem("token")||"false")
let AuthStr = 'Bearer ' + USER_TOKEN;


export default class Dashboard extends Component {

    constructor(){
        super()
        this.state={
            product:'',
            recipeQuantity:'',
            productQuantity:'',
            userQuantity:'',
            orders:'',
            totalPayment:0,
            bestSeller:'',
            dateArry:[],
            countOrderDay:[],
            productsSales:{},
            titleArray:[],
            quantity:[],

        }
    }

    componentDidMount(){
        
        USER_TOKEN=JSON.parse(localStorage.getItem("token")||"false")
        AuthStr = 'Bearer ' + USER_TOKEN;
        this.getDataFromMongoDB()


    }


    async getDataFromMongoDB(){

        try{
           let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/products`)
           this.setState({product:response.data})
        }catch(err){
           console.log(err);
        }
    
        try{
            let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/orders`,{ 'headers': { 'Authorization': AuthStr } })
            this.setState({orders:response.data})

         }catch(err){
            console.log(err);
         }
    
         try{
            let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/users`,{ 'headers': { 'Authorization': AuthStr } })
            this.setState({userQuantity:response.data.length})

         }catch(err){
            console.log(err);
         }
    
         try{
            let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/recipes`)
            this.setState({recipeQuantity:response.data.length})

         }catch(err){
            console.log(err);
         }

         this.getInfoFromOrders()
    }

    getInfoFromOrders(){

        let sum=0
        let bestSale="טרם נמכרו מוצרים"
        let max=0
        let products={}
        let dateArry=[]
        let countOrderDay=[]
        let flag=false

        for (const prod of this.state.product) {
           products[prod.title]=0
        }

        for (const order of this.state.orders) {
            for (const prod of order.cart) {
                products[prod.title]+=prod.count
            }
            for (let i = 0; i < dateArry.length; i++) {
                if(order.date===dateArry[i]){
                    countOrderDay[i]++
                    flag=true
                }
            }
            if(!flag){
                dateArry.push(order.date)
                countOrderDay.push(1)
            }
            flag=false
            sum+=order.payment
        }
        this.setState({productsSales:products})
        this.setState({totalPayment:sum})
        this.setState({countOrderDay})
        this.setState({dateArry})

        for (let title in products) {
            if(products[title]>max){
                max=products[title]
                bestSale=title
            }
        }
        this.setState({bestSeller:bestSale})
        this.makeArrayData(products)
    }
    makeArrayData(products){

        let titleArray=[]
        let quantity=[]

        for (let title in products) {
            titleArray.push(title)
            quantity.push(products[title])
        }
        this.setState({titleArray})
        this.setState({quantity})
    }

    render() {
        return (
            <div>
                <Card style={{direction:"rtl"}}>
                    <CardHeader/>
                    <CardContent><h1>ברוך הבא לממשק הניהול.</h1></CardContent><br/><br/><br/>
                    <div className="rowCardsDash">
                        <DashboardCard to={"/users"} title={"משתמשים"} number={this.state.userQuantity ? this.state.userQuantity : "--"} bg={"rgb(170, 4, 4)"} icon={<PeopleAltIcon className="iconDash" />}/>
                        <DashboardCard to={"/orders"} title={"הזמנות"} number={this.state.orders ? this.state.orders.length: "--"} bg={"blue"} icon={<ShoppingCartIcon className="iconDash" />}/>
                        <DashboardCard to={"/products"} title={"מוצרים"} number={this.state.product ? this.state.product.length : "--"} bg={"rgb(240, 184, 32)"} icon={<CakeIcon className="iconDash" />}/>
                        <DashboardCard to={"/recipes"} title={"מתכונים"} number={this.state.recipeQuantity ? this.state.recipeQuantity : "--"} bg={"rgb(104, 4, 170)"} icon={<MenuBookIcon className="iconDash" />}/>
                    </div>
                    <div className="rowCardsDash">
                        <DashboardCardInfo title={'המוצר הנמכר ביותר'} number={this.state.bestSeller} bg={"yellowgreen"} icon={<InsertEmoticonIcon className="iconDash"/>}/>
                        <DashboardCardInfo title={'סה"כ הכנסות'} number={this.state.totalPayment} bg={"green"} icon={<AttachMoneyIcon className="iconDash"/>}/>
                    </div>
                    <br/><br/>
                    <BarChart titleArray={this.state.titleArray? this.state.titleArray: []} quantity={this.state.quantity? this.state.quantity: []}/>
                    <br/><br/>
                    <LineChart dateArry={this.state.dateArry? this.state.dateArry: []} countOrderDay={this.state.countOrderDay? this.state.countOrderDay: []}/>

                </Card>
            </div>
        )
    }
}
