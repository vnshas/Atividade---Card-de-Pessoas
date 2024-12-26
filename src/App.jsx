import { StudentCard } from "./components/StudentCard"

function App() {
  

  return (
    <>
      <StudentCard name="Alex" age={33} country="Brazil"/>
      <StudentCard name="Jhon" age={25}country="USA"/>
      <StudentCard name="Juan Pablo" age={52} country="Spain"/>
    </>
  )
}

export default App
