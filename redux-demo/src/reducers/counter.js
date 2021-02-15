const counterReducer = (state = 0, action) => {
    switch(action.type){
        case  'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CUSTOM' :
            return state + action.payload;
        case 'RANDOM' : 
        return state = Math.floor(Math.random() * 100);
        case 'RESET':
            return state = 0;
        default :
            return state;
    }
}

export default counterReducer;