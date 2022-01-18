
 import '../App.css';
    const specialties  = () => {
    return (
    <div>
       
             <h1>التخصصات الأكثر شيوعا</h1>
             <p>ابحث عن أفضل الدكاترة والمراكز الطبية في أكثر التخصصات شيوعا</p>
             <div className="cards">

             <div className="card">
          <img src="../icons/teeth.png" alt="ايقونة سن" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أسنان </b></h4>
  </div>
</div>
<div className="card">
          <img src="../icons/knee.png" alt="ايقونة عظم" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عظام </b></h4>
  </div>
</div>
<div className="card">
          <img src="../icons/eyes.png" alt="ايقونة عين" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عيون </b></h4>
  </div>
</div>
<div className="card">
          <img src="../icons/lungs.png" alt="ايقونة رئة" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>رئتين </b></h4>
  </div>
</div>
<div className="card">
          <img src="../icons/children.png" alt="أيقونة اطفال" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أطفال </b></h4>
  </div>
</div>
<div className="card">
  <div className="inform">
  <img src="../icons/heart.png" alt="أيقونة قلب" className='avatar'/>
    <h4 className='h4'><b>قلب </b></h4>
  </div>
</div>
</div>
       </div>
              );
            }
export default specialties;
            