import React, { Component } from 'react'

export class WishList extends Component {
    render() {
        return (
            <div>
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
                        <tr key={v.itemId}>
                            <td><img src={v.src} alt='product' width='70px'/></td>
                            <td>{v.name}</td>
                            <td>{v.price}$</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WishList
