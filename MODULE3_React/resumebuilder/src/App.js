import "./App.css";
import Counter from "./Component/Counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;

// const { createStore } = Redux;

// const initialState = {
//   todos:[],
//   posts:[]
// }

// // Reducer
// function myReducer( state = initialState , action ){
//   // console.log(state);
//   // console.log(action);
//   if(action.type == "ADD_TODO"){
//     return {
//       ...state,
//       todos:[...state.todos , action.todo]
//     }
//   }
//   return state;
// }



// // store/central state
// const store = createStore(myReducer);

// store.subscribe( ()=>{
//   console.log("state updated");
//   console.log(store.getState());
// })

// // dispatch
// store.dispatch( {type:"ADD_TODO" , todo:"Learn Css !"})