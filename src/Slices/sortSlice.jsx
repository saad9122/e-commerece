



export const sortSliceReducer = (sortValue = '', actions) => {

    switch(actions.type) {
      case 'sort/addValue'  : return actions.payload
      case 'sort/clearSort'  : return ''
      default : return sortValue
}}


export const selectSort = state => state.sort;