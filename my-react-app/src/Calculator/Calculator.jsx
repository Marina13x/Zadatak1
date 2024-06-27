import { useState } from "react";
import addImage from '../assets/plus.png';
import subtractImage from '../assets/minus.png';
import multiplyImage from '../assets/multiple.png';
import divideImage from '../assets/division.png';
import './Calculator.css';

function Calculator () {

    const[num1, setNum1] = useState('');
    const[num2, setNum2] = useState('');
    const[result, setResult] = useState('');

    const handleAddition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    }

    const handleSubtraction = () => {
        setResult(parseFloat(num1)-parseFloat(num2));
    }

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    } 

    const handleDivision = () => {
        setResult(parseFloat(num1)/parseFloat(num2));
    }

    return(
        <div className="calculator-container">
        <div className="calculator">
          <h1>Calculator:</h1>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
          />
      
         
            <div className="first-column">
                <img src={addImage} alt="Add" onClick={handleAddition} />
                <img src={multiplyImage} alt="Multiply" onClick={handleMultiplication} />
            </div>

            <div className="second-column">
                <img src={subtractImage} alt="Subtract" onClick={handleSubtraction} />
                <img src={divideImage} alt="Divide" onClick={handleDivision} />
            </div>
          
          {result !== null && <h2>Result: {result}</h2>}
        </div>
        
      </div>
      
   
    );

}

export default Calculator;