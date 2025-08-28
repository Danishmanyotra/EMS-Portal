import { useEffect,useState,useContext } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage,getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  },[]);
  
  const [user,setUser]=useState(null);
  const [loggedInUserData,setLoggedInUserData]= useState(null);
  const [userData,setUserData]=useContext(AuthContext);
   
useEffect(()=>{
  const loggedInUser =localStorage.getItem('loggedInUser');
  
  if(loggedInUser) {
    const parsed =JSON.parse(loggedInUser);
    setUser(parsed.role);
    setLoggedInUserData(parsed.data || null);
  }


},[])

  const handleLogin=(email,password) =>{
     if(email === 'admin@me.com' && password === '123') {
     setUser('admin');
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',
      data:{firstName:'Admin',email:'admin@me.com'}
     }));
    //  console.log(user);
}
     else if(userData){
      const employee= userData.find((e)=>e.email === email && e.password === password);
      if(employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
      }
      
      // console.log(user);
}
else {
  alert("Invalid Credentials");
}
  }

  
// handleLogin('user@me.com','123');
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin'? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
