import React from 'react';
import FormikUserForm from './component/UserForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Form</h1>
      </header>

      <FormikUserForm  />
    </div>
  );
}

export default App;
