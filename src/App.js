
import './App.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './componants/AboutUs/AboutUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './componants/NotFound/NotFound';
import Courses from './componants/Courses/Courses';
import Teachers from './componants/teachers/Teachers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
