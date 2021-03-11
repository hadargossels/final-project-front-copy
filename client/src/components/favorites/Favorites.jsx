import React from 'react'
import FavorateProduct from './FavorateProduct'
import { useFavorites } from '../../context/FavoritesContext';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Favorites() {
    const { favoriteProducts } = useFavorites();

    return (
        <div>
            <Container className="d-flex flex-column justify-content-center align-items-center py-5">
                <h1>WISHLIST</h1>
                <div className="row py-5">
                    {favoriteProducts.map((favorateProduct, index) =>
                        <Link to={`/${favorateProduct.url}`}  key={index} className="link">
                            <FavorateProduct favorateProduct={favorateProduct} />
                        </Link>
                    )}
                </div>
            </Container>
        </div>
    )
}
