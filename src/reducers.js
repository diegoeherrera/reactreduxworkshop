import { combineReducers } from 'redux';

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


/*const posts = (posts=[],action)=>{

  switch (action.type) {
    case "ADD_POST":
    return console.log(action.post)
      break;
    default:
    return posts

  }
}*/

const posts = (state = [], action) => {
  switch(action.type) {
    case "ADD_POST":
      return [
        Object.assign({}, action.post, {}), ...state
      ];
      break;
    default:
      return state;
  }
};



const reducer = combineReducers({editor,posts});
export default reducer;
