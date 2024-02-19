import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Calculadora</h1>
    <div class="zeca">
        <h3 id="t">Escolha os horários em que deseja calcular!</h3>
        <input type="number" id="timestart" placeholder="Hora Inicial">&nbsp;  :&nbsp;
        <input type="number" id="minutestart" placeholder="Minuto Inicial"/><br/>
        <input type="number" id="finaltime" placeholder="Hora Final">&nbsp;  :&nbsp;
        <input type="number" id="finalminute" placeholder="Minuto Final"><br>
        <button onclick="soma()">Soma</button>
        <button onclick="sub()">Diferença</button>
        <h3 id="r">Resultado</h3>
    </div>
  
    </>
  )

}
export default App
