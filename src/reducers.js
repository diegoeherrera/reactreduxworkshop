import { combineReducers } from 'redux';












const postEditor = (state ={}, action) => {
  switch(action.type) {
    case "TITLE_CHANGE":
      return Object.assign({},state,{title:action.title})
    break;
    case "SUMMARY_CHANGE":
      return Object.assign({},state,{summary:action.summary})
    break;
    case "COMMENT_CHANGE":
    return Object.assign({},state,{id:action.id,comment:action.comment.toString()})
      break;



    default:
        return state;

  }
};

const posts = (state=[],action)=>{
  switch (action.type) {
    case "ADD_POST":
    return state.concat({id:getId(state),title:action.title,summary:action.summary})
      break;
    default:
    return state

  }
}


const comments=(state=[],action)=>{
  switch (action.type) {
    case "ADD_COMMENT":
    console.log("state from add comment",state)
let newState = state.concat({[action.id]:action.comment});
state.comment="";
return newState;
break;
default:
return state;
}
}

const getId = (state) => {

return state.reduce((acc,cur)=> {

  return cur.id>acc ? acc=cur.id : acc

  } , 0 )+1

}



const reducer = combineReducers({postEditor,posts,comments});
export default reducer;
