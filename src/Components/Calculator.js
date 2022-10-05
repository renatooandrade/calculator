import React, { useState } from 'react'
import './Calculator.css'



function Calculator(props) {

    const [num, setNum] = useState(0)
    const [old, setOld] = useState("")
    const [operator, setOperator] = useState("")

    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value)
        } else {
            setNum(num + e.target.value)
        }
    }

    function clear() {
            setNum(0)
            setOld('')
            setOperator('')       
    }

    function percentual() {
        setNum(num / 100)
    }

    function changeSign() {
        setNum(num * (-1))
    }

    function operatorHandler(e) {
        setOperator(e.target.value)
        setOld(num)
        setNum(0)
    }

    function result() {
        
        if(operator ==="/"){
            setNum(old / num)
        }

        if(operator ==="x"){
            setNum(old * num)
        }

        if(operator ==="-"){
            setNum(old - num)
        }

        if(operator ==="+"){
            setNum(parseFloat(old) + parseFloat(num))
        }
    }

    return (
        <div>
            <div className='container'>
                <p>developed by Renato</p>
                <div className='number'>
                    <h1 className='result'>{num}</h1>
                </div>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={percentual}>%</button>
                <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value={"x"}>X</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                <button className='gray zero' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='orange' onClick={result}>=</button>
            </div>
        </div>
    );
}


export default Calculator