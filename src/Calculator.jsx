import {useState} from 'react'
import {Table} from 'react-bootstrap'
import {create,all} from 'mathjs'

const Calculator = () => {
  const [value,setValue]=useState([])
  const [calculate,setCalculate]=useState([])
  const [answer,setAnswer] = useState("")
  const math = create(all,{})

  const handleCalc =()=>{
   setAnswer(math.compile(calculate.join("")).evaluate())
   setCalculate([math.compile(calculate.join("")).evaluate()])
   setValue([])
  }
     return (
          <div className="container" >
          <Table bordered className="border-dark fw-bold fs-5 mb-0" variant="dark" style={{height:"600px",width:"330px"}}>
          <tbody>
          <tr>
          <td colSpan={5} className="fs-1 text-end" style={{height:"50px"}}>{answer}</td>
          </tr>
                    <tr>
          <td colSpan={5} className="text-end fs-1" style={{height:"50px"}}>{value}</td>
          </tr>
                    <tr>
          <td className="bg-danger mx-3 align-middle p-0" onClick = {()=>(setValue([]),
          setCalculate([]),
          setAnswer()
          )}>AC</td>
          <td className="table-secondary align-middle fs-1 p-0" onClick = {()=>(setValue([...value,"÷"]),
          setCalculate([...calculate,"/"])
          )}>÷</td>
          <td className="table-secondary align-middle fs-1 p-0" onClick = {()=>(setValue([...value,"×"]),
          setCalculate([...calculate,"*"])
          )}>x</td>
          <td className="align-middle fs-1 p-0 table-danger" onClick = {()=>(setValue(value.slice(0,-1)),
          setCalculate(calculate.slice(0,-1))
          )}><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="1.2em" width="1.1em"><path fill="currentColor" d="M18.05 38q-1.1 0-2-.575-.9-.575-1.55-1.475l-7.25-10.2q-.55-.8-.55-1.75t.55-1.75l7.25-10.2q.65-.9 1.55-1.475.9-.575 2-.575h21q1.25 0 2.125.875T42.05 13v22q0 1.25-.875 2.125T39.05 38Zm3.3-7.4q.45.45 1.075.45t1.075-.45l4.5-4.5 4.55 4.55q.45.45 1.05.45.6 0 1.05-.45.45-.45.45-1.075t-.45-1.075L30.1 24l4.5-4.5q.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.075-.45t-1.075.45L28 21.9l-4.55-4.55q-.45-.45-1.05-.425-.6.025-1.05.425-.45.45-.45 1.075t.45 1.075L25.9 24l-4.55 4.5q-.4.45-.4 1.075t.4 1.025Z"/></svg></td>
          </tr>
                    <tr>
          <td className="table-number align-middle align-middle" onClick = {()=>(setValue([...value,7]),
          setCalculate([...calculate,7])
          )}>7</td>
          <td className="table-number align-middle align-middle" onClick = {()=>(setValue([...value,8]),
          setCalculate([...calculate,8])
          )}>8</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,9]),
          setCalculate([...calculate,9])
          )}>9</td>
          <td className="table-secondary align-middle fs-1 p-0" onClick = {()=>(setValue([...value,"+"]),
          setCalculate([...calculate,"+"])
          )}>+</td>
          
          </tr>
          <tr>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,4]),
          setCalculate([...calculate,4])
          )}>4</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,5]),
          setCalculate([...calculate,5])
          )}>5</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,6]),
          setCalculate([...calculate,6])
          )}>6</td>
          <td className="table-secondary align-middle fs-1 fw-bolder p-0" onClick = {()=>(setValue([...value,"-"]),
          setCalculate([...calculate,"-"])
          )}>-</td>
          </tr>
                    <tr>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,1]),
          setCalculate([...calculate,1])
          )}>1</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,2]),
          setCalculate([...calculate,2])
          )}>2</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,3]),
          setCalculate([...calculate,3])
          )}>3</td>
          <td rowSpan={0} className="table-primary align-middle fs-1 fw-bolder p-0" onClick={handleCalc}>=</td>
          </tr>
                    <tr>
          <td className="align-middle" id="module" onClick = {()=>(setValue([...value,"%"]),
          setCalculate([...calculate,"%"])
          )}>%</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,0]),
          setCalculate([...calculate,0])
          )}>0</td>
          <td className="table-number align-middle" onClick = {()=>(setValue([...value,"."]),
          setCalculate([...calculate,"."])
          )}>.</td>
          </tr>
          </tbody>
          </Table>
          <footer className="fw-bold">Designed by Israel Johnson</footer>
          </div>
          )
}

export default Calculator