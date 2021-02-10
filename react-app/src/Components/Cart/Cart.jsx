import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import prettyFloat from '../../js/prettyFloat';

const products = require('../../database/products.json');

let total;
let shipping = 0.00;
let taxes = 10.00;

function veryPrettyFloat(num) {

    num = prettyFloat(num, 2, true);

    return num.includes(".") ? num.split(".")[1].length === 2 ? num : num = "0" : num + ".00";
}

export default function Cart(props) {

    total = 0;
    
    if (props.productsInCart && Object.keys(props.productsInCart).length > 0) {

        Object.keys(props.productsInCart).map(id => total+= products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * props.productsInCart[id]) : (products[id].price * props.productsInCart[id]));

        total = veryPrettyFloat(total);
    }

    return(
       <div className="container lead">
           <br/><br/><br/><br/>
           
            <table className="table table-hover" style={{textAlign: "center"}}>
                <tbody>
                {props.productsInCart && Object.keys(props.productsInCart).length > 0 ? Object.keys(props.productsInCart).map((id, count) => 
                        <tr style={{fontSize: "20px"}} key={count}>
                            <th scope="row" style={{verticalAlign: "middle"}}>{++count}</th>
                            <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}><img src={products[id].img[0]} alt={JSON.stringify(products[id].name)} width="50px"/></Link></td>
                            <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}>{products[id].title}</Link></td>
                            <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage)).toFixed(2) : (products[id].price).toFixed(2)}</td>
                            <td style={{verticalAlign: "middle"}}>x&emsp;<input type="number" min="1" max="4" defaultValue={props.productsInCart[id]} style={{width: "50px", textAlign: "center"}} id={"quantity"+id}/></td>
                            <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * props.productsInCart[id]).toFixed(2) : (products[id].price * props.productsInCart[id]).toFixed(2)}</td>
                            <td style={{verticalAlign: "middle"}}> <Button variant="outline-warning" onClick={() => props.addProductCart(id, document.querySelector("#quantity"+id).value)}>Update</Button></td>
                            <td style={{verticalAlign: "middle"}}> <Button variant="outline-danger" onClick={() => props.delProductCart(id)}>Remove</Button></td>
                        </tr>
                        )

                : 
                        <tr>
                            <td>No products in the shopping cart</td>
                        </tr>
                }
                </tbody>
            </table>

            {
                props.productsInCart && Object.keys(props.productsInCart).length > 0 ?

                <table className="table table-bordered" style={{tableLayout: "fixed"}}>
                    <tbody>
                        <tr>
                            <td>Total before fees:</td>
                            <td style={{textAlign: "center"}}>{"₪" + total}</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td style={{textAlign: "center"}}>{"₪" + shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Taxes:</td>
                            <td style={{textAlign: "center"}}>{"₪" + taxes.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Coupon:</td>
                            <td style={{textAlign: "center"}}>
                                <div className="input-group">
                                    <input type="text" className="form-control" style={{textAlign: "center"}}/>
                                    <input type="button" className="form-control btn btn-success" value="Apply Coupon"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                : null
            }

            {
                props.productsInCart && Object.keys(props.productsInCart).length > 0 ?

                <table className="table">
                    <tbody>
                        <tr style={{fontWeight: "bold"}}>
                            <td>Total After fees:</td>
                            <td>{"₪" + veryPrettyFloat(parseFloat(total.replace(/,/g,""))+shipping+taxes)}</td>
                        </tr>
                    </tbody>
                </table>

                : null
            }

            {
                props.productsInCart && Object.keys(props.productsInCart).length > 0 ?

                <button className="btn btn-primary">Proceed To Payment</button>

                : null
            }
       </div>
    );
}