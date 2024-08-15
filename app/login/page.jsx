import React from "react";

const LoginPage = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center mx-auto mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form action="">
            <div className="mb-4">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" name="" id="" className="input input-bordered w-full" placeholder="theatiq@gmail.com" />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="" id="" className="input input-bordered w-full" placeholder="Enter your password" />
            <button type="submit" className="btn bg-purple-600 text-white w-full rounded-full
            ">LOG IN</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default LoginPage
