import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../constants/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import Search from "./SearchRecipe";

function RecipeList() {

    const [recipes, setRecipes] = useState([]);
    const [searchableRecipes, setSearchableRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setSearchableRecipes(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const MakeSearchable = function (e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = recipes.filter(function (recipe) {
            const lowerCaseName = recipe.title.toLowerCase();
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });

        setSearchableRecipes(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    console.log(recipes);
    console.log(searchableRecipes);

    return (
        <>
            <Row>
                <Search handleSearch={MakeSearchable} />
                {searchableRecipes.map(recipe => {
                    const { title, thumbnail, ingredients, href } = recipe;
                    return (
                        <Col sm={6} md={2} key={title}>
                            <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} href={href} key={title} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default RecipeList;