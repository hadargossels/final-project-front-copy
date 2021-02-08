import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom'
import './Featured.css'

const product = [
    {src: "/img/souffle1.jpg",
    category: 'pens',
    brand: 'brandA',
    color: 'multi',
    price: 10,
    priceRange: "0-10",
    name: 'pen1',
    description: 'aaaaaa',
    id: 1,
    date: new Date ('2019-06-28'),
    featured: 15
    },
    {src: "/img/souffle_2.jpg",
     category: 'pencils',
     brand: 'brandB',
     color: 'multi',
     price: 15,
     priceRange: "11-20",
     name: 'pencil1',
     description: 'aaaaaa',
     id: 2,
     date: new Date ('2012-06-28'),
     featured: 8
     },
     {src: "/img/notebooks/noteb1.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'pink',
     price: 6,
     priceRange: "0-10",
     name: 'notebook1',
     description: 'aaaaaa',
     id: 3,
     date: new Date ('2018-06-28'),
     featured: 17
     },
     {src: "/img/notebooks/noteb2.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'purple',
     price: 23,
     priceRange: "21-30",
     name: 'notebook2',
     description: 'aaaaaa',
     id: 4,
     date: new Date ('2019-08-28'),
     featured: 5
     },
     {src: "/img/notebooks/noteb3.jpg",
     category: 'notebooks',
     brand: 'brandA',
     color: 'purple',
     price: 8,
     priceRange: "0-10",
     name: 'notebook3',
     description: 'bbb',
     id: 5,
     date: new Date ('2019-07-28'),
     featured: 6
     },
     {src: "/img/notebooks/noteb4.jpg",
     category: 'notebooks',
     brand: 'brandB',
     color: 'blue',
     price: 9,
     priceRange: "0-10",
     name: 'notebook4',
     description: 'bbb',
     id: 6,
     date: new Date ('2020-06-28'),
     featured: 24
     },
     {src: "/img/notebooks/noteb5.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'multi',
     price: 11,
     priceRange: "11-20",
     name: 'notebook5',
     description: 'bbb',
     id: 7,
     date: new Date ('2004-06-28'),
     featured: 16
     },
     {src: "/img/notebooks/noteb6.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'yellow',
     price: 7,
     priceRange: "0-10",
     name: 'notebook6',
     description: 'bbb',
     id: 8,
     date: new Date ('2012-06-28'),
     featured: 22
     },
     {src: "/img/notebooks/noteb7.jpg",
     category: 'notebooks',
     brand: 'brandA',
     color: 'red',
     price: 18,
     priceRange: "11-20",
     name: 'notebook7',
     description: 'ccccccc',
     id: 9,
     date: new Date ('2018-11-28'),
     featured: 30
     },
     {src: "/img/notebooks/noteb8.jpg",
     category: 'notebooks',
     brand: 'brandB',
     color: 'yellow',
     price: 14,
     priceRange: "11-20",
     name: 'notebook8',
     description: 'ccccccc',
     id: 10,
     date: new Date ('2019-06-13'),
     featured: 4
     },
     {src: "/img/notebooks/noteb9.jpg",
     category: 'notebooks',
     brand: 'brandC',
     color: 'yellow',
     price: 18,
     priceRange: "11-20",
     name: 'notebook9',
     description: 'ccccccc',
     id: 11,
     date: new Date ('2017-04-28'),
     featured: 19
     },
     {src: "/img/notebooks/noteb10.jpg",
     category: 'notebooks',
     brand: 'brandD',
     color: 'blue',
     price: 18,
     priceRange: "11-20",
     name: 'notebook10',
     description: 'ccccccc',
     id: 12,
     date: new Date ('2021-02-28'),
     featured: 6
     }
 ]

export class New extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: product
        }

        this.sortFeatured = this.sortFeatured.bind(this);
        this.sortFeatured();
    }
    
    sortFeatured () {
        this.state.products.sort((a, b) => b.featured - a.featured)
    }

    render() {
        return (
            <div className='newitems'>
                <h3>Featured Items</h3>
                <Carousel>
  <Carousel.Item>
      <div className='carItem'>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[0].src} alt="slide"/><br/>
      <span>{this.state.products[0].name}</span><br/>
      <span>{this.state.products[0].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[1].src} alt="slide"/><br/>
      <span>{this.state.products[1].name}</span><br/>
      <span>{this.state.products[1].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[2].src} alt="slide"/><br/>
      <span>{this.state.products[2].name}</span><br/>
      <span>{this.state.products[2].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[3].src} alt="slide"/><br/>
      <span>{this.state.products[3].name}</span><br/>
      <span>{this.state.products[3].price}$</span><br/>
      </div>
      </div>
  </Carousel.Item>
  <Carousel.Item>
      <div className='carItem'>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[4].src} alt="slide"/><br/>
      <span>{this.state.products[4].name}</span><br/>
      <span>{this.state.products[4].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[5].src} alt="slide"/><br/>
      <span>{this.state.products[5].name}</span><br/>
      <span>{this.state.products[5].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[6].src} alt="slide"/><br/>
      <span>{this.state.products[6].name}</span><br/>
      <span>{this.state.products[6].price}$</span><br/>
      </div>
      <div className='flex col-3'>
      <img className="flex carImg"  src={this.state.products[7].src} alt="slide"/><br/>
      <span>{this.state.products[7].name}</span><br/>
      <span>{this.state.products[7].price}$</span><br/>
    </div>
      </div>
  </Carousel.Item>
    </Carousel>
            <span className='seemore'><NavLink exact to="/Store/Featured" className='seemore'>See more...</NavLink></span>
            </div>
        )
    }
}

export default New
