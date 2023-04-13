// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {

  /* MAIN EXERCISE: PERSISTENT STATE USING USEEFFECT */
  /*
  const [name, setName] = React.useState(window.localStorage.getItem('name') ?? initialName);

  React.useEffect(() => { 
    window.localStorage.setItem('name', name); 
  })

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
  */

  /* EXTRA CREDIT #1: LAZY STATE INITIALIZATION */
  /*
  function lazyStateInitialization() { 
    return window.localStorage.getItem('name') ?? initialName; 
  }
  const [name, setName] = React.useState(lazyStateInitialization);

  React.useEffect(() => { 
    window.localStorage.setItem('name', name); 
  })

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
  */

  /* EXTRA CREDIT #2: ARRAY DEPENDENCIES TO CONTROL EFFECT DEPLOYMENT */
  /*
  function lazyStateInitialization() { 
    return window.localStorage.getItem('name') ?? initialName; 
  }
  const [name, setName] = React.useState(lazyStateInitialization);

  // localStorage is updated only when 'name' changes
  React.useEffect(() => { 
    window.localStorage.setItem('name', name); 
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
  */

  /* EXTRA CREDIT #3: CUSTOM HOOK */
  /*
  function useLocalStorageState(key, initialValue) { 
    function lazyStateInitialization() { 
      return window.localStorage.getItem(key) ?? initialValue; 
    };

    const [state, setState] = React.useState(lazyStateInitialization);

    React.useEffect(() => { 
      window.localStorage.setItem(key, state); 
    }, [key, state]); 

    return [state, setState]; 
  }; 

  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
  */

  /* EXTRA CREDIT #4: FLEXIBLE CUSTOM HOOK */
  function useLocalStorageState(
    key, 
    initialValue, 
    { 
      serialize = JSON.stringify, 
      deserialize = JSON.parse, 
    } = {}
    ) { 
    function lazyStateInitialization() { 
      const localStorageVal = window.localStorage.getItem(key); 
      if (localStorageVal) { 
        // try/catch in case localStorage value was set before we had the serialization in place
        try { 
          return deserialize(localStorageVal)
        } catch (e) { 
          window.localStorage.removeItem(key) 
        }
      }
      return typeof initialValue === 'function' ? initialValue() : initialValue; 
    };

    const [state, setState] = React.useState(lazyStateInitialization);

    const prevKeyRef = React.useRef(key); 

    React.useEffect(() => { 
      const prevKey = prevKeyRef.current; 
      if (prevKey !== key) { 
        window.localStorage.removeItem(prevKey); 
      }
      prevKeyRef.current = key; 
      window.localStorage.setItem(key, serialize(state)); 
    }, [key, state, serialize]); 

    return [state, setState]; 
  }; 

  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )

}

function App() {
  return <Greeting />
}

export default App
