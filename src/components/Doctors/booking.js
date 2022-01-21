import Footer from '../footer'
import { Link} from 'react-router-dom';
function App() {


  return (
    <>
    <div className="App1"> 
     <div className="container">
      <div className='con col3'>
    <div className="title">
           <span className='join-us'>تسجيل الدخول</span>
          <br />
        <input type="text" className='ff-name' placeholder="  الإسم" name="name" maxlength="10" /> 
        <br />
        <input type="text" className='ff-name' placeholder="  البريد الإلكتروني" name="name" maxlength="10"/> 
        <br />
        <input type="text" className='ff-name' placeholder="  رقم الهاتف" name="name" maxlength="10" required /> 
        <br />
        <input type="text" className='ff-name' placeholder="  كلمة المرور" name="name" maxlength="10" required />
        <br />
        <a>           <Link to='./login' className='' style={{ textDecoration: 'none',color:'black'}}>لدي حساب</Link></a>
        <br />
        <br />
        <button  className='botn'>تسجيل</button>




        </div>
              </div>
        </div>        

    </div>
            <Footer />
</>
    
  );
}

export default App;
