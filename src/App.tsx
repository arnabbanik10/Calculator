import './App.css'

function App() {
    let displayValue = '0';

    function updateDisplay() {
      const displayElement = document.getElementById('display');
    if(displayElement)
      displayElement.textContent = displayValue;
    }

    function appendNumber(number:any) {
      if (displayValue === '0') {
        displayValue = number;
      } else {
        displayValue += number;
      }
      updateDisplay();
    }

    function appendOperator(operator:any) {
      displayValue += operator;
      updateDisplay();
    }

    function calculate() {
      try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
      } catch (error) {
        displayValue = 'Error';
        updateDisplay();
      }
    }

    function clearDisplay() {
      displayValue = '0';
      updateDisplay();
    }  
 
  return (
    <div>
        <div className="calculator">
    <div className="display" id="display">0</div>
    <div className="buttons">
      <button onClick={() => appendNumber('7')}>7</button>
      <button onClick={() => appendNumber('8')}>8</button>
      <button onClick={() => appendNumber('9')}>9</button>
      <button className="operator" onClick={() => appendOperator('/')}>÷</button>
      <button onClick={() => appendNumber('4')}>4</button>
      <button onClick={() => appendNumber('5')}>5</button>
      <button onClick={() => appendNumber('6')}>6</button>
      <button className="operator" onClick={() => appendOperator('*')}>x</button>
      <button onClick={() => appendNumber('1')}>1</button>
      <button onClick={() => appendNumber('2')}>2</button>
      <button onClick={() => appendNumber('3')}>3</button>
      <button className="operator" onClick={() => appendOperator('-')}>-</button>
      <button onClick={() => appendNumber('0')}>0</button>
      <button onClick={() => appendNumber('.')}>.</button>
      <button className="clear" onClick={() => clearDisplay()}>C</button>
      <button className="operator" onClick={() => appendOperator('+')}>+</button>
      <button className="operator" onClick={() => calculate()} style={{display: 'flex'}}>=</button>
    </div>
  </div>
    </div>
  )
}

export default App
