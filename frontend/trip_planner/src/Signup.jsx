import signup from  "./signup.jpg" 
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup(){
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Use Axios for making the POST request
      const response = await axios.post('http://localhost:3000/signup', data);

      // Handle the response from the backend
      console.log(response.data);

      // Redirect to the login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  }
    return(
        <>
    
<div class="bg-gray-100 flex justify-center items-center h-screen">
    
<div class="w-1/2 h-screen hidden lg:block">
  <img src={signup} alt="Placeholder Image" class="object-cover w-full h-full"/>
</div>

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Sign up</h1>
  <form onSubmit={handleSubmit}>
    
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
    </div>
    
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
  
    
   
    
    <button type="submit" class="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign in</button>
  </form>
  
  <div class="mt-6 text-blue-500 text-center">
    <a href="/login" class="hover:underline">login Here</a>
  </div>
</div>
</div>
        </>
    )
}
export default Signup