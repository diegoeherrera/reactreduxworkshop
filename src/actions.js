

export function titleChange (title) {
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

export function addPost(post){
  return dispatch=>{
    dispatch({
      type:"ADD_POST",
      post:post
    })
  }
}

export function addComment(comment,id){
  return dispatch=>{
    dispatch({
      type:"ADD_COMMENT",
      comment:comment,
      id:id
    })
  }
}

export function commentChange(comment,id){
  console.log("comment: ",comment , "id: ", id)

  return dispatch=>{
    dispatch({
      type:"COMMENT_CHANGE",
      comment:comment,
      id:id

    })
  }
}
