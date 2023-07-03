import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {

  const [clicksNumber, setNumClicks] = useState(0)

  const clickHandler = () => {
    setNumClicks(clicksNumber + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Welcome to <code>Click Counter</code> React-App.
        </p>
      </header>
      <div className='main-container'>
        <Counter clicksNumber={clicksNumber} />

        <Button
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler} />
        <Button
          text='Reset'
          isClickButton={false}
          clickHandler={resetCounter} />
      </div>
    </div>
  );
}

export default App;
