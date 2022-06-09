import { COUNTER_DECREMENT , COUNTER_INCREMENT ,COUNTER_MULTIPLY ,COUNTER_DIVIDE } from "../action.type";

export const reducer =(state,action)=>{
console.log(state,action)
   switch(action.type)
   {
       case COUNTER_INCREMENT:{
           state.count=state.count + action.playload;
           return {...state};
       }

       case COUNTER_DECREMENT:{
           state.count=state.count - action.playload;
           return {...state}; 
       }

       case COUNTER_MULTIPLY: {
          state.count = state.count*action.playload;
          return { ...state };
        }

        case COUNTER_DIVIDE: {
                state.count = state.count/action.playload;
                return { ...state };
              } 
        

       default:{
           return state
       }
   }
   

    
}