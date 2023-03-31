// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  /* MAIN EXERCISE: FORM SUBMISSION HANDLING */
  /*
  function handleSubmit(event) { 
    event.preventDefault(); 
    const username = event.target.elements.usernameInput.value;
    onSubmitUsername(username);  
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor='usernameInput'
        >Username:</label>
        <input 
          id='usernameInput'
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */


  /* EXTRA CREDIT 1: USING REFS IN FORM SUBMISSION HANDLING */
  /*
  const usernameInputReference = React.useRef();
  
  function handleSubmit(event) { 
    event.preventDefault(); 
    console.log(usernameInputReference.current.value)
    onSubmitUsername(usernameInputReference.current.value);  
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor='usernameInput'
        >Username:</label>
        <input 
          id='usernameInput'
          type="text"
          ref={usernameInputReference}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  */


  /* EXTRA CREDIT 2: DYNAMIC VALIDATION FOR LOWER-CASE CHARACTERS */
  /*
  const [error, setError] = React.useState(null); 

  function handleSubmit(event) { 
    event.preventDefault(); 
    const username = event.target.elements.usernameInput.value;
    onSubmitUsername(username);  
  };

  function handleChange(event) { 
    const currentInput = event.target.value; 
    const isLowerCaseInput = currentInput === currentInput.toLowerCase(); 
    setError(isLowerCaseInput ? null : 'Username must be lower-case');
  }; 

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor='usernameInput'
        >Username:</label>
        <input 
          id='usernameInput'
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>{error ? error : ''}</div>
      <button type="submit" disabled={error ? true : false}>Submit</button>
    </form>
  )
*/


  /* EXTRA CREDIT 3: PROGRAMMATICALLY CONTROL THE VALUE OF A FORM INPUT */
  const [validatedInput, setValidatedInput] = React.useState(); 

  function handleSubmit(event) { 
    event.preventDefault(); 
    onSubmitUsername(validatedInput);  
  };

  function handleChange(event) { 
    const unvalidatedInput = event.target.value; 
    setValidatedInput(unvalidatedInput.toLowerCase()); 
  }; 

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor='usernameInput'
        >Username:</label>
        <input 
          id='usernameInput'
          type="text"
          value={validatedInput}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
