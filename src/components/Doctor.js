import { useParams } from "react-router-dom";
import doctors from './Doctors/name-doctors';
import Card from './Doctors/card';
import Information from './Doctors/informationdoctors';
import Footer from './footer'
import { Link} from 'react-router-dom';

const Doctor = () => {
  const { doctorId } = useParams();

  const doctor = doctors.find(d => d.id === doctorId);

  const info = Information.find(i => i.id === doctorId);

  return (
    <div>
       
        <div    className='container'>

                  <div className='con col2'>
                       {/* <img src={props.doctorDetails.image}   alt='شخص' className='profilepic' />  */} 
                       {/* <p>الدكتور: {doctor.name}</p>
                       <p>الهاتف: {info.phonenum}</p> */}
   <ul>
                   <img src={doctor.image}   alt='شخص' className='profilepic' />  
                   <li className='name'> <p>الدكتور: {doctor.name}</p></li>
                   <li className='spec2'> <p>{info.dgree}</p></li>
                   <li className='place2'><p>{info.expe}</p></li>
                   <li className='time'></li>

               </ul>
 
           </div>       

        </div>
        <Link to='./IBooking' className='btn' style={{ textDecoration: 'none',color:'black'}}>احجز موعد</Link>
        <Footer />

      </div>
  )
}

export default Doctor