
import { createAction, handleActions } from 'redux-actions'

const COUNTER_INCREASE = 'COUNTER/INCREASE';
const COUNTER_DECREASE = 'COUNTER/DECREASE'; 

 const increase = createAction(COUNTER_INCREASE, (num) => {
  return num;
});
// export const decreaseAction = createAction(COUNTER_DECREASE);

export const increaseAction = num => dispatch =>{
  setTimeout(() => {
    dispatch(increase(num))
  }, 1000);
}

export const decreaseAction = () => dispatch =>{
  setTimeout(() => {
    dispatch({type:COUNTER_DECREASE})
  }, 1000);
}


const init = {
  num: 0,
  moduleName: 'Counter Module',
}

const counterR = handleActions({
  [COUNTER_INCREASE]: (state, action) => ({...state, num: state.num + action.payload}),
  [COUNTER_DECREASE]: (state, action) =>({...state, num: state.num - 1})
}, init);
export default counterR;
