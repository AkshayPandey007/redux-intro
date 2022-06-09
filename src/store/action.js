import { COUNTER_DECREMENT , COUNTER_INCREMENT ,COUNTER_MULTIPLY,  COUNTER_DIVIDE} from "../action.type"

export const Add =(value)=>(
        {type:COUNTER_INCREMENT ,playload:value}
)

export const Subtract =(value)=>(
    {type:COUNTER_DECREMENT , playload:value}
)

export const Multiply = (value) => (
    { type: COUNTER_MULTIPLY, playload: value }
    )

export const Divide = (value) => (
    { type: COUNTER_DIVIDE, playload: value }
    )

