
import './App.css'
import Card from './Components/Card'
import Saludo from './Components/Saludo'


function App() {
  

  return (
    <>
    <h1>Bienvenido!!</h1>
    <Card title= "ejemplo 1" text='este es parte del primer ejemplo'/>
    <Card title= "ejemplo 2" text='este es parte del segundo ejemplo'/>
    <hr />
    <h2>reutilizando las card y usando children</h2>
    
    <Card title ='ejemplo de children' text='asi se usan los children'>
      <h4>primer children</h4>
      <h4>segundo children</h4>
    </Card>
    <hr />
    <Card title ='ejemplo de children numero 2' text='asi se usan los children'>
      <h4>primer children</h4>
      <h4>segundo children</h4>
    </Card>
    <Saludo text ='juan' />
    </>  
    
  )
}

export default App
