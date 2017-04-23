
export function titleChange (title){
  dispatch=>{
    dispatch({
      type:'actionTypes.TITLE_CHANGE',
      title:title
    })
  }
};
