import Slider from './slider'
import Specialties from './specialties'
import Subdoctors from './sub-doctors'
import Medblog from './medical-blog'
import Search from './search'
import Footer from './footer'
import Dropdawn from './Doctors/dropdown'
const back = () => {
    return (
     <div className="home">
  
     <div className='container'>
              {/* <div className='con con0'>
              <Search />
              </div>  */}
              {/* <Dropdawn /> */}
              <div className='con con1'>
              <Slider />
              </div>
              <div className='con con2'>
              <Specialties />
              </div>
              <div className='con con3'>
              <Subdoctors />
              </div>
              <div className='con con4'>
              <Medblog />
              </div>
   </div>
   <Footer />
         </div>
    );
  }
  
  export default back;
  