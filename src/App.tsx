import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <header className="App-header">
            <h1>Focus-Links (typeScript edition)</h1>
          </header>
        </div>
      </div>
      <div id="app-row" className="row">
        <div className="col-3 project-div bg-orange-dark text-orange-bright" id="project-001">
          <h2>Project: Focus-Links</h2>
          <p>
            A simple React App for keeping things simple.
            Displays a to-do list separated by projects</p>
          <div id="todo-div-001">
            <input className="form-check-input" id="todo-cb-001" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-001">Task 1</label>
          </div>
          <div id="todo-div-002">
            <input className="form-check-input" id="todo-cb-002" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-002">Task 2</label>
          </div>
          <div id="todo-div-003">
            <input className="form-check-input" id="todo-cb-003" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-003">Task 3</label>
          </div>
          <div id="todo-div-004">
            <input className="form-check-input" id="todo-cb-004" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-004">Task 4</label>
          </div>
          <ul className="list-inline">
            <h4>tags:</h4>
            <li className="list-inline-item">react</li>
            <li className="list-inline-item">typescript</li>
            <li className="list-inline-item">bootstrap</li>
          </ul>
        </div>
        <div className="col-3 project-div bg-blue-dark text-blue-bright" id="project-002">
          <h2>Project: Trivial Endeavor</h2>
          <p>A trivia game.</p>
          <div id="todo-div-005">
            <input className="form-check-input" id="todo-cb-005" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-005">Task 5</label>
          </div>
          <div id="todo-div-006">
            <input className="form-check-input" id="todo-cb-006" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-006">Task 6</label>
          </div>
          <div id="todo-div-007">
            <input className="form-check-input" id="todo-cb-007" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-007">Task 7</label>
          </div>
          <div id="todo-div-008">
            <input className="form-check-input" id="todo-cb-008" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-008">Task 8</label>
          </div>
          <div id="todo-div-009">
            <input className="form-check-input" id="todo-cb-009" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-009">Task 9</label>
          </div>
          <div id="todo-div-010">
            <input className="form-check-input" id="todo-cb-010" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-010">Task 10</label>
          </div>
          <div id="todo-div-011">
            <input className="form-check-input" id="todo-cb-011" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-011">Task 11</label>
          </div>
        </div>
        <div className='col-3 project-div bg-green-dark text-green-bright' id="project-003">
          <h2>Project: X12-Parse</h2>
          <p>A parser for X12 EDI files.</p>
          <div id="todo-div-012">
            <input className="form-check-input" id="todo-cb-012" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-012">Task 12</label>
          </div>
          <div id="todo-div-013">
            <input className="form-check-input" id="todo-cb-013" type="checkbox" />
            <label className="form-check-label" htmlFor="todo-cb-013">Task 13</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
