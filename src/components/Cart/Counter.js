import React, { Component } from "react";

class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
      total:0,
    }
  }
  render() {
    
    return (
      <div>
        <div className="row itemOnCart">
          <div className="col-4">
            <img className="imgOnCart" src={this.props.counter.src} />
          </div>
          <div className="col-8 ">
            <div className="">
              <div className="productNameCart"><span className="itemNamecart">{this.props.counter.name}</span></div><br/>
              <div className="productNameCart">Price:<span className="itemPricecart">{this.props.counter.price}</span></div>
            </div>
            <div className="row-md-4 ">
              <button
                className="btn btn-secondary btnsCart"
                onClick={() => this.props.onIncrement(this.props.counter)}
              >
                <i className="fa fa-plus-circle iconCart" aria-hidden="true" />
              </button>
              <span style={{ fontSize: 18 }} className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
              <button
                className="btn btn-info m-2 btnsCart btnDec"
                onClick={() => this.props.onDecrement(this.props.counter)}
                disabled={this.props.counter.value === 0 ? "disabled" : ""}
              >
                <i className="fa fa-minus-circle iconCart" aria-hidden="true" />
              </button>
              <button
                className="btn btn-danger btnsCart"
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
                <i class="fas fa-trash-alt iconCart" aria-hidden="true"></i>
              </button>

            </div>
              <div className="totalPrice">Total:&nbsp;{((this.formatCount()==='Zero')?0:this.formatCount())*this.props.counter.price}&nbsp;<i className="fas fa-shekel-sign shekel"></i></div>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    // let total=value*this.props.counter.price
    // this.setState({totat:total})
    // localStorage.setItem("total", JSON.stringify(total))
    console.log( "value",value)

    console.log()
    return value
  };
  // componentDidMount = () => {
  //   const total = JSON.parse(localStorage.getItem("total") || 0);
  //   console.log("total",total)
  //   this.setState({total:total});
  // }

}

export default Counter;
