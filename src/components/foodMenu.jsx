import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/foodmenu.css";

class FoodMenu extends Component {
  render() {
    return (
      <div className="food-menu food-menu-container">
        <div className="row">
          {this.props.menuEntries.map((c) => {
            return (
              <div key={c.id} className="col-sm flex-grow-0 card-container">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={c.img} />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Text>{c.price}</Card.Text>
                    <div className="d-flex">
                      <Button variant="light" className="flex-grow-1">
                        {c.buttonText}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FoodMenu;
