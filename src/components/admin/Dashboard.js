
import React, {useEffect, useState} from "react";
import { Line ,Bar} from 'react-chartjs-2';
import { Card } from '@material-ui/core';
import DollarIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import CardDashboard from './CardDashboard'
import axios from 'axios'
const Dashboard = () => {
  const [ordersIncome, setOrder] = useState("")
  const [AmontsOfItemsInCart, setAmontsOfItemsInCart] = useState("")
  const [amountOfUsers, setAmountOfUsers] = useState("")
  const [allProducts, setAllProducts] = useState("")
  const [numberOfHelmets, setnumberOfHelmets] = useState("")
  const [numberOfScooters, setAllScooters] = useState("")
  const [numberOfCubs, setAllCubs] = useState("")
  const [numberOfBikes, setAllBikes] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      let allOrders = await axios.get("/api/order" );//, { 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } });
      allOrders = allOrders.data
      let sum = 0;
      for(let i=0;i<allOrders.length;i++){
        sum = allOrders[i].payment + sum
      }
      console.log(typeof sum)
      setOrder(Number.parseFloat(sum).toFixed(2));
      let allUsers = await axios.get("/api/user" );//, { 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } });
      setAmountOfUsers(allUsers.data.length)
      let allCarts = allUsers.data.map((user)=>{
        return (user.cart)
      })
      let AmountOfProductsInCarts=0;
      for(let i=0;i<allCarts.length;i++){
        AmountOfProductsInCarts = AmountOfProductsInCarts+allCarts[i].items.length
      }
      setAmontsOfItemsInCart(AmountOfProductsInCarts)
      let products = await axios.get("/api/product" );//, { 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } });
      products = products.data
      setAllProducts(products)
      let helmets = 0 , scooters=0,cubs=0,bikes=0;

      for(let i =0;i<products.length;i++){
        if(products[i].type=='helmet'){
          helmets++;
        }
        else if(products[i].type=='cub'){
          cubs++;
        }
        else if(products[i].type=='scooter'){
          scooters++;
        }
        else if(products[i].type=='bike'){
          bikes++;
        }
      }
      setnumberOfHelmets(helmets)
      setAllScooters(scooters)
      setAllCubs(cubs)
      setAllBikes(bikes)
  }
  fetchData()
  })
  const rand = () => Math.round(Math.random() * 10)
  const colors = ["white", "black", "green", 'yellow', "blue", "pink", "purple" , "brown", "Aqua","orange"]
  const backgourdColors = ["black","white", "blue" , "green", 'yellow', "purple", "Aqua","orange"]
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Purchases for 2021",
            data: [rand(), rand(), rand(), rand()],
            data: [10, 3, 7, 4],
            fill: true,
            // backgroundColor: backgourdColors[rand()],//"rgba(64,220,36,0)",
            // borderColor: colors[rand()]
             borderColor: "gold"
          },
          {
            label: "Purchases for 2020",
            // data: [rand(), rand(), rand(), rand()],
            data: [4, 20, 6, 16],
            fill: true,
           // backgroundColor: "rgba(220,64,36,0)",
           borderColor: "silver"
          }

        ]
      };
      const dataProducts = {
        labels: ["Helmats", "Scooters", "Bikes", "Cubs"],
        datasets: [
          {
            label: "Products In Store",
            data: [numberOfHelmets, numberOfScooters,numberOfBikes, numberOfCubs],
            fill: true,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },

        ]
      };
      return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <CardDashboard icon={DollarIcon} title="All orders income in dollars" subtitle={ordersIncome}  />
                <CardDashboard icon={ShoppingCartIcon} title="Amount of products in carts" subtitle={AmontsOfItemsInCart}/>
            </div>
            <div className="row justify-content-center">
                <CardDashboard icon={PeopleIcon} title="Number of users" subtitle={amountOfUsers} />
            </div>
            <div className="my-2 row justify-content-center">
                <Card className="col-6">
                    <Line data={data} options={{
                        title: { text:"Orders" ,display: true },
                        scales: { yAxes: [ {ticks:{beginAtZero:true}} ] }
                    }}/>    
                </Card>

                <Card className="col-6">
                    <Bar data={dataProducts} options={{
                        title: { text:"All products by types" ,display: true },
                        
                    }}/>    
                </Card>
            </div>
        </div>
    );
}


export default Dashboard;


