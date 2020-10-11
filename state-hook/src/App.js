import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOneEffect from './components/HookCounterOneEffect';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC'
import CounterOneReducer from './components/CounterOneReducer';
import CounterTwoReducer from './components/CounterTwoReducer';
import CounterThreeReducer from './components/CounterThreeReducer';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
// import ComponentAReducerContext from './components/ComponentAReducerContext';
// import ComponentBReducerContext from './components/ComponentBReducerContext';
// import ComponentCReducerContext from './components/ComponentCReducerContext';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
      {/* <FocusInput /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}

    </div>
  );


  // const [count, dispatch] = useReducer(reducer, initialState)

  // return (
  //   <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
  //     <div className="App">
  //       Count - {count}
  //       <ComponentAReducerContext />
  //       <ComponentBReducerContext />
  //       <ComponentCReducerContext />

  //     </div >
  //   </CountContext.Provider>

  //     {/* <CounterThreeReducer /> */ }
  // {/* <CounterTwoReducer /> */ }
  // {/* <CounterOneReducer /> */ }

  // {/* <UserContext.Provider value={'Tushar'} >
  //       <ChannelContext.Provider value={'Sahu'}>
  //         <ComponentC />
  //       </ChannelContext.Provider>
  //     </UserContext.Provider> */}

  // {/* <DataFetching /> */ }
  // {/* <IntervalClassCounter />
  //     <IntervalHookCounter /> */}
  // {/* <MouseContainer /> */ }
  // {/* <HookMouse /> */ }
  // {/* <ClassMouse /> */ }
  // {/* <HookCounterOneEffect /> */ }
  // {/* <ClassCounterOne /> */ }
  // {/* <HookCounterFour /> */ }
  // {/* <HookCounterThree /> */ }
  // {/* <HookCounterTwo /> */ }
  // {/* <ClassCounterTwo /> */ }
  // {/* <HookCounter /> */ }
  // {/* <ClassCounter /> */ }

  // );
}

export default App;
