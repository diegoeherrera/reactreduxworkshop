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
      return Object.assign({},state,{comment:action.comment,comment_id:action.id})

      break;



    default:
        return state;

  }
};

const posts = (state=[],action)=>{
  switch (action.type) {
    case "ADD_POST":
    return {comments:[...state.comments,{[action.id]:action.comment}]}


      break;
    default:
    return state

  }
}


const comments=(state={comments:[]},action)=>{
  switch (action.type) {
    case "ADD_COMMENT":



      break;
    default:
    return state

  }
}

const getId = (state) => {

return state.reduce((acc,cur)=> {

  return cur.id>acc ? acc=cur.id : acc

  } , 0 )+1

}



const reducer = combineReducers({postEditor,posts,comments});
export default reducer;
