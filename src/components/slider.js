import '../App.css';
import { Link } from 'react-router-dom';

const slider = () => {
return (
<div>
<img src='../Slider.png'  alt='....' />  
<button  className=' btn-slider'><Link to='/Doctors' style={{ textDecoration: 'none',color:'white'}}><h7>إبحث على طبيبك</h7></Link></button>


  </div>

          );
        }
export default slider;
        