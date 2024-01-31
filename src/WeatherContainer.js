import React from 'react';
import { Container, Row, Col ,Image} from 'react-bootstrap';
import { IoMdCloudy,IoMdRainy,IoIosSunny } from "react-icons/io";
import { climate } from './App'; 

const WeatherContainer = ({ city, weather, latitude, longitude }) => {
  const { weatherData, climate } = climate;
  const icon = {
    Rain: <IoMdRainy size={'10rem'} />,
    Sunny: <IoIosSunny size={'10rem'} />,
    Clouds: <IoMdCloudy size={'10rem'} />,
  }[weather.weather[0].main];

  return (
    <Container className='Box-Container my-4'>
      <Row className=' RowColmn text-center text-dark'>
        <Col className=' city-info text-center'>
          <h1>{icon} {city}</h1>
        </Col>
        <Col className='check-border text-dark text-center'>
          <h1>{climate[weather.weather[0].main].h1_text}</h1>
          <p>{climate[weather.weather[0].main].low_text}</p>
        </Col>
      </Row>
      <Row className='center mt-5 py-4' >
        <Col className='image-disp'>
          <Image src={climate[weather.weather[0].main].img_src} style={{width: '20rem'}} fluid />
        </Col>
        <Col className='text-dark my-4 '>
          <p>
            <h4>Weather: {weather.weather[0].main}</h4>
            <h6>Latitude: {latitude}</h6>
            <h6>Longitude : {longitude}</h6>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherContainer;





{/*
import React, { useEffect, useState } from 'react';
import { Button , Nav , Navbar , Container, Form, Row, Col , Table , Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
 import { IoMdCloudy,IoMdRainy,IoIosSunny } from "react-icons/io";

function App() {

  const api = {
    key: "5dd9c68dbc77aea27cba8603dd7f15c8",
    base: "https://api.openweathermap.org/data/2.5/",
  };

    const climate = [
            {weather_main: 'Rain',h1_text: 'It might be a Rainy day !!', low_text:'Hurry , Get your umbrella!',img_src: 'https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif'},
            {weather_main: 'Sunny',h1_text: "It's Sunny Today!", low_text:"Don't forget to wear your sunglasses!",img_src: 'https://media.giphy.com/media/Xz9ypThCqqyUo/giphy.gif'},
            {weather_main: 'Clouds',h1_text: 'A Partly Cloudy Day !', low_text:'Relaxx !! Sit back and Enjoy !',img_src: 'https://media.giphy.com/media/3o6wrfjLCwd2f3G5wI/giphy.gif'},
            {weather_main: 'Snow',h1_text: 'Woo ! Winter Day.', low_text:'Go for a Walk ,Enjoy the Season !',img_src: 'https://media.giphy.com/media/YQFS7XgY5n5saiLxCr/giphy.gif'},
        ] ;

  const [weatherData, setWeatherData] = useState([]);
    
  const fetchData = async () => { 
    try { 
      const fetchedData = []; 
      for (let i = 0; i < locations.length; i++) {  
        const cityName = locations[i].name;
        const response = await axios.get(`${api.base}weather?q=${cityName}&appid=${api.key}&units=metric`);
        fetchedData.push(response.data); 
      } 
      setWeatherData(fetchedData); 
    } 
    catch (error) { 
      console.error(error); 
    } 
  }; 

  useEffect(() => { fetchData(); },[]);

  const alertClicked = () => {
    alert('The search button is clicked !!');
  };  
     
  
  const locations = [
    { name: "Coimbatore"},
    { name: "Chennai" },                                 
    { name: "Bangalore"},
    { name: "Salem"},
    { name: "Namakkal"},
  ];

 
  return (                                             
    <div>
    <div className='fluid text-white mx-5'  style={{ minHeight: '100%' }} >
      <header className="App-header">
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">WeatherMusic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="#Topcities">Top Cities</Nav.Link>
                <Nav.Link href="#SmallCities">Small Cities</Nav.Link>
              </Nav>

              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search Locations"
                      className="mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button action onClick={alertClicked} type="submit">Search</Button>
                  </Col>
                </Row>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container class='container-well'>
        <Row>
          <Col>        
            <Table striped bordered hover variant="dark" className='py-4 my-5'>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Temperature ('C)</th>
                  <th>Temp_Minimum</th>
                  <th>Temp_maximum</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.main.temp}</td>
                    <td>{data.main.temp_min}</td>
                    <td>{data.main.temp_max}</td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </Col>
          <Col>
          <Table striped bordered hover variant="dark" className='py-4 my-5'>
              <thead>
                <tr>
                  <th>Top Cities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chennai</td>
                </tr>
                <tr>
                  <td>Bangalore</td>
                </tr>
                <tr>
                  <td>Coimbatore</td>
                </tr>
                <tr>
                  <td>Salem</td>
                </tr>
                <tr>
                  <td>Namakkal</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container className='Box-Container my-4'>
       <Row className=' RowColmn text-center text-dark'>
        
           <Col className=' city-info text-center'>
            
            <h1><IoMdRainy  size={'10rem'}/> Bangalore </h1>
          </Col>
          <Col className='check-border text-dark text-center'> 
          <h1>It might be a Rainy day !!</h1>
          <p>Hurry , Get your umbrella!</p>
        </Col>
        
       </Row>
       <Row className='center mt-5 py-4' >
         <Col className='image-disp'>
         <Image src="https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif " style={{width: '20rem'}} fluid />
         </Col>
         <Col className='text-dark my-4 '>
             <p>
               <h4>Weather: Rainy</h4>
               <h6>Latitude: 497</h6>
               <h6>Longitude : 46</h6>
             </p>
           </Col> 
          </Row>
      </Container>
       


    </div>
    <div>
      <footer className="bg-dark text-white text-center py-2 mb-10 mx-5"  fixed="bottom">
        <p>&copy; 2024 WeatherMusic. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}
export default App;






*/}