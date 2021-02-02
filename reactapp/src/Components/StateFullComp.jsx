import React, {Component} from 'react'

export default class StateFullComp extends Component {

    constructor(){
        super();
        this.state = {
            url: "",
            name_prodact: "",
            price: ""
        }
    }
    render(){
        return(
            <div className="gridlist">
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div> 
                <h4 className="watch_name">{this.props.name_prodact}</h4> 
                <img className="img_grid" src={this.props.url} alt=""/>  
                <p className="price_grid">{this.props.price}$</p>
            </div>

        )
    }
}