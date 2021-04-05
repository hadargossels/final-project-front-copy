
import React, { Component } from 'react';
import './Sortbar.css';

// let sliderC = new Slider("#ex12c", { id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });


class Sortbar extends Component{

    constructor(props){
        super(props)
        this.state={
            width:"",
            
        }

        this.fillter1Ref= React.createRef()
        this.fillter2Ref= React.createRef()
        this.fillter3Ref= React.createRef()
        this.fillter4Ref= React.createRef()
        this.valiPrice=this.valiPrice.bind(this)
        this.handleResize=this.handleResize.bind(this)

    }
    componentWillUnmount() {
        window.addEventListener('resize', this.handleResize)
      }

    componentDidMount(){

        const fillterHide1= this.fillter1Ref.current
        const fillterHide2= this.fillter2Ref.current
        const fillterHide3= this.fillter3Ref.current
        const fillterHide4= this.fillter4Ref.current

        window.addEventListener('resize', this.handleResize)

        if(window.innerWidth< 500){
            fillterHide1.style.borderTop="rgb(94, 93, 93) solid 2px"
            fillterHide1.style.display="none"
            fillterHide2.style.display="none"
            fillterHide3.style.display="none"
            fillterHide4.style.display="none"
        }

    }
    
    valiPrice(e) {
        e.value=e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        let max=Number(document.querySelector("#priceMax").value)
        let min=Number(document.querySelector("#priceMin").value)

        if(min>max && max !=""){
            
            document.querySelector("#invalid").innerHTML= "המחיר המקסימילי חייב להיות גדול מהמחיר המינימלי"
        }else{
            document.querySelector("#invalid").innerHTML= ""
            this.props.filteringPrice(min,max)
        }
    }

      handleResize(){

        const fillterHide1= this.fillter1Ref.current
        const fillterHide2= this.fillter2Ref.current
        const fillterHide3= this.fillter3Ref.current
        const fillterHide4= this.fillter4Ref.current

        if(fillterHide1){
            if(window.innerWidth> 500){

                fillterHide1.style.display="block"
                fillterHide2.style.display="block"
                fillterHide3.style.display="block"
                fillterHide4.style.display="block"
                fillterHide1.style.borderTop="rgb(94, 93, 93) solid 0px"
    
            }else{
                fillterHide1.style.borderTop="rgb(94, 93, 93) solid 2px"
                fillterHide1.style.display="none"
                fillterHide2.style.display="none"
                fillterHide3.style.display="none"
                fillterHide4.style.display="none"
            }
        }
      }
      
      myFunction() {

        const fillterHide1= this.fillter1Ref.current
        const fillterHide2= this.fillter2Ref.current
        const fillterHide3= this.fillter3Ref.current
        const fillterHide4= this.fillter4Ref.current
        
        if (fillterHide1.style.display === "block") {

            fillterHide1.style.display="none"
            fillterHide2.style.display="none"
            fillterHide3.style.display="none"
            fillterHide4.style.display="none"
            fillterHide1.style.borderTop="rgb(94, 93, 93) solid 0px"

          
        } else {

            fillterHide1.style.display="block"
            fillterHide2.style.display="block"
            fillterHide3.style.display="block"
            fillterHide4.style.display="block"
            fillterHide1.style.borderTop="rgb(94, 93, 93) solid 2px"
        }
      }


   render(){

    return(
         
            <div className="sortBar">
                <div className="sort">
                    <label htmlFor="sortBy">מיין לפי:</label><br/>
                    <select name="sortBy" onChange={(e)=>this.props.sortFunc(e.target.value)}>
                        <option>העדכני ביותר</option>
                        <option>הפופלרי ביותר</option>
                        <option>מהזול ליקר</option>
                        <option> מהיקר לזול</option>

                    </select>
                    
                </div>

                <span className="activeBtn" onClick={()=>this.myFunction()}> פילטר <i className="fas fa-sliders-h"></i> </span>
                
                <div className="filter" ref={this.fillter1Ref}>

                    <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                        <input type="checkbox" name="milk" id="milk" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="milk" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="milk" className="[ btn btn-default active ]">חלבי</label>
                        </div>    
                    </div>

                    <div className="[ form-group ]">
                        <input type="checkbox" name="parve" id="parve" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="parve" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="parve" className="[ btn btn-default active ]">פרווה</label>
                        </div>    
                    </div>

                </div>

                <div className="filter"  ref={this.fillter2Ref}>

                    <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                        <input type="checkbox" name="fruit" id="fruit" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="fruit" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="fruit" className="[ btn btn-default active ]">פירותי</label>
                        </div>    
                    </div>

                    <div className="[ form-group ]">
                        <input type="checkbox" name="withoutfruit" id="withoutfruit" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="withoutfruit" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="withoutfruit" className="[ btn btn-default active ]">ללא פירות</label>
                        </div>    
                    </div>

                </div>

                <div className="filter"  ref={this.fillter3Ref}>

                    <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                        <input type="checkbox" name="glutenFree" id="glutenFree" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="glutenFree" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="glutenFree" className="[ btn btn-default active ]">ללא גלוטן</label>
                        </div>    
                    </div>

                    <div className="[ form-group ]">
                        <input type="checkbox" name="shugerFree" id="shugerFree" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                        <div className="[ btn-group ]">
                            <label htmlFor="shugerFree" className="[ btn btn-primary ]">
                                <span className="[ glyphicon glyphicon-ok ]">✔</span>
                                <span> </span>
                            </label>
                            <label htmlFor="shugerFree" className="[ btn btn-default active ]">ללא סוכר</label>
                        </div>    
                    </div>

                </div>

                <div className="priceFilter"  ref={this.fillter4Ref}>

                    <p><b> טווח מחירים:</b></p>

                        <label htmlFor="priceMin">מחיר מינימלי:</label>
                        <input type="text" name="priceMin" id="priceMin" maxLength="3" onChange={(e)=>this.valiPrice(e.target)}/>
                        <label htmlFor="priceMax">מחיר מקסימלי:</label>
                        <input type="text" name="priceMax" id="priceMax" maxLength="3" onChange={(e)=>this.valiPrice(e.target)}/>
                        <p id="invalid"></p>
        
                </div>

            </div>
        
        
      );
      
   }
}
   export default Sortbar;