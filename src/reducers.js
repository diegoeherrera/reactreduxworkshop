import { combineReducers } from 'redux'

const initialStateEditor = {
  title: '',
  summary: ''
};

const editor =(state= initialStateEditor,action)=>{
switch (action.type) {
  case "TITLE_CHANGE":
    return Object.assign({},state,{title:action.title})
    break;
  case "SUMMARY_CHANGE":
    return Object.assign({},state,{summary:action.summary})
    break;
  default:
    return state
  }

}



const reducer = combineReducers({editor});
export default reducer;
