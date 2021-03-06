
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Link} from 'react-router-dom';
import {db} from '../firebase'
import './Recipes.css';



// const recipesArr= require("../dataBase/recipesData.json")

export default class Recipes extends Component {


    constructor(){
        super()

        this.state={
            
            arr:[]
        }
    }

    componentDidMount(){
        this.getDataFromFirebase()
    }
    getDataFromFirebase(){

        let myData = ""
        
        db.on('value',async (snapshot)=>{
          if(snapshot.val()!=null){
  
              myData = (snapshot.val())
  
          for (const [key, value] of Object.entries(myData)) {
              myData[key] = Object.keys(myData[key]).map((iKey) => myData[key][iKey])
            }
            await this.setState({arr:myData.recipes})
            this.fixDate()
           } 
        })
    }

    fixDate(){

        let array= this.state.arr
        array.map((el, key) => {
            let tempArr=el.date.split("-")
            el.date=`${tempArr[2]}/${tempArr[1]}/${tempArr[0][2]}${tempArr[0][3]}`
        })
        this.setState({arr:array})
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

                            {(this.state.arr[0]) && this.state.arr.map((el, key) => (
                                <Link className={((key+1)%9===1 || (key+1)%9===5 || (key+1)%9===8)?"col-lg-3 mb-4 col-sm-5 ":((key+1)%9===2 || (key+1)%9===4 || (key+1)%9===0)? "col-lg-5  mb-4 col-sm-5":"col-lg-4  mb-4 col-sm-5" } 
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
