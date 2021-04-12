import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './WishList.css'

export class WishList extends Component {
    constructor () {
        super() 
            this.state = {
                wishList: []
            }
        
    }
    remove(e) {
        let id = e.target.parentNode.parentNode.id
        let wishList = JSON.parse(localStorage.getItem("wishList"))
        wishList = wishList.filter((v)=> {return v.itemId !== id})
        
      localStorage.setItem("wishList",JSON.stringify(wishList))
      this.setState({wishList})
      
        
    }

    render() {
        return (
            <div className="wishCont">
                <h1>WishList</h1>
                <table className='dropTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {JSON.parse(localStorage.getItem("wishList")).map((v) => 
                        <tr key={v.itemId} id={v.itemId}>
                            <td><img src={v.src} alt='product' width='70px'/></td>
                            <td>{v.name}</td>
                            <td>{v.price}$</td>
                            <td><Link to={'product/'+v.itemId}><button className="fas fa-eye wishbtn"></button></Link><button className="fas fa-trash-alt wishbtn" onClick={(e)=>{this.remove(e)}}></button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WishList
