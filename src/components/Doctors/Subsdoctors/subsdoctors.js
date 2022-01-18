import React, { useState } from 'react';
import swal from 'sweetalert';
import Footer from '../../footer'
import './subsdoctors.css';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// function submitMod() {
//   if (newfilm.name.length === 0 || newfilm.description.length === 0 || newfilm.rating.length === 0 || newfilm.posterURL.length === 0 ) {
//       alert("Erreur : fill all inputs please")
//   }
const Doctors = () => {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState(false);
  const [num, setNum] = useState('');
  const [numError, setNumError] = useState(false);



  return (
    <div className="home">
    <div className='container'>
             <div className='con form form1'>
      <h1> أدخل البيانات</h1> 

      {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>}  */}
             <label for="name"><b  id='f-b'>الأول الإسم</b></label>
             <input type="text" className='f-name' placeholder=" أدخل الإسم" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

      {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='s-b'> اللقـب</b></label>
             <input type="text" className='s-name' placeholder="أدخل اللقـب" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

      {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='l-b'>العمـر</b></label>
             <input type="text" className='l-name' placeholder="أدخل العمـر" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

             <label for="name"><b id='gender'>الجنس</b></label>
             <select name="cars"  className='gender'>
             <option value="" id='placeh'>إختر الجنس</option>
             <option value="volvo">ذكر</option>
             <option value="saab">أنثى</option>
             </select>

     {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='nmbr'> رقم الهاتف </b></label>
             <input type="text" className='nmbr' placeholder=" أدخل الرقم" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

     {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='sep'>التخصص</b></label>
             <input type="text" className='sep' placeholder=" أدخل التخصص" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} />

     {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='s-sep'> التخصص الفرعي </b></label>
             <input type="text" className='s-sep' placeholder=" أدخل التخصص الفرعي" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

      {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             <label for="name"><b id='titreprof'>   اللقب المهني </b></label>
             <input type="text" className='titreprof' placeholder=" أدخل اللقب المهني" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 
             {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
  
             <label for="name"><b id='num-prof'>   الرقم النقابي </b></label>
             <input type="text" className='num-prof' placeholder=" أدخل الرقم النقابي" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 

             {/* {nameError && <p id='name'>*حقل الاسم مطلوب</p>} */}
             {/* <label for="age"><b  >العمر</b></label> */}
             {/* <input type="text" placeholder="أدخل العمر" maxlength="3" name="age" required onChange={(event) => { setAge(event.target.value); setAgeError(false); }} />   
 */}
             {/* {ageError && <p id='age'>*حقل العمر مطلوب</p>} */}
             {/* <label for="num"><b  >رقم الهاتف</b></label> */}
             {/* <input type="text" placeholder="أدخل رقم الهاتف" name="num" maxlength="9" required onChange={(event) => { setNum(event.target.value); setNumError(false); }} />   */}

             {/* {numError && <p id='numb'>*حقل الهاتف مطلوب</p>} */}
             {/* <label for="name"><b  >اختر الموعد</b></label> */}
       
<button  className='btn-doc' 
  onClick={() => {
    console.log({name, age, num});

    let valid = true;

    if (!name) {
      setNameError(true);
      valid = false;
    }
    if (!age) {
      setAgeError(true);
      valid = false;
    }
    if (!num) {
      setNumError(true);
      valid = false;
    }

    if (valid) {
      swal({
        title: "هل تريد تأكيد عملية الحجز؟",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("تمت عملية الحجز بنجاح", {
            icon: "success",
          });
        }
      }); 
    } 
  }
}
>حجز</button> 
<div>

    </div>
  </div>


    </div>
             <Footer />
      </div>

          );
        }
export default Doctors;
        





