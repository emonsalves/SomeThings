import { useState, useEffect } from "react"
import MyContext from "./MyContext"

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const apiUrl = "https://digimon-api.vercel.app/api/digimon"

  const getData = async (apiUrl) => {
    const data = await fetch(apiUrl).then((res) => res.json())
    const data2 = await data.map((x) => ({ ...x, like: false }))
    setData(data2)
    console.log(data2)
  }

  useEffect(() => {
    getData(apiUrl)
  }, [])

  return (
    <MyContext.Provider value={{ data, setData, apiUrl }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
