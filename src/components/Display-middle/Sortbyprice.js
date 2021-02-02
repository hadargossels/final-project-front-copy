import React, { Component } from 'react';

class Sortbyprice extends Component{

constructor(){
        super();
        let ItemsDet=[
            {src:'/images/img1.png', name:'ESSENZA MINI PIANO BLACK' ,price:'749', stars:'3'} ,
            {src:'/images/img2.png', name:'2 VIEW Recipe Glasses', price:'89.00', stars:'2'} ,
            {src:'/images/img3.png' ,name:'Orange Flavored Biscuits', price:'60.00' ,stars:'4'} ,
            {src:'/images/img4.png', name:'Pixie', price:'120.00' ,stars:'2' },
            {src:'/images/img5.png', name:'REVEAL LUNGO', price:'130.00', stars:'3'} ,
            {src:'/images/img6.png', name:'Brown sugar', price:'21.00', stars:'3' },
            {src:'/images/img7.png', name:'Pure Rock dispenser', price:'110.00', stars:'1'} ,
            {src:'/images/img8.png' ,name:'Origin Lungo Cups', price:'95.00', stars:'4' },
            {src:'/images/img9.png', name:'Versilo Capsule Dispense' ,price:'140.00' ,stars:'2'} ,
            {src:'/images/img10.png', name:'PIXIE Lungo Set, Fortissio & Vivalto', price:'140.00',stars:'2'} ,
            {src:'/images/img11.png' ,name:'6 Large VIEW spoons', price:'65.00', stars:'3'} ,
            {src:'/images/img12.png', name:'Aeroccino White' ,price:'340.00', stars:'3'} ]

        this.state=ItemsDet;

        this.len = this.state.length;
        this.lowPrice = this.lowPrice.bind(this);
        this.highPrice = this.highPrice.bind(this);
        
}


 render(){

    return(
            {
                ItemsDet
            }

        );
    }

}

export default Sortbyprice;