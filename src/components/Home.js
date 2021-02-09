
import React, { Component } from 'react'
import Header from './Header';
import './Home.css';
import HomeElement from './HomeElement';


const cakeArr= require("../dataBase/productsData.json")

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={

            newArr:[],
            bestRatingArr:[]
        }

        this.newestProducts=this.newestProducts.bind(this)
        this.bestRatingProduct=this.bestRatingProduct.bind(this)

        this.bestRatingProduct()
        this.newestProducts()
    }

    newestProducts(){

        let array=[]

        for(let i=cakeArr.length-1;i<cakeArr.length-5;i--){
            array.push(cakeArr[i])
        }
        this.setState({newArr:array})
    }

    bestRatingProduct(){

        let copyArr=[...cakeArr]
        let maxArr=[]
        let maxRating=copyArr[0].stars
        let index=0

        for(let i=0;i<5;i++){
            for (let j=1; j<copyArr.length;j++) {
                
                if(maxRating<copyArr[j].stars){
                    index=j
                    maxRating=copyArr[j].stars
                }
            }
            maxArr.push(copyArr[index])
            copyArr.splice(index,1)
            index=0
            maxRating=copyArr[0].stars
        }
        console.log(maxArr)
        this.setState({bestRatingArr:maxArr})
    }

    render() {
        return (
            <div>
                <div className="myContainer">
                    <div className="myRow" style={{marginBottom:"60px"}}>
                        <div className="textOnMe">
                            <h3>קצת עלי</h3>
                            <p>אני אור שפיץ, קונדיטורית בת 22. את אהבתי למטבח רכשתי מסבתי הפרסייה בגיל 10. הייתי ילדה מאוד עסוקה עם הרבה חוגים ותחביבים, אך האפייה שבתה את ליבי יותר מכל השאר. ביום הולדתי ה-18 אמא שלי, הלא היא מירי שפיץ המפורסמת, לקחה אותי לסדנת זילוף וכולם התלהבו מהעוגות שיצרתי. מאז אני עובדת מהמטבח. מיד בסיום הטירונות סבי בנה לי מטבח משלי, ורוד כמובן, ובמהלך השירות הצבאי שלי פיתחתי את העסק שלי צעד אחר צעד. עם כל הקושי והשעות המטורפות החלטתי ללמוד קונדיטוריה אצל "אסטלה" ולהתמקצע יותר בתחום. אצל אסטלה הבנתי לחלוטין שגם לאחר אשתחרר זו תהיה עבודת חלומותיי. בסוף שירותי הצבאי קיבלתי הצעה להגיע לאודישן של העונה השנייה של "בייק אוף ישראל" ולאחר מספר אודישנים התקבלתי. ההשתתפות בתוכנית הייתה אחת החוויות היותר מאתגרות וחווייתיות שעברתי. לפני חצי שנה עברתי לגור בתל אביב וכיום אני עובדת באופן רצוף בהזמנות עוגות בעיצוב אישי
                                 ומעבירה סדנאות קבוצתיות ואישיות.
                                מוזמנים להכין את המתכונים שלי ולספר לי איך היה בעמוד באינסטגרם שלי😆
                                ולעולם אל תשכחו – רק מי שמעז מצליח!
                            </p>
                        </div>
                        <div className="myImage" >

                        </div>
                    </div>

                    <div className="myRow" style={{marginBottom:"10px"}}><h2> החדשים שלנו </h2></div>

                <div className="mySlider">
                   <HomeElement/>
                   <HomeElement/>
                   <HomeElement/>
                </div>

                

                </div>
            </div>
        )
    }
}
