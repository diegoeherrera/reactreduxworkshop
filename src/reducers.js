import { combineReducers } from 'redux';


const initialStateEditor = {
  id:'',
  title: '',
  summary: '',
  votes:'',
  comments:[]
};

const getId=(state)=>{

return state.reduce((acc,cur)=>{

  
  return cur.id>acc ? acc=cur.id : acc
},0)+1

}

  //return post.id="le puse un id vieja!";


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



const posts = (state = [], action) => {
  switch(action.type) {
    case "ADD_POST":
      return [
        Object.assign({}, action.post, {id:getId(state)}), ...state
      ]
      break;
    default:
      return state;
  }
};



const reducer = combineReducers({editor,posts});
export default reducer;
