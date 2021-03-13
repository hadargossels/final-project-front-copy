import React, { Component } from 'react';

export default class ProductsFilter extends Component {

  constructor(props) {

    super(props);

    this.state = {category: this.props.category, filter: this.props.filter, filterCategories: this.props.filterCategories, callRef: this.props.callRef};

    this.arr = [];
    this.dict = {};

    switch (this.state.category) {

        case "category":

            this.props.products.filter(prod => {

                if (prod.category === this.state.filter) {
    
                    this.dict[prod.subCategory] = 1 + (this.dict[prod.subCategory] === undefined ? 0 : this.dict[prod.subCategory]);
                    
                    if (this.arr.indexOf(prod.subCategory) === -1) {
    
                        this.arr.push(prod.subCategory);
                    }
                }  
            });

            break;

        case "subCategory":

            this.props.products.filter(prod => {

                if (prod.subCategory === this.state.filter) {
    
                    this.dict[prod.type] = 1 + (this.dict[prod.type] === undefined ? 0 : this.dict[prod.type]);
                    
                    if (this.arr.indexOf(prod.type) === -1) {
    
                        this.arr.push(prod.type);
                    }
                }  
            });

            break;

        case "type":

            this.props.products.filter(prod => {

                if (prod.type === this.state.filter) {
    
                    this.dict[prod.brand] = 1 + (this.dict[prod.brand] === undefined ? 0 : this.dict[prod.brand]);
                    
                    if (this.arr.indexOf(prod.brand) === -1) {
    
                        this.arr.push(prod.brand);
                    }
                }  
            });
            
            break;

        default:
            break;
    }
  };
  
  render(){
    return(
        <div>
            {this.arr.map((elem, index) => <li key={index} className="list-group-item"><input type="checkbox" onChange={(e) => this.state.filterCategories(e.target.value)} value={elem} ref={this.state.callRef}/> {elem}
                <span className="label label-success pull-right"> ({this.dict[elem]})</span>
            </li>)}
        </div>
    );
  }
}