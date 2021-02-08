import React, { Component } from "react";
import Checkstars from "./Checkstars";
import "./Display.css";
import Items from "./Items";
import Sortby from "./Sortby";
import Category from "./Category";
import data from "../../data2";
import queryString from 'query-string'
import Noresult from "../Noresult";

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      limit: 8,
      origItem:data ,
      ItemsDet: data,
      searchValue:queryString.parse(props.location.search),
      display:"none"
      
    };
    this.filterStars = this.filterStars.bind(this);
    this.sortCategory = this.sortCategory.bind(this);
  }
  componentDidMount = () => {
    const storge = JSON.parse(localStorage.getItem("imgs") || "[]");
    this.setState({ origItem: storge, ItemsDet: storge });
    this.updateSearch()
    this.updatecategory()

  };

  componentWillUnmount = () => {
    localStorage.setItem("imgs", JSON.stringify(this.state.origItem));
  };

  sortPrice = (type) => {
    let ItemsDet = [...this.state.origItem];
    if (type === "lowToHight") ItemsDet.sort((a, b) => a.price - b.price);
    else ItemsDet.sort((a, b) => b.price - a.price);

    this.setState({ ItemsDet });
  };

  filterStars = (types) => {
  
    let orgArr = [...this.state.origItem];
    let newArr = [];
    if (types.length) {
      newArr = orgArr.filter((item) => types.indexOf(+item.stars) !== -1);
      this.setState({ ItemsDet: newArr });
    } else this.setState({ ItemsDet: orgArr });
  };

  sortCategory = (type) => {
    let category = [...this.state.origItem];
    category = category.filter((item) => item.category === type);
    this.setState({ ItemsDet: category });
  };

  update = () => {
    const page = this.state.page;
    const limit = this.state.limit;
    return this.state.ItemsDet.slice(page * limit, (page + 1) * limit).map(
      (img, key) => (
        <div className="col-md-6 col-lg-4 col-xl-3 mb-2 item" key={key}>
          <Items
            openProduct={this.openProduct}
            src={img.src}
            name={img.name}
            price={img.price}
            stars={img.stars}
            sale={img.sale}
            subcategory={img.subcategory}
            text={img.text}
            id={+key+2}
          />
        </div>
      )
    );
  };

  updateSearch(){
    let searchValueInput=this.state.searchValue.q
    if(searchValueInput){
      let searchInput=[]
      searchInput=[...this.state.origItem].filter(item=>{
       return item.name.toLowerCase().includes(searchValueInput.toLowerCase())
      })
          this.setState({ItemsDet:searchInput})
          // if(!this.state.ItemsDet) this.setState({display:"inline"})
          // else this.setState({display:"none"})
         
    }
  }
  updatecategory(){
    let category=this.props.match.params.search
    if(category){
      let searchCategory=[]
      searchCategory=[...this.state.origItem].filter(item=>{
       return item.subcategory.toLowerCase().includes(category.toLowerCase())
      })
      this.setState({ItemsDet:searchCategory})
  }
}
  render() {
    
  //  console.log("inRender",this.updateSearch())
  //  let a=this.updateSearch()
  //  this.setState({ItemsDet:a})
    return (

      
      <div id="display">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-2">
              <div id="sort">
                <div className="row mb-4">
                  <Sortby sort={this.sortPrice} />
                </div>
                <div className="row mb-4">
                  <Checkstars
                    filterStars={this.filterStars}
                    selectStars={this.selectStars}
                  />
                </div>
                <div className="row mb-4">
                  <Category sortCategory={this.sortCategory} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-10">

              <div id="noresult" style={{display:this.state.display}}>No results found</div>
              
              <div className="row">{this.update()}</div>
              <div className="row pagesNum">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" onClick={()=>this.setState((state)=>({page:state.page&&state.page-1}))}>
                        Previous
                      </a>
                    </li>
                    {Array(0 | (data.length / this.state.limit + 1))
                      .fill(0)
                      .map((_, index) => (
                        <li className="page-item" onClick={() =>
                          this.setState({ page: index })
                        }>
                          <a
                            className="page-link"
                            href="#"
                            
                          >
                            {index}
                          </a>
                        </li>
                      ))}

                    <li className="page-item"  onClick={()=>{ 
                      if(this.state.page < (0 | (data.length / this.state.limit))){
                        this.setState((state)=>({page:state.page+1}))
                      }
                    }}>
                      <a className="page-link" href="#" >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
