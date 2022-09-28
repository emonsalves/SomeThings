import React, { useContext } from "react"
import PageLayout from "./layout/PageLayout"
import MyContext from "./Context/MyContext"

function App() {
  const { apiUrl, data, setData } = useContext(MyContext)

  return (
    <div className="App">
      {/* <PageLayout /> */}
      {data.map((dato, index) => (
        <div key={`${dato.name}-${index}`} className="flex flex-col justify-center items-center">
          <h1>{dato.name}</h1>
          <img src={dato.img} alt="" />
          {dato.like && <h2>Like</h2>}
        </div>
      ))}
    </div>
  )
}

export default App
