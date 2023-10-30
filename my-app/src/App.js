import './App.css';
import './Content.css'
import HeaderPage from './Components/HeaderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import LogIn from './Components/Auth/LogIn';
import SignUp from './Components/Auth/SignUp';
import axios from 'axios';
import Detailpage from './Components/Detailpage';
import CatDetail from './Components/CatDetail';
import CreateBlog from './Components/CreateBlog';
import EditBlog from './Components/EditBlog';


export const newcontext = createContext()

function App() {

  const [Firstname, SetFname] = useState("");
  const [Secoundname, SetSname] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const [BlogData, SetBlogData] = useState([])

  const [Name,SetBlogName] = useState("");
  const [Catagories,SetCategories] = useState("");
  const [Images,SetImage] = useState("");
  const [Discription,SetDiscription] = useState("");


  

  const GetBlogdata = () => {
    axios.get('http://localhost:5005/getblog')
      .then((res) => {
        SetBlogData(res.data)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    GetBlogdata()
  },[])


  return (
    <div>
      <newcontext.Provider value={[BlogData, SetBlogData,Name,SetBlogName,Images,SetImage,Discription,SetDiscription,Catagories,SetCategories]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogIn/>}></Route>
            <Route path='/signup' element={<SignUp Firstname={Firstname} SetFname={SetFname} Secoundname={Secoundname} SetSname={SetSname} Email={Email} SetEmail={SetEmail} Password={Password} SetPassword={SetPassword} />}></Route>
            <Route path='/userhome' element={<HeaderPage />}></Route>
            <Route path='/userhome/:id' element={<Detailpage />}></Route>
            <Route path='/create' element={<CreateBlog/>}></Route>
            <Route path='/edit/:id' element={<EditBlog/>}></Route>
            <Route path='/userdata/:Catagories' element={<CatDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </newcontext.Provider>
      
    </div>
  );
}

export default App;
