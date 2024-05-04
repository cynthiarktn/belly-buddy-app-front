import React, { useState } from 'react';
import {Badge, Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import config from "../config";

const FindRecipe = () => {
  const [ingredients, setIngredients] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const token = localStorage.getItem('accessToken');

  const handleChange = (e) => {
    setIngredients(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
    setIngredientList(ingredientsArray);
    searchRecipes(ingredientsArray);
  };

  const handleDelete = (ingredientToDelete) => {
    const newIngredientList = ingredientList.filter(ingredient => ingredient !== ingredientToDelete);
    setIngredientList(newIngredientList);
    setIngredients(newIngredientList.join(', '));
    searchRecipes(newIngredientList);
  };

  const searchRecipes = (ingredientsArray) => {
    fetch(`${config.backendUrl}/user/searchRecipesByIngredients/${ingredientsArray}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(data => {
        // handle the response data
        setRecipes(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center heading p-3 dark-blue">Trouver une recette avec des ingrédients</h3>
        <FormGroup className="p-2 d-flex justify-content-center align-content-center">
          <FormControl
            type="text"
            name="ingredients"
            className="w-50 me-3"
            placeholder="Entrez les ingrédients séparés par des virgules"
            value={ingredients}
            onChange={handleChange}
            required
          />
          <Button
            className="btn btn-secondary align-items-center text-center w-25 body-text fw-medium"
            type="submit"
          >
            Trouver ma recette
          </Button>
        </FormGroup>
      </Form>

      {recipes.length > 0 && (
        <div>
          <h4 className="heading text-danger text-center mt-5">{recipes.length} recettes correspondantes</h4>

          {ingredientList.length > 0 && (
            <div className="d-flex flex-wrap justify-content-center">
              {ingredientList.map((ingredient, index) => (
                <Badge key={index} pill variant="danger" className="m-2 bg-danger-subtle text-dark">
                  {ingredient}
                  <span style={{cursor: 'pointer'}} onClick={() => handleDelete(ingredient)}> x</span>
                </Badge>
              ))}
            </div>
          )}

          <Row xs={1} md={3} className="g-4 mb">
            {recipes.map((recipe, index) => (
              <Col key={index}>
                <Card style={{width: '18rem', margin: '10px'}}>
                  <Card.Img variant="top" src={recipe.image}/>
                  <Card.Body>
                    <Card.Title className="heading dark-blue">{recipe.title}</Card.Title>
                    <Card.Text>
                      <strong>Ingrédients utilisés :</strong> {recipe.usedIngredientCount}
                    </Card.Text>
                    <Card.Text>
                      <strong>Ingrédients manquants :</strong> {recipe.missedIngredientCount}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default FindRecipe;
