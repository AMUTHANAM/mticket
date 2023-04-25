import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Lmovie } from './Lmovie';
import { Seatarrangement } from './Seatarrangement';
import { Theater } from './Theater';


export const MOVIEDATA = [{
  
  id: "001",
  name: "kantara ",
poster: "https://www.koimoi.com/wp-content/new-galleries/2022/11/kantara-worldwide-box-office-update-after-57-days-001.jpg ",
rating: " 10",
summary: "When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice. ",
trailer: "https://www.youtube.com/embed/35q8nqqsEqM" ,},
  {
    id:"002",
  name: " RRR",
  poster: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1bbmccDX-wPjlrBfk0swvT700nBLMhDQVGnoLzEXM89R8Ix6hvXY2p3qRO-PApHmHlo&usqp=CAU",
  rating: "9 ",
  summary: " A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",},
  {
    id:"003",
    name: "Avatar ",
    poster: "https://images.thedirect.com/media/article_full/avatar-4.jpg ",
    rating: " 8",
    summary: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora.  ",}
  ,{
    id:"004",
    name: "maverick ",
  poster: "https://plugins-media.makeupar.com/smb/blog/post/2022-05-18/29326b04-9842-4c64-b68c-dd94e5aa5b7a.jpg ",
  rating: "7 ",
  summary: " After more than 30 years of service as one of the Navy's top aviators, Pete  Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",},
  {
    id:"005",
    name: "Doctor strange ",
  poster: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/doctor_strange_multiverse_madness_review.jpg ",
  rating: " 9",
  summary: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. ",},
 
] 

function App() {
  const navigate= useNavigate()
  return (
    <div className="App">

    <AppBar>
    <Toolbar>

      <img className='aimg' src=" https://i.pinimg.com/550x/d2/1d/79/d21d796317fbe071ce591803543fd546.jpg"  alt=""/>

     <Button color='inherit' >
      Home
     </Button>

     <Button color='inherit'   onClick={()=> navigate("/movie")}>
      Movies
     </Button>

     <Button color='inherit' onClick={()=>navigate("/theater")} >
      Theater
     </Button>

     <Button color='inherit' onClick={()=>navigate("/seatarrangement")} >
      seatarrangement
     </Button>

     <Button color='inherit' onClick={()=>navigate("/payment")} >
      payment
     </Button>

     <Button color='inherit' >
      events
     </Button>

     <div className='logbut'>

     <Button color='inherit' >
      orders
     </Button>

     <Button color='inherit' >
      log in/sign up
     </Button>



     </div>

    </Toolbar>
    </AppBar>


<img className='mimg'  src=" https://media.istockphoto.com/id/1237804526/vector/movie-night-concept-with-popcorn-cinema-tickets-drink-tape-in-cartoon-style-movie-or-cinema.jpg?s=612x612&w=0&k=20&c=FWIp6SXBqUg-_PWtoTxOy00b2aeg5xNDiRcFr6IF4l4="  alt=""/>


   <Routes>

<Route path="/movie" element={<Lmovie/>}/>
<Route path="/seatarrangement" element={< Seatarrangement/>} />
<Route path="/theater" element={<Theater/>}/>
<Route path="/payment" element={<Payment/>} />
</Routes> 


    </div>
  );
}

export default App;

function Payment(){
return(
<>

<h1>RRR</h1>
<h6>Tamil | 2D | u </h6>

<table class="table">
  
  <tbody>

    <tr class="table-active">
      <td>
        date
      </td>
      <td>25/04/2023 6.45 pm</td>
    </tr>

    <td>
        theater
      </td>
      <td>Aravinth cinimas</td>

    <tr>
      <td>Screen</td>
     <td>ARSH cinemas </td>
    </tr>

    <tr>
     <td>Seat</td>
     <td> k5 </td>
    </tr>

  </tbody>
</table>

<div>
<h6>Order Summary </h6>
<table class="table">
<tbody>
<tr class="table-active">
  <td>Ticket x1</td>
  <td>Rs 173</td>
</tr>

<tr class="table-active">
  <td>1Ticket(s)</td>
  <td>Rs 150x1</td>
</tr>

<tr class="table-active">
  <td>cgst9%+sgst9%</td>
  <td>Rs 3.6</td>
</tr>

<tr class="table-active">
  <td>total</td>
  <td>Rs 173</td>
</tr>

</tbody>

</table>


</div>

<button className='lbut'>CONTINUE</button><br></br>

<button>CANCEL</button>

</>





)



}