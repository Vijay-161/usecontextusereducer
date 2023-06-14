const { legacy_createStore  } = require("redux")

// useReducer
const noteReducer = (state, action)=>{
    switch(action.type){
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.payload
            }
        // case 'addNote':
        //     return{
        //         ...state,
        //         notes: notes.concat(action.payload)
        //     }
        case 'SET_DESC':
            return{
                ...state,
                desc: action.payload
            }
        case 'SET_FILTER':
            return{
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

const store = legacy_createStore(noteReducer)