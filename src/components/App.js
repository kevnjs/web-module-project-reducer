import React, { useReducer } from 'react';

import reducer, { initialState } from '../reducers'
import './App.css';
import { addOne, applyNumber, CHANGE_OPERATION, CLEAR_DISPLAY } from '../actions'

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickEvent = e => {
    dispatch(applyNumber(e.target.value));
  }

  const operatorChange = e => {
    dispatch({type: CHANGE_OPERATION, payload: e.target.value})
  }

  const clear = () => {
    dispatch({type: CLEAR_DISPLAY})
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => dispatch({type: "SET_MEMORY"})} value={"M+"}/>
              <CalcButton onClick={() => dispatch(applyNumber(state.memory))}value={"MR"}/>
              <CalcButton onClick={() => dispatch({type: "CLEAR_MEMORY"})} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickEvent} value={1}/>
              <CalcButton onClick={clickEvent} value={2}/>
              <CalcButton onClick={clickEvent} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickEvent} value={4}/>
              <CalcButton onClick={clickEvent} value={5}/>
              <CalcButton onClick={clickEvent} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={clickEvent} value={7}/>
              <CalcButton onClick={clickEvent} value={8}/>
              <CalcButton onClick={clickEvent} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={operatorChange} value={"+"}/>
              <CalcButton onClick={operatorChange} value={"*"}/>
              <CalcButton onClick={operatorChange} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
