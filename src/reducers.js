import { combineReducers } from 'redux';



const initialStateEditor = [
  {
  id:'0',
  title:'',
  summary:'',
  votes:'',
  comments:[]
}

]









const getId=(state)=>{

return state.reduce((acc,cur)=>{

  return cur.id>acc ? acc=cur.id : acc

},0)+1

}


const editor =(state = initialStateEditor,action)=>{
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


const handleComments = (state= initialStateEditor, action) => {
    switch (action.type) {
      case "COMMENT_CHANGE":

      return state.map((p)=>{
        console.log("adentro del map: ",p.id)
        if(p.id==action.id){
          return p.comments.concat(action.comment)
        }
        return state
      })
      break;
      case "ADD_COMMENT":
      console.log(state.comments)
      return state.map((p)=>{

            if(p.id==action.id){
              console.log("id p:"+p.id+"id action: "+action.id)
              return p.comments.concat(...state,action.comment)
            }
            return state
          })

      default:
      return state

    }
}



const posts = (state = [], action) => {
  switch(action.type) {
    case "ADD_POST":
      return [
        Object.assign({}, state, {id:getId(state),title:action.post.title,summary:action.post.summary,votes:'',comments:[]}), ...state
      ]

      break;
    default:
      return state;
  }
};



const reducer = combineReducers({editor,posts,handleComments});
export default reducer;
