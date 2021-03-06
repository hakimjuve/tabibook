import './App.css';
import Navbar from './components/Navbar'
import Doctors from './components/Doctors/Doctors'
import Home from './components/home'
import Aboutus from './components/Services/aboutus'
import Booking from './components/Doctors/booking'
import IBooking from './components/Doctors/insert-booking'
import Doctor from './components/Doctor'
import Subdoctors from './components/Doctors/Subsdoctors/subsdoctors'
import Login from './components/Doctors/login'

import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"  dir='rtl'>
<>
<BrowserRouter>
      <Navbar />
      <Route exact path="/"  component={Home} />
      <Route exact path="/Doctors"  component={Doctors} />
      <Route path="/Aboutus" exact component={Aboutus} />
      <Route path="/Booking" exact component={Booking} />
      <Route path="/IBooking" exact component={IBooking} />
      <Route path="/Doctor/:doctorId" exact component={Doctor} />
      <Route path="/Subdoctors" exact component={Subdoctors} />
      <Route path="/Login" exact component={Login} />


</BrowserRouter>





</>

</div>
  );
}

export default App;
