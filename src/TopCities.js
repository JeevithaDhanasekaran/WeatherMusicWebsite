import React from "react";
import { Container,Table } from "react-bootstrap";

const TopCities = () => {
    return(
        <div>
            <Container>
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
            </Container>
        </div>
    )
}
export default TopCities;