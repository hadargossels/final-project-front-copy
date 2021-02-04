import React, {Component} from 'react'

export default class StateFullComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            url: props.url,
            name_prodact:  props.name_prodact,
            price: props.price
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className="gridlist">
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div> 
                <h4 className="watch_name">{this.state.name_prodact}</h4> 
                <img className="img_grid" src={this.state.url} alt=""/>  
                <p className="price_grid">{this.state.price}$</p>
            </div>

        )
    }
}