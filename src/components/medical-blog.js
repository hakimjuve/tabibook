import '../App.css';
import { Link } from 'react-router-dom';

const  medblog = () => {
return (
<div className='con con4'>
             <span>مدونة الصحة</span>
              <div className='card-2'>
             
                <div className='card-2 h1'>
                               {/* <a href to='/Booking' style={{ textDecoration: 'none'}}> </Link> */}

                               <a href="https://www.webteb.com/articles/%D8%A7%D9%84%D8%B5%D8%AF%D8%A7%D8%B9-%D8%A7%D8%B3%D8%A8%D8%A7%D8%A8%D9%87-%D9%88%D8%A7%D8%B9%D8%B1%D8%A7%D8%B6%D9%87-%D9%88%D8%B7%D8%B1%D9%82-%D8%B9%D9%84%D8%A7%D8%AC%D9%87_19886"><div class="bottom-left"  style={{ textDecoration: 'none',color:'white'}}>صداع الرأس</div></a>

                <img src='../sick head.jpg'  alt='شخص رأسه مصدع' />

                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">ألم الأسنان</div>
                <img src='../sick-teeth.jpg'  alt='شخص ياني من الام في الاسنان' /> 
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">الزكــام</div>
                <img src='../sick.png'  alt='شخص مزكوم' />
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">آلام المعدة</div>
                <img src='../sick-b.jpg'  alt='الم في المعدة' />
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">آلام الأذنين</div>
                <img src='../sick-e.jpg'  alt='الم في الاذن' />
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">آلم الرجلين</div>
                <img src='../sick-leg.jpg'  alt='الم في الرجل' />
                </div>

              </div>
           </div> 
          );
        }
export default medblog;
        