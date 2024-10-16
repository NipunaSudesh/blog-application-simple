import React from 'react'

 const login = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4 w-full py-2 bg-blue-400'>Login Page</h1>
        {/* {message && <div className={`mb-4 text-center ${isMsgError ?'text-red-500' : 'text-green-500'}`}>{message}
            </div>} */}
        <form className='w-full max-w-sm'>

            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Email</label>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
                // onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="Password">Password</label>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                name='password'
                placeholder='Enter Your Password'
                required
                
                />
            </div>
  
            <div className='flex gap-10 items-center justify-center'>
            <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
            <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            
          >
            Cancal
          </button>
        </div>
        </div>
        <div className='mt-4 text-center'>
        <a 
            
            href='/signup' 
            className='text-blue-500 hover:text-blue-700'
            
            >
            Dont't Have an Account?SignUp
            </a>
          </div>
        </form>
    </div>
    
    </div>

  )
}
export default login;