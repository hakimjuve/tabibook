
import Footer from '../footer'

function App() {


  return (
    <>
    <div className="App1"> 
     <div className="container">
      <div className='con'>
    <div className="title">
           <span className='join-us'>إنضم إلينا</span>
          <br />
        <input type="text" className='ff-name' placeholder="  الإسم" name="name" maxlength="10" /> 
        <br />
        <input type="text" className='ff-name' placeholder="  البريد الإلكتروني" name="name" maxlength="10"/> 
        <br />
        <input type="text" className='ff-name' placeholder="  رقم الهاتف" name="name" maxlength="10" required /> 
        <br />
        <input type="text" className='ff-name' placeholder="  كلمة المرور" name="name" maxlength="10" required />
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
