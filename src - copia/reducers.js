import { combineReducers } from 'redux';


const initialStateEditor = {
  id:'',
  title: '',
  summary: '',
  votes:'',
  comments:''
};

const initialComments={
  id:'',
  comments:[]

}



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


const handleComments = (state=initialComments ,action) => {
    switch (action.type) {
      case "COMMENT_CHANGE":
      return Object.assign({},state,{comments:action.comment})
      break;
      case "ADD_COMMENT":
      console.log(state.comments)
      return  Object.assign({}, state, {comments:"action.comment"})

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
