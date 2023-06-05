import {products} from '../../data/data'


export const cardReducer = (state = products, action) => {
    if(action.type === 'ADD'){
        return [...state, {id: Date.now(), ...action.payload}]
    }else if(action.type === 'DELETE'){
        return state.filter(({id}) => id !== action.payload)
    }else if(action.type === 'PLUS'){
       state.find(({id}) => id === action.payload).count++
        return [...state]
    }else if(action.type === 'MINUS'){
        const target = state.find(({id}) => id === action.payload);
        if(target.count !== 0) {
            target.count--;
        }
        return [...state]
        
    }
    return state
}


