import '../App.css';
import { Link } from 'react-router-dom';



const nav = () => {
  
  return (
    <div>
<header className='sticky'>
<img src='../logo.png'  alt='شعار طبيبك' className='logo' />
            <nav>
                <ul className="nav__links">
                <li>  <Link to='/'>الرئيسية</Link>  </li>
                <hr />

                <li>  <Link to='/Doctors'>الأطباء</Link> </li>
                <hr />

                <li>  <Link to='/Aboutus'>من نحن</Link> </li>


                </ul>
            </nav>
            <a className="cta" > <Link to='/Booking' style={{ textDecoration: 'none',color:'white'}}><h7>إنضم إلينا</h7></Link></a>
            
</header>


    </div>
  );
}

export default nav;
