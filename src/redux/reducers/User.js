const INITIAL_STATE = {
    message : 'This message is from user reducer',
    isLoggedIn : localStorage.getItem('isAuth') ? true : false,
}
  
export default function UserReducer(state = INITIAL_STATE, action){
    //console.log(action);
  
    switch(action.type)
    {
      case  'change_message':{
        return {...state,message: action.message}
      }
      
      case  'do_login':{
        return {...state,isLoggedIn: action.val}
      }
  
      case  'do_logout':{
        return {...state,isLoggedIn: action.val}
      }
    }
  
    return state;
  
}