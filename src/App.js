import React, { useEffect, useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Form,
  Row,
  Col,
  Table,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import { IoMdCloudy, IoMdRainy, IoIosSunny } from "react-icons/io";
import { FiCloudSnow } from "react-icons/fi";
import { BsFillCloudHaze2Fill } from "react-icons/bs";
// import TopCities from "./TopCities";
// import { Routes, Route } from "react-router-dom";
function App() {
  const api = {
    key: "cfb79b464b2349615404a35a40e6ccce",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [matchingClimateData, setMatchingClimateData] = useState(null);
  const [matchingCity, setMatchingCity] = useState(null);
  const climate = [
    {
      weather_main: "Rain",
      h1_text: "Grey skies, cozy hearts.",
      low_text: "Hurry, Get your umbrella!",
      img_src: "https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif",
    },
    {
      weather_main: "Sunny",
      h1_text: "Bright sun, seize joy!",
      low_text: "Don't forget to wear your sunglasses!",
      img_src: "https://media.giphy.com/media/Xz9ypThCqqyUo/giphy.gif",
    },
    {
      weather_main: "Clouds",
      h1_text: "Cloudy skies, cozy vibes",
      low_text: "Relaxx !! Sit back and Enjoy!",
      img_src: "https://media.giphy.com/media/3o6wrfjLCwd2f3G5wI/giphy.gif",
    },
    {
      weather_main: "Snow",
      h1_text: "Woo! Winter Day.",
      low_text: "Go for a Walk, Enjoy the Season!",
      img_src: "https://media.giphy.com/media/YQFS7XgY5n5saiLxCr/giphy.gif",
    },
    {
      weather_main: "Haze",
      h1_text: "Dreamy Haze, explore bliss.",
      low_text: "Embrace the hazy tranquility.",
      img_src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTM2bThoNG80d3ExYXM3emt2ZzFnYzRoa3c4cjZpcDUzcThvYnppMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xysdZuD1d1X1rq/giphy.gif",
    },
    {
      weather_main: "Mist",
      h1_text: "Woo! Mistt !!",
      low_text: "Ride carefully !",
      img_src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWc2cW5jb21odHg5eHRtNzcxOHA3NjBxbG9mZW83bDdkYmxzZTd5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dz6Nrk35xWP3q/giphy.gif",
    },
  ];

  const getClimateData = (weatherMain) => {
    return climate.find((condition) => condition.weather_main === weatherMain);
  };

  const fetchData = async () => {
    try {
      const fetchedData = [];
      for (let i = 0; i < locations.length; i++) {
        const cityName = locations[i].name;
        const response = await axios.get(
          `${api.base}weather?q=${cityName}&appid=${api.key}&units=metric`
        );
        fetchedData.push(response.data);
      }
      setWeatherData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const locations = [
    { name: "Coimbatore" },
    { name: "Chennai" },
    { name: "Bangalore" },
    { name: "Salem" },
    { name: "Namakkal" },
    {name:"Yercaud"},
    {name:"Madurai"},
    {name:"kerala"}
  ];

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const foundCity = weatherData.find(
      (data) => data.name.toLowerCase() === searchInput.toLowerCase()
    );

    if (foundCity) {
      setMatchingCity(foundCity); // Setting matchingCity
      const matchingClimate = getClimateData(foundCity.weather[0].main);

      if (matchingClimate) {
        setMatchingClimateData(matchingClimate);
      } else {
        alert("Climate not found for weather condition")
        console.log("Climate not found for weather condition");
      }
    } else {
      console.log("City not found");
    }
  };
  return (
    <div className="App-section">
      <div className="fluid text-white" style={{ minHeight: "100%"}}>
        <header className="App-header">
          <Navbar
            bg="dark"
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary"
          >
            <Container>
              <Navbar.Brand href="#">WeatherMusic</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#TopCities">Top Cities</Nav.Link>
                  <Nav.Link href="#SmallCities">Small Cities</Nav.Link>
                </Nav>

                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search Locations"
                        className="mr-sm-2"
                        value={searchInput}
                        onChange={handleSearchChange}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button action onClick={handleSearch}>
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        {/* <Routes>
            <Route path="/TopCities" element={<TopCities/>} />
            <Route path="/SmallCities" component={SmallCities} />
        </Routes> */}


        <Container class="container-well">
          <Row>
            <Col>
              <Table striped bordered hover variant="dark" className="py-4 my-5">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Temperature <nobr>°C</nobr></th>
                    <th>Weather description</th>
                    <th>Humidity</th>
                    <th>Climate</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.main.temp}</td>
                      <td>{data.weather[0].description}</td>
                      <td>{data.main.humidity}</td>
                      <td>{data.weather[0].main}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Table striped bordered hover variant="dark" className="py-4 my-5">
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
                  <tr>
                    <td>Erode</td>
                  </tr>
                  <tr>
                    <td>Yercaud</td>
                  </tr>
                  <tr>
                    <td>kerala</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Container className="Box-Container my-4">
          <Row className="RowColmn text-center text-dark">
            <Col className="city-info text-center">
              {matchingClimateData && (
                <>
                  <h1>
                    {matchingClimateData.weather_main === "Rain" && (
                      <IoMdRainy className="zoom" size={"10rem"} />
                    )}
                    {matchingClimateData.weather_main === "Sunny" && (
                      <IoIosSunny className="zoom" size={"10rem"} />
                    )}
                    {matchingClimateData.weather_main === "Mist" && (
                      <FiCloudSnow className="zoom" size={"10rem"} />
                    )}
                    {matchingClimateData.weather_main === "Clouds" && (
                      <IoMdCloudy className="zoom" size={"10rem"} />
                    )}
                    {matchingClimateData.weather_main === "Haze" && (
                      <BsFillCloudHaze2Fill className="zoom" size={"10rem"} />
                    )}
                  </h1>
                  <h4>{matchingCity.name}</h4>
                </>
              )}
            </Col>
            <Col className="check-border text-dark text-center">
              {matchingClimateData && (
                <>
                  <h1>{matchingClimateData.h1_text}</h1>
                  <p>{matchingClimateData.low_text}</p>
                </>
              )}
            </Col>
          </Row>
          <Row className="center mt-5 py-4">
            <Col className="image-disp">
              {matchingClimateData && (
                <Image
                  src={matchingClimateData.img_src}
                  style={{ width: "20rem" }}
                  fluid
                />
              )}
            </Col>
            <Col className="text-dark my-4 ">
              {matchingClimateData && (
                <p>
                  <h4>Weather: {matchingCity.weather[0].main}</h4>
                  <h6>Temperature: {matchingCity.main.temp}</h6>
                  <h6>Description : {matchingCity.weather[0].description}</h6>
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <footer
          className="bg-dark text-white text-center py-2 mb-10"
          fixed="bottom"
        >
          <p>&copy; 2024 WeatherMusic. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;