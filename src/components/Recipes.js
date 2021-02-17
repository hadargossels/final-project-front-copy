
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Link,NavLink } from 'react-router-dom';
import './Recipes.css';

const recipesArr= require("../dataBase/recipesData.json")

export default class Recipes extends Component {


    constructor(){
        super()

        this.state={
            
            arr:[...recipesArr]
        }
    }



    render() {
        return (
            <div>
                <div className="myContainerRecipes">

                    <h1>מתכונים</h1>
                    <div className='player-wrapper'>
                        <ReactPlayer className='react-player ' width='100%' height='100%' url='https://www.youtube.com/watch?v=-ZnK6OgRqqY&ab_channel=BluebellRecipes' />
                    </div>
                    <div className="mt-4">

                        <div className="row m-2">

                            {this.state.arr.map((el, key) => (
                                <Link className={(el.id%9===1 || el.id%9===5 || el.id%9===8)?"col-lg-3 mb-4 col-sm-5 ":(el.id%9===2 || el.id%9===4 || el.id%9===0)? "col-lg-5  mb-4 col-sm-5":"col-lg-4  mb-4 col-sm-5" } 
                                key={key} to={"/Recipes/"+el.title}>
                                    
                                    <div className="image"><div className="dateBanner">{el.date}</div><div className="titleBanner">{el.title}</div><img src={el.img} alt={el.alt}></img></div>
                                </Link>
                            ))}

                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
