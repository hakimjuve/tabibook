import '../App.css';
import { Link } from 'react-router-dom';
const  subdoc = () => {
return (
<div>
<div className='con con3'>
           
<div className='txt'>
             <h1>سجل معنا في دليل الأطباء</h1>
             <p>لضمان وسرعة وصول المرضى إليك بشكل أسهل وأفضل بدون تعقيدات ومشاكل الحجز المعتادة، كما يمكن للمريض الاتصال بك مباشرة ومعرفة مكان العيادة بدون وسيط.
   <b> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;يمكنك الآن إرسال بياناتك</b></p>
 
                    <a className="third-block-btn" > <Link to='/Subdoctors' style={{ textDecoration: 'none',color:'white'}}><h7>   إشترك في العضوية الآن</h7></Link></a>

    </div>
    <img src='./doctor1.png'  alt='....' />
   </div></div>
          );
        }
export default subdoc;
        