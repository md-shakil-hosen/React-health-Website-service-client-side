
import './App.css';
import Menubar from './component/Shared/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Shared/Footer/Footer';
import Login from './component/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './component/Register/Register';
import Home from './component/Home/Home/Home';
import Error from './component/Home/Home/Error/Error';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './component/Home/Home/Details/ServiceDetails'
import initializeAuthentication from './component/Firebase/firebase.init';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Service from './component/Home/Home/Service/Service';
import About from './component/Home/Home/About/About'
import Contact from './component/Home/Home/Contact/Contact';
initializeAuthentication();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/serviceDetails/:serviceID'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/service'>
              <Service></Service>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
