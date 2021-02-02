
import React, { Component } from 'react';
import './Sortbar.css';


class Sortbar extends Component{


   render(){
    
    return(
         
        <div className="sortBar">
            <div className="sort">
                <label htmlFor="sortBy">מיין לפי:</label><br/>
                <select name="sortBy">
                    <option>העדכני ביותר</option>
                    <option>הפופלרי ביותר</option>
                    <option>מהזול ליקר</option>
                    <option> מהיקר לזול</option>

                </select>
            </div>
            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="milk" id="milk" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="milk" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="milk" className="[ btn btn-default active ]">חלבי</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="parve" id="parve" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="parve" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="parve" className="[ btn btn-default active ]">פרווה</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="pruit" id="pruit" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="pruit" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="pruit" className="[ btn btn-default active ]">פירותי</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="withoutPruit" id="withoutPruit" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="withoutPruit" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="withoutPruit" className="[ btn btn-default active ]">ללא פירות</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <div className="[ form-group ]" style={{"marginTop":"20px"}}>
                    <input type="checkbox" name="glutenFree" id="glutenFree" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="glutenFree" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="glutenFree" className="[ btn btn-default active ]">ללא גלוטן</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="shugerFree" id="shugerFree" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="shugerFree" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="shugerFree" className="[ btn btn-default active ]">ללא סוכר</label>
                    </div>    
                </div>

            </div>

            <div className="filter">

                <p> טווח מחירים:</p>
                <div className="[ form-group ]" style={{"marginTop":"10px"}}>
                    <input type="checkbox" name="price1" id="price1" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="price1" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="price1" className="[ btn btn-default active ]">₪ 0 - 100</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="price2" id="price2" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="price2" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
                        </label>
                        <label htmlFor="price2" className="[ btn btn-default active ]">₪ 100 - 200</label>
                    </div>    
                </div>

                <div className="[ form-group ]">
                    <input type="checkbox" name="price3" id="price3" autoComplete="off" />
                    <div className="[ btn-group ]">
                        <label htmlFor="price3" class="[ btn btn-primary ]">
                            <span class="[ glyphicon glyphicon-ok ]"></span>
                            <span>✔ </span>
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