

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
