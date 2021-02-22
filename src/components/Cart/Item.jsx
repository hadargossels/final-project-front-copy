import React from 'react'
import './Item.css'
import myProducts from '../../prod.json';


export default function Cards(props) {

    let choosen=props.image;
    let result = myProducts.filter(function (pro) {
        return pro.Image === choosen;
    })[0];
    

    const addReduceItems = (e) => {

        let arrProd = JSON.parse(localStorage.getItem('products'));
        for (let i = arrProd.length - 1; i >= 0; i--)
            if (arrProd[i]["Image"]===result.Image){
                if(e.target.id==="add")
                    arrProd[i]["Item"]++;
                if(e.target.id==="subtract")
                    arrProd[i]["Item"]--;
            }
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(arrProd));
        window.location.reload()
    };

    const RemoveProd = (e) => {

        let arrProd = JSON.parse(localStorage.getItem('products'));
        for (let i = arrProd.length - 1; i >= 0; i--)
            if (arrProd[i]["Image"]===result.Image)
                arrProd.splice(i, 1);
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(arrProd));
        window.location.reload()
    };
    
        return (
            <div className="container-fluid border mt-3" style={{borderRadius:"30px"}}>
                <div className="row">
                    <div className="col-3">
                        <img className="cardImg" src={props.image} alt="..."/>
                    </div>
                    <div className="col-5">
                    <br/><br/>
                    <div className="fw-bold">{result.Title}</div> 
                    <div>{result.Description}</div>   
                    <br/> 
                    <div id={result.id} className="cursor fw-bold text-center" onClick={(e)=>RemoveProd(e)}>Remove</div>
                    </div>
                    <div className="col-4">
                        <br/><br/><br/>
                        <div style={{margin:"0 auto"}}>
                            <input id="subtract" onClick={(e)=>addReduceItems(e)} type="button" className="btnQty" value="-"/>
                            &nbsp; {props.item} &nbsp;
                            <input id="add" onClick={(e)=>addReduceItems(e)} type="button" className="btnQty" value="+"/>
                        </div>
                        <br/>
                        <div className="text-center fw-bold">Price: ${props.item*result.Price}</div>
                        {props.item>1 && <div className="text-center">(${result.Price}) each</div>}
                    </div>
                </div>  
            </div>
        )
}
