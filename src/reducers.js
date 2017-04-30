import { combineReducers } from 'redux';


const initialStateEditor = {
  id:'',
  title: '',
  summary: '',
  votes:'',
  comments:[""]
};

const getId=(state)=>{

return state.reduce((acc,cur)=>{

  return cur.id>acc ? acc=cur.id : acc

},0)+1

}


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


const handleComments =(state={comments:[""]},action)=>{
    switch (action.type) {
      case "COMMENT_CHANGE":
      return Object.assign({},state,{comments:[action.comment]})
      break;
      case "ADD_COMMENT":
      return state.comments.concat(action.comment,...state.comments)

      default:
      return state

    }
}



const posts = (state = [], action) => {
  switch(action.type) {
    case "ADD_POST":
      return [
        Object.assign({}, action.post, {id:getId(state),votes:"",comments:[]}), ...state
      ]

      break;
    default:
      return state;
  }
};



const reducer = combineReducers({editor,posts,handleComments});
export default reducer;
