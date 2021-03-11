import React from 'react'
import { Card } from 'react-bootstrap'
import { useFavorites } from '../../context/FavoritesContext';

export default function FavorateProduct(props) {
    const { handleChangeFavorites } = useFavorites();

    const price = props.favorateProduct.price;
    const discount = props.favorateProduct.discount;
    const name = props.favorateProduct.name;


    return (
        <div className="col-6 col-md-3">
            <Card className="mb-3 text-center" style={{ width: '14rem' , border: 'none'}}>
                <button type="button" className="button-icon px-3 py-2" 
                  onClick={() => handleChangeFavorites(props.favorateProduct, false)} 
                  style={{border: 'none', position:"absolute", fontSize:"20px"}}>
                    <i className="fas fa-heart"></i>
                </button>
                <Card.Img variant="top" src={props.favorateProduct.images[0]} />
                <Card.Body className="py-1">
                    {discount > 0 ?
                        <p className="text-success my-1">{discount * 100}% DISCOUNT</p>
                    : null 
                    }
                    <p className="my-1">{name}</p>
                    <div className="d-flex justify-content-center">
                        <p style={discount > 0 ? {textDecorationLine: 'line-through'} : {}}>{price}$</p>
                        {discount > 0 ?
                            <p className="ml-2 text-success">{price * (1 - discount)}$</p>
                        : null
                        }
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
