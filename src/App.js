import { useState } from 'react';
import './App.scss';
import './scss/Blue.scss';
import './scss/White.scss';
import './scss/Red.scss';
import './scss/Form.scss';
import './scss/Responsive.scss';

function App() {
  const [value, setValue] = useState('');
  const [theme, setTheme] = useState("blue")

  const handleSubmit =(e) => {
    e.preventDefault();
  }
  
  
  return (
    <div className="App" id={theme} value='blue'>
      <div className="calculator">
        <form id={theme} onSubmit={handleSubmit}>
          <div className="calcTheme">
            <p>calc</p>
            <div className="theme">
              <p>theme</p>
              <div className="inps">
                <div className="item">
                  <label htmlFor="blue">1</label>
                  <input type="radio" id='blue' name='theme' value='blue' onChange={e => setTheme("blue")} />
                </div>
                <div className="item">
                  <label htmlFor="white">2</label>
                  <input type="radio" id='white' name='theme' value='white' onChange={e => setTheme("white")}/>
                </div>
                <div className="item">
                  <label htmlFor="red">3</label>
                  <input type="radio" id='red' name='theme' value='red' onChange={e => setTheme("red")}/>
                </div>
              </div>
            </div>
          </div>
          <div className="display">
            <input type="text" value={value}/>
          </div>

          <div className="calcBtns">
            <input type="button" value='7' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='8' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='9' onClick={(e) => setValue(value + e.target.value)} />
            <input className='del' type="button" value='del' onClick={e => setValue(value.slice(0, -1))}/>
            <input type="button" value='4' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='5' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='6' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='+' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='1' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='2' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='3' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='-' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='.' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='0' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='/' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='*' onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value='reset' className='reset' onClick={e => setValue('')}/>
            <input type="button" value='=' className='equal' onClick={e => setValue(eval(value))}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
