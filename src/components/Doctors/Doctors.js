import Search from '../search'
import Footer from '../footer'
import Card from './card'
import docs  from './name-doctors'

const Doctors = () => {
return (
//search widget
    <div className="home">
    <div className='container'>
             <div className='con con0'>
             <Search />
             </div>
    </div>
             {/* show doctors */}
    <div className='container'>
   {docs.map(el => {return( <Card doctorDetails={el} />)})}

    </div>
             <Footer />
      </div>

          );
        }
export default Doctors;
        