import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5">Welcome to DaisyUI</h1>
          <p className="text-gray-600 mb-2">Buttons</p>
        <div className="mb-4 flex gap-5">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Alerts</p>
          <div className="alert alert-success text-white font-bold">Success</div>
          <br />
          <div className="alert alert-error text-white font-bold">Error</div>
        </div>
      <div className="mb-4">
        <p className="text-gray-400 mb-2 ">Forms</p>
        <div className="form-control">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" className="input input-bordered"/>
        </div>

        <div className="mb-4">
          <p className="card p-4"></p>
            <h2 className="text-xl font-semibold">Card Titles</h2>
            <p className="text-gray-600 mt-2">Card content goes here</p>
          

        </div>
      </div>
      </div>
    </div>
  )
}

export default Home