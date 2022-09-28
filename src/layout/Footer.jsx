import { useContext } from "react"
import MyContext from "../context/MyContext"

function Footer() {
  const { data } = useContext(MyContext)
  const { apiUrl } = useContext(MyContext)
  const { test } = useContext(MyContext)

  console.log("clg footer" , test)

  return (
    <div className="fixed bottom-0 flex justify-center items-center min-w-full">
      <h1>Footer</h1>
      {data &&
        data.map((dato, index) => (
          <div
            key={`${dato.name}-${index}`}
            className="flex flex-col justify-center items-center"
          >
            <h1>{dato.name}</h1>
            <img src={dato.img} alt="" />
            {dato.like && <h2>Like</h2>}
          </div>
        ))}
    </div>
  )
}

export default Footer
