import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword'
import Offers from './Pages/Offers';
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./Pages/CreateListing";
import EditListing from "./Pages/EditListing";
import Listing from "./Pages/Listing";
import Category from "./Pages/Category";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path ="/offers" element={<Offers/>}/>
        <Route path="/category/:categoryName" element={<Category />} />        
        <Route path ="/signin" element={<Signin/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />


        <Route path="/profile" element ={<PrivateRoute/>}>
        <Route path ="/profile" element={<Profile/>}/>
        </Route>
        <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
        </Route>
        <Route path = "/create-listing" element={<PrivateRoute/>}>
        <Route path ="/create-listing" element={<CreateListing/>}/>
        </Route>

      
        
        <Route path ="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
      
    </Router>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </>
  );
}

export default App;
