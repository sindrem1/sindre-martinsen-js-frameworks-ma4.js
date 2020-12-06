import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList";


function RecipeItem({ thumbnail, title, ingredients, href }) {
    return (
        <Card key={title}>
            <Card.Img src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <IngredientList ingredients={ingredients} />
                <Card.Link href={href}>View full recipie</Card.Link>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default RecipeItem;