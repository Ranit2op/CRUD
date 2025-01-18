import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleClick = (label: string): void => {
    if (label === '=') {
      try {
        setValue(eval(value).toString()); // Evaluate expression
      } catch {
        setValue('Error');
      }
    } else if (label === 'C') {
      setValue(''); // Clear display
    } else {
      setValue(value + label); // Append label to value
    }
  };

  const buttons: string[] = [
    '+', '-', '*', '/',
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', 'C', '='
  ];

  return (
    <div className="calculator">
      <Display value={value} />
      <div className="calc-buttons">
        {buttons.map((btn, idx) => (
          <Button key={idx} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;












// import React, { useState } from 'react';
// import './Calculator.css';

//     const Calculator: React.FC = () => {
//     const [num1, setNum1] = useState('');
//     const [num2, setNum2] = useState('');
//     const [operation, setOperation] = useState('');
//     const [result, setResult] = useState<number | string | null>(null);
//     const [loading, setLoading] = useState(false);

//     const handleCalculate = () => {
//         if (num1 === '' || num2 === '' || operation === '') {
//             alert('Please enter both numbers and select an operation.');
//             return;
//         }

//         setLoading(true);
//         setTimeout(() => {
//             const number1 = parseFloat(num1);
//             const number2 = parseFloat(num2);
//             let res: number | string = 0;

//             switch (operation) {
//                 case '+':
//                     res = number1 + number2;
//                     break;
//                 case '-':
//                     res = number1 - number2;
//                     break;
//                 case '*':
//                     res = number1 * number2;
//                     break;
//                 case '/':
//                     res = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
//                     break;
//                 default:
//                     res = 'Invalid operation';
//             }

//             setResult(res);
//             setLoading(false);
//         }, 3000);
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>React Calculator</h1>
//             <input
//                 type="number"
//                 placeholder="First Number"
//                 value={num1}
//                 onChange={(e) => setNum1(e.target.value)}
//                 style={{ margin: '10px', padding: '10px' }}
//             />
//             <input type="number"  placeholder="Second Number"  value={num2} onChange={(e) => setNum2(e.target.value)}style={{ margin: '10px', padding: '10px' }}  />
//             <div>
//                 <button onClick={() => setOperation('+')}>+</button>
//                 <button onClick={() => setOperation('-')}>-</button>
//                 <button onClick={() => setOperation('*')}>*</button>
//                 <button onClick={() => setOperation('/')}>/</button>
//             </div>
//             <button onClick={handleCalculate} style={{ margin: '20px', padding: '10px' }}>
//                 Calculate
//             </button>
//             {loading ? (
//                 <p>Loading... Please wait</p>
//             ) : result !== null ? (
//                 <p>Result: {result}</p>
//             ) : null}
//         </div>
//     );
// };

// export default Calculator;







// import React, { useState } from 'react';

// const Calculator: React.FC = () => {
//   const [input1, setInput1] = useState<number | string>('');
//   const [input2, setInput2] = useState<number | string>('');
//   const [result, setResult] = useState<number | string>('');
//   const [isCalculating, setIsCalculating] = useState<boolean>(false);

//   const handleCalculation = (operation: string) => {
//     const num1 = parseFloat(input1 as string);
//     const num2 = parseFloat(input2 as string);

//     if (isNaN(num1) || isNaN(num2)) {
//       setResult('Invalid Input');
//       return;
//     }

//     setIsCalculating(true);
//     setResult('calculating Please wait a moment...');

//     setTimeout(() => {
//       let calculationResult: number | string;

//       switch (operation) {
//         case '+':
//           calculationResult = num1 + num2;
//           break;
//         case '-':
//           calculationResult = num1 - num2;
//           break;
//         case '*':
//           calculationResult = num1 * num2;
//           break;
//         case '/':
//           calculationResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//           break;
//         default:
//           calculationResult = 'Invalid Operation';
//       }

//       setIsCalculating(false);
//       setResult(calculationResult);
//     }, 3000);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h2>Basic Calculator</h2>
//       <input type="text" placeholder="Enter Your first number" value={input1} onChange={(e) => setInput1(e.target.value)}  />
//       <input type="text" placeholder="Enter Your second number" value={input2} onChange={(e) => setInput2(e.target.value)}  />
//       <div style={{ margin: '10px' }}>
//         <button onClick={() => handleCalculation('+')} disabled={isCalculating}> + </button>
//         <button onClick={() => handleCalculation('-')} disabled={isCalculating}> - </button>
//         <button onClick={() => handleCalculation('*')} disabled={isCalculating}> * </button>
//         <button onClick={() => handleCalculation('/')} disabled={isCalculating}> / </button>
//       </div>
//       <h3>{result}</h3>
//     </div>
//   );
// };

// export default Calculator;
