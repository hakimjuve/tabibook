import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import swal from 'sweetalert';


import Footer from '../footer'
import Btn from './btn'
import { useForm } from "react-hook-form"
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions, localeAr } from '@mobiscroll/react';
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

  const toast = useToast();

  setOptions({
    locale: localeAr,
    theme: 'ios',
    themeVariant: 'light'
  });

  return (
    <div className="home">
    <div className='container'>
             <div className='con form'>
             <label for="name"><b className='b'>الإسم</b></label>
             <input className='input' type="text" placeholder="أدخل الإسم" name="name" maxlength="10" required onChange={(event) => { setName(event.target.value); setNameError(false); }} /> 
             {nameError && <p id='name'>*حقل الاسم مطلوب</p>}
             <label for="age"><b className='b'>العمر</b></label>
             <input type="text" className='input' placeholder="أدخل العمر" maxlength="3" name="age" required onChange={(event) => { setAge(event.target.value); setAgeError(false); }} />    
             {ageError && <p id='age'>*حقل العمر مطلوب</p>}
             <label for="num"><b className='b'>رقم الهاتف</b></label>
             <input type="text" className='input' placeholder="أدخل رقم الهاتف" name="num" maxlength="9" required onChange={(event) => { setNum(event.target.value); setNumError(false); }} />   
             {numError && <p id='numb'>*حقل الهاتف مطلوب</p>}
             <label for="name"><b className='b'>اختر الموعد</b></label>
             <Datepicker
              controls={['calendar', 'timegrid']}
              touchUi={true} />
<button  className='bookingbtn' 
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
        





