import React, { useState } from 'react';
import {Button, Card, Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import config from "../config";

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientResults, setIngredientResults] = useState([]);
  const token = localStorage.getItem('accessToken');

  const handleSearchChange = (e) => {
    setIngredient(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchIngredient(ingredient);
  };

  const searchIngredient = (ingredient) => {
    fetch(`${config.backendUrl}/user/searchIngredient/${ingredient}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        // Extract the results from the response
        const results = data.results;
        setIngredientResults(results);
      })
      .catch(error => console.error(error));
  };

  const addIngredientToInventory = (ingredientId) => {
    const userId = localStorage.getItem('userId');
    fetch(`${config.backendUrl}/user/inventory/add/${userId}/${ingredientId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        // handle the response data
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <h3 className="text-center heading p-3 dark-blue">Ajouter un ingrédient à l'inventaire</h3>
        <FormGroup className="p-2 d-flex justify-content-center align-content-center">
          <FormControl
            type="text"
            name="ingredient"
            className="w-50 me-3"
            placeholder="Entrez le nom de l'ingrédient"
            value={ingredient}
            onChange={handleSearchChange}
            required
          />
          <Button
            className="btn btn-secondary align-items-center text-center w-25 body-text fw-medium"
            type="submit"
          >
            Rechercher
          </Button>
        </FormGroup>
      </Form>

      {ingredientResults.length > 0 && (
        <Row xs={1} md={2} lg={4}>
          {ingredientResults.map((ingredient, index) => (
            <Col key={index}>
              <Card style={{width: '18rem', margin: '10px'}}>
                <Card.Img variant="top" src={ingredient.image}/>
                <Card.Body>
                  <Card.Title>{ingredient.name}</Card.Title>
                  <Button onClick={() => addIngredientToInventory(ingredient.id)}>+</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default AddIngredient;
