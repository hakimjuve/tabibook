import { Link } from 'react-router-dom';

const card = (props) => {
    return (
        <div className='con  card-doc '>
        <div className='card-doc-widget'>
            <Link to={`/doctor/${props.doctorDetails.id}`}>
           <div className='card-doc-widget col1'>
                       <img src={props.doctorDetails.image}   alt='شخص' className='profilepic' /> 
   <ul>
                   <li className='name'>{`الدكتور: ${props.doctorDetails.name}`}</li>
                   <li className='spec'>{`التخصص: ${props.doctorDetails.Specialization}`}</li>
                   <li className='place'>{` ◂${props.doctorDetails.place}`}</li>
                   <li className='time'>{` ◂${props.doctorDetails.time}`}</li>

               </ul>
 
           </div>
           </Link>
           <Link to='./IBooking' className='btn' style={{ textDecoration: 'none',color:'black'}}>احجز موعد</Link>

</div>
    </div>
              );
            }
    export default card;
