import { combineReducers } from 'redux'

const initialStateEditor = {
  title: '',
  summary: ''
};

const editor =(state= initialStateEditor,action)=>{
  switch (action.type) {
    case "TITLE_CHANGE":
      return console.log("titulo cambio!"+action.title)
      break;
      default: return state


  }
}

const reducer = combineReducers({editor});
export default reducer;
