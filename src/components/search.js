import { useState } from 'react';
import '../App.css';
import doctors from './Doctors/name-doctors';
import Card from './Doctors/card.js';

const Search = () => {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [noResults, setNoResults] = useState(false);


   const handleChangeInput = (event) => {
      setSearchValue(event.target.value)
   }

   const getCurrentDoctor = (e) => {
      e.preventDefault()
      let currentDoctor = doctors.filter(doctor => doctor.name === searchValue)
      // currentDoctor = [{name:"ali",id:"1"}]
      setSearchResult(currentDoctor)
      setNoResults(currentDoctor === []);

   }

   return (
      <div>
         <form onSubmit={getCurrentDoctor}>
            <input className='search' placeholder="إبحث " onChange={handleChangeInput} value={searchValue} maxlength="40" id="search" ></input>

            <button className='btn1'>بحث</button>
         </form>

         <div>
            {
               searchResult.length > 0 && <div>

                  {searchResult.map(item => <Card doctorDetails={item} />)}

               </div>
            }
         </div>

      </div>
   );
}
export default Search;
