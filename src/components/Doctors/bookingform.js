
function Modal({ setOpenModal }) {
  return (
    <div className="container">
      <div className='con'>
    <div className="title">
          <h1>إنضم إلينا</h1>
        <input type="text" className='ff-name' placeholder="  الإسم" name="name" maxlength="10" /> 
        <br />
        <input type="text" className='ff-name' placeholder="  البريد الإلكتروني" name="name" maxlength="10"/> 
        <br />
        <input type="text" className='ff-name' placeholder="  رقم الهاتف" name="name" maxlength="10" required /> 
        <br />
        <input type="text" className='ff-name' placeholder="  كلمة المرور" name="name" maxlength="10" required /> 



        </div>
              </div>
        </div>
        
  
  );
}

export default Modal;
