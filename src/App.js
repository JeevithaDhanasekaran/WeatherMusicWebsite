import React, { useEffect, useState } from 'react';
import { Button , Nav , Navbar , Container, Form, Row, Col , Table ,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  const api = {
    key: "4d21dbfadd49076f3bd7e3b7a17c54ac",
    base: "https://api.openweathermap.org/data/2.5/",
    };

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

  useEffect(() => { fetchData(); });

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
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {/* Code to print latitide, longitude and climate data in table */}
                {weatherData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.coord.lat}</td>
                    <td>{data.coord.lon}</td>
                    <td>{data.main.humidity}</td>
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
      <Row>
        <Col>
        <Container className="text-center text-dark mt-5">
          <Image src="https://media.giphy.com/media/Xz9ypThCqqyUo/giphy.gif" fluid />
          <h1 className="mt-3">It's Sunny Today!</h1>
          <h3>Don't forget to wear your sunglasses!</h3>
        </Container>
        </Col>
        <Col>
          <Container className="text-center text-dark mt-5 pb-1">
            <Image src="https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif" fluid />
            <h1 className="mt-3">It might be a Rainy day !!</h1>
            <p>Hurry , Get your umbrella!</p>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container className="text-center text-dark mt-5 pb-1">
            <Image src="https://media.giphy.com/media/3o6wrfjLCwd2f3G5wI/giphy.gif" fluid />
            <h1 className="mt-3">A Partly Cloudy Day !</h1>
            <p>Relaxx !! Sit back and Enjoy !</p>
          </Container>
        </Col>
        <Col>
          <Container className="text-center text-dark mt-5 pb-1">
            <Image src="https://media.giphy.com/media/YQFS7XgY5n5saiLxCr/giphy.gif" fluid />
            <h1 className="mt-3">Woo ! Winter Day.</h1>
            <p>Go for a Walk ,Enjoy the Season !</p>
          </Container>
        </Col>
      </Row>
      
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