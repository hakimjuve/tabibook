import './App.css';

 

function App() {
  return (
    <div className="App"  dir='rtl'>
<>


<header>
<img src='./logo.png'  alt='....' className='logo' />
            <nav>
                <ul className="nav__links">
                    <li><a href="#"> الرئيسية</a></li>
                    <li><a href="#"> الأطباء</a></li>
                    <li><a href="#">خدماتنا</a></li>
                </ul>
            </nav>
            <a className="cta" href="#">إحجز الآن</a>
</header>
<div className='container'>
           <div className='con con1'>
           <img src='./Slider.png'  alt='....' />
           </div>
           <div className='con con2'>
             <h1>التخصصات الأكثر شيوعا</h1>
             <p>ابحث عن أفضل الدكاترة والمراكز الطبية في أكثر التخصصات شيوعا</p>
             <div className="cards">

             <div className="card">
          <img src="./icons/teeth.png" alt="ايقونة سن" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أسنان </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/knee.png" alt="ايقونة عظم" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عظام </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/eyes.png" alt="ايقونة عين" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>عيون </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/lungs.png" alt="ايقونة رئة" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>رئتين </b></h4>
  </div>
</div>
<div className="card">
          <img src="./icons/children.png" alt="أيقونة اطفال" className='avatar'/>
  <div className="inform">
    <h4 className='h4'><b>أطفال </b></h4>
  </div>
</div>
<div className="card">
  <div className="inform">
  <img src="./icons/heart.png" alt="أيقونة قلب" className='avatar'/>
    <h4 className='h4'><b>قلب </b></h4>
  </div>
</div>
</div>
           </div>
           <div className='con con3'>
           <div className='txt'>
             <h1>سجل معنا في دليل الأطباء</h1>
             <p>لضمان وسرعة وصول المرضى إليك بشكل أسهل وأفضل بدون تعقيدات ومشاكل الحجز المعتادة، كما يمكن للمريض الاتصال بك مباشرة ومعرفة مكان العيادة بدون وسيط.
   <b> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;يمكنك الآن إرسال بياناتك</b></p>
    <a class="btn btn-primary btn-block third-block-btn" href="https://koshofat.com/%d8%a7%d9%86%d8%b6%d9%85-%d9%84%d9%84%d8%a3%d8%b7%d8%a8%d8%a7%d8%a1-%d8%a7%d9%84%d9%85%d8%aa%d8%b9%d8%a7%d9%82%d8%af%d9%8a%d9%86-%d9%85%d8%b9%d9%86%d8%a7/">
                    إشترك في العضوية الآن
                    </a>  
    </div>
    <img src='./doctor1.png'  alt='....' />

           </div>
<div className='con con4'>
              <div className='card-2'>
             
                <div className='card-2 h1'>
                <div class="bottom-left">صداع الرأس</div>

                <img src='./sick head.jpg'  alt='شخص رأسه مصدع' />

                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">ألم الأسنان</div>
                <img src='./sick-teeth.jpg'  alt='شخص ياني من الام في الاسنان' />
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">الزكــام</div>
                <img src='./sick.png'  alt='شخص مزكوم' />
                </div>
                <div className='card-2 h1'>
                <div class="bottom-left">آلام المعدة</div>
                <img src='./sick-b.jpg'  alt='الم في المدة' />
                </div>
              </div>
           </div>  
               
</div>

<footer className='footer'>

<div   className="footer contact">
<ul dir='ltr'>  
   <li dir='rtl'><span>اتصل بنا:</span></li>
  <li><a href="tel:(091) 262-4425">   091 262-55-44 ✆</a></li>
  <li><a href="tel:(092) 262-4425">   092 262-55-44 ✆</a></li>
  <li><a href="tel:(051) 262-4425">   051 262-55-44 ✆</a></li>
  <li><a href="mailto:hello@tabibook.ly">hello@tabibook.ly </a></li>
</ul>
</div>
<div className='footer social'>
<ul>
  <li><img src="./icons/facebook.png" alt="أيقونة فيس بوك" /></li>
  <li><img src="./icons/instagram.png" alt="أيقونة إنستجرام" /></li>
  <li><img src="./icons/youtube.png" alt="أيقونة إنستجرام" /></li>
</ul>
</div>
<div className='footer copryight'>
  <p>سياسة الخصوصية الشروط والاستخدام<br />
جميع الحقوق محفوظة © طبيبك   2022</p>
</div>
</footer>




  
</>

</div>
  );
}

export default App;
