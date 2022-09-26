import React from "react"

function Button({ btnName, btnAction }) {
  return (
    <button
      onClick={btnAction}
      className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      {btnName}
    </button>
  )
}

export default Button
