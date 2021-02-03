
import React, { Component } from 'react';
import './Sortbar.css';


class Sortbar extends Component{

    constructor(props){
        super(props)
        this.state={
            check1:true,check2:false

        }
    }

 checkboxIcon = (bool)=>bool?'✔':``
 updateState = (str)=>this.setState((state)=>({[str]:!state[str]}))


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
            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="milk" id="milk" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="milk" class="[ btn btn-primary ]" onClick={()=>this.updateState('check1')}>
                            <span class="[ glyphicon glyphicon-ok ]">{this.checkboxIcon(this.state.check1)}</span>
                        </label>
                        <label htmlFor="milk" className="[ btn btn-default active ]">חלבי</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="parve" id="parve" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="parve" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="parve" className="[ btn btn-default active ]">פרווה</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="fruit" id="fruit" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="fruit" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="fruit" className="[ btn btn-default active ]">פירותי</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="withoutfruit" id="withoutfruit" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="withoutfruit" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="withoutfruit" className="[ btn btn-default active ]">ללא פירות</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="glutenFree" id="glutenFree" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)} checked/>
                    <div className="[ btn-group ]">
                        <label htmlFor="glutenFree" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="glutenFree" className="[ btn btn-default active ]">ללא גלוטן</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="shugerFree" id="shugerFree" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="shugerFree" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="shugerFree" className="[ btn btn-default active ]">ללא סוכר</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <p> טווח מחירים:</p>
                <div className="[ form-group ]" style={{"marginTop":"10px"}}>
                    <input type="checkbox" name="price1" id="price1" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="price1" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="price1" className="[ btn btn-default active ]">₪ 0 - 100</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="price2" id="price2" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="price2" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="price2" className="[ btn btn-default active ]">₪ 100 - 200</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="price3" id="price3" autoComplete="off" onClick={(e)=>this.props.addFilter(e.target)}/>
                    <div className="[ btn-group ]">
                        <label htmlFor="price3" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]">✔</span>
                            <span> </span>
                        </label>
                        <label htmlFor="price3" className="[ btn btn-default active ]">₪ מעל 200</label>
                    </div>    
                </div>

            </div>

        </div>
        
      );
   }
}
   export default Sortbar;