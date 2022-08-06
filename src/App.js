
import './App.css';
import Useform from './Useform';

function App() {
  
// const [eventList,setEventList]=useState({});
// useEffect(
//   ()=>{
//    console.log("po");
//    db.collection('events').onSnapshot((snapshot)=>{
//     if(snapshot.val!=null){
//       setEventList({
//           ...snapshot.val()
//       })
//       console.log("not")

//     }
//     else{
//       console.log("null");
//     }
//   }
//    )
  
  
  
// },[])

  return (
    <div className="App">
      <h1 >EVENT MANIA</h1>
      <div className='aboutus'>
      <h2 >About Us</h2>
      <p style={{fontSize:"20px"}}>
        If you are looking to organise an event or trying to find an event in college you are
        at the right place.<br/> In this site we provide with list of all events happening in 
        different locations and also availability of locations for future events.<br/>We hope
        you find what you're looking for.
      </p>
      </div> 
      {/* events */}
      <div>
        <h2>All Upcoming Events</h2>
        <table>
          <tr>
            <th>Events</th>
            <th>Date</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        <tr>
          <td>Talk on Machine Learning</td>
          <td>10-AUG-2022</td>
          <td>KS-AUDI</td>
          <td>10AM-12PM</td>
        </tr>
        <tr>
          <td>IEEE SPS event</td>
          <td>12-AUG-2022</td>
          <td>B-Block Seminar hall</td>
          <td>11AM-12PM</td>
        </tr>
        <tr>
          <td>Coding Contest by Turing Hut</td>
          <td>12-AUG-2022</td>
          <td>C-304</td>
          <td>1PM-3PM</td>
        </tr>
        <tr>
          <td>NSS clay ganesha event</td>
          <td>14-AUG-2022</td>
          <td>A-209</td>
          <td>2PM-5PM</td>
        </tr>
        <tr>
          <td>Convergence Hackathon Intramurals</td>
          <td>20-AUG-2022</td>
          <td>B-209</td>
          <td>1PM-4PM</td>
        </tr>
        <tr>
          <td>Convergence Project Contest </td>
          <td>25-AUG-2022</td>
          <td>B-109</td>
          <td>1PM-4PM</td>
        </tr>
        
      </table>

      </div>
      {/* location availability */}

      <div style={{alignContent:"center"}}>
        <h2>Check Room vailability</h2>
        <Useform/>

      </div>
      <div style={{height:"100px"}}>

      </div>
      

    </div>
  );

}

export default App;
