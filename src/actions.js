

export function titleChange (title) {
  console.log("desde actions title change: ")
  return dispatch => {
    dispatch({
      type: "TITLE_CHANGE",
      title:title
    });
  };
};

export function summaryChange(summary){
  return dispatch=>{
    dispatch({
      type:"SUMMARY_CHANGE",
      summary:summary
    })
  }
}

export function addPost(title,summary){

console.log("title: ",title,"summary: ",summary )
  return dispatch=>{
    dispatch({
      type:"ADD_POST",
      title:title,
      summary:summary
    })
  }
}

export function addComment(comment,id){
    console.log("from action comment: ",comment , "id: ", id)
  return dispatch=>{
    dispatch({
      type:"ADD_COMMENT",
      comment:comment,
      id:id
    })
    return comment="";
  }
}

export function commentChange(comment,id){

  console.log("from action comment change: ",comment , "id: ", id)
  return dispatch=>{
    dispatch({
      type:"COMMENT_CHANGE",
      comment:comment,
      id:id

    })
  }
}
