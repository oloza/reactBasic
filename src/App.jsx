import Card from './componentes/Card'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items= ["React", "JavaScript", "vite"];

  return (
    <section>
      <h1>hello World</h1>
      <Card title="Card 1" description="Card 1 description" />
      <Card title="Card 2" description="Card 2 description" />
      <ul>
        {items.map((item,index)=>(
          <li key={index}> {item} </li>
        ))}
      </ul>
    </section>
  )
}

export default App
