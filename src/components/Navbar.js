import '../App.css';
import { Link } from 'react-router-dom';



const nav = () => {
  
  return (
    <div>
<header className='sticky'>
<Link to='/'><img src='../logo.png'  alt='شعار طبيبك' className='logo' /></Link>
            <nav>
                <ul className="nav__links">
                <li>  <Link to='/'>الرئيسية</Link>  </li>
                <hr />

                <li>  <Link to='/Doctors'>الأطباء</Link> </li>
                <hr />

                <li>  <Link to='/Aboutus'>من نحن</Link> </li>


                </ul>
            </nav>
            <a className="cta" > <Link to='/Booking' style={{ textDecoration: 'none'}}><h7 className='h7'>الدخول</h7></Link></a>
            
</header>


    </div>
  );
}

export default nav;
