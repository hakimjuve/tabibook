
const drodown = () => {
return (
    <div className='drop'>
    <form action="/action_page.php">
    <select name="cars" id="cars">
    <option value="" disabled selected>إختر التخصص</option>
      <option value="volvo">قلب</option>
      <option value="saab">أسنان</option>
      <option value="opel">عيون</option>
      <option value="audi">أطفال</option>
    </select>
    <br /><br />
  </form>
</div>
          );
        }
export default drodown;
        