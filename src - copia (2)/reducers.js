import { combineReducers } from 'redux';






const initialState =
    {

    posts:[]
    
  }





const postEditor = (state =initialState, action) => {
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

const posts = (state=initialState,action)=>{
  switch (action.type) {
    case "ADD_POST":
    return Object.assign({},state,{posts:[{title:action.title,summary:action.summary,id:getId(state.posts)},...state.posts]})
      break;
    case "ADD_COMMENT":
    console.log("comentario desde reducer: ",action.comment)
      return Object.assign({},state,{})

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



const reducer = combineReducers({postEditor,initialState,posts});
export default reducer;
