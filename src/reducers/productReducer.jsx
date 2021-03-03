import { ADD_TO_CART, REMOVE_FROM_CART, PLUS_ONE, MINUS_ONE, EMPTY_CART, GET_PRODUCTS, MOVE_BESTSELL} from '../constants/action-types'

const initialState = {
    allProducts: "",
    chosenProducts: JSON.parse(localStorage.getItem("productsArr")),
    bestSellers:""
}

export default function products(state = initialState, action){
    let newChosen
    if (state.chosenProducts){
        newChosen = [...state.chosenProducts]
    }
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, allProducts: action.payload, bestSellers: (action.payload.filter((el) => el.bestseller))}
        case MOVE_BESTSELL:
            let newBest = [...state.bestSellers]
            if (action.payload === "&lt;"){
                newBest.unshift(newBest.pop());
            }
            else if (action.payload === "&gt;"){
                newBest.push(newBest.shift());
            }
            return {...state, bestSellers:newBest};

        case ADD_TO_CART:
            if (newChosen){
                let dup = false;
                for (let product of newChosen){
                    if (product.id === action.payload){
                        dup=true;
                        product.count +=1
                    }
                }
                if (!dup){
                    newChosen.push({id:action.payload,count:1})
                }
            }
            else{
                newChosen = [{id:action.payload, count:1}]
            }
            localStorage.setItem("productsArr", JSON.stringify(newChosen)) 
            return {...state, chosenProducts:newChosen};

        case PLUS_ONE:
            for (let product of newChosen){
                if (product.id === action.payload){
                    product.count +=1
                    break;
                }
            }
            localStorage.setItem("productsArr", JSON.stringify(newChosen)) 
            return {...state, chosenProducts:newChosen};

        case MINUS_ONE:
            for (let i = 0 ; i < newChosen.length ; i++){
                if (newChosen[i].id === action.payload){
                    newChosen[i].count -=1
                }
                if (newChosen[i].count < 1){
                    newChosen = newChosen.slice(0,i).concat(newChosen.slice(i+1,))
                }
            }

            if (newChosen.length < 1)
                newChosen=""
            
            localStorage.setItem("productsArr", JSON.stringify(newChosen)) 
            return {...state, chosenProducts:newChosen};

        case REMOVE_FROM_CART:
            for (let i = 0 ; i < newChosen.length ; i++){
                if (newChosen[i].id === action.payload){
                    newChosen = newChosen.slice(0,i).concat(newChosen.slice(i+1,))
                    break;
                }
            }

            if (newChosen.length < 1)
                newChosen=""

            localStorage.setItem("productsArr", JSON.stringify(newChosen)) 
            return {...state, chosenProducts:newChosen};

        case EMPTY_CART:
            localStorage.removeItem("productsArr")
            return {...state, chosenProducts:""}

        default:
            return state;
    }
}