import React, { useState } from "react";
import { Button, Buttons, Container, Result, TextButton, TextOperation, TextResult} from "./styles";

export function Calculadora(){
  const buttons = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','+/-','='];  

  const [lastNumber, setLastNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  function handleInput(buttonPressed: string){
    if(buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/'){
      setCurrentNumber(currentNumber + "" + buttonPressed + "");
      return
    }
    if(buttonPressed === 'AC'){
      setLastNumber('');
      setCurrentNumber('');
      return
    }
    if(buttonPressed === 'DEL'){
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length-1)));
      return
    }
    if(buttonPressed === '.'){
      setCurrentNumber(currentNumber + buttonPressed);
      return
    }
    if(buttonPressed === '='){
      setLastNumber(currentNumber + "=");
      calculator();
      return
    }
    if(buttonPressed === '+/-'){
      return
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  function calculator(){
    const splitNumbers = currentNumber.split('');
    const firstNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        return
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        return
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString());
        return
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString());
        return
    }
  }


  return(
    <Container>
      <Result>
        <TextOperation> {lastNumber} </TextOperation>
        <TextResult> {currentNumber} </TextResult>
      </Result>

      <Buttons>
        {buttons.map(button => <Button onPress={() => handleInput(button)} key={button}><TextButton>{button}</TextButton></Button>)}        
      </Buttons>
    </Container>
  );
}