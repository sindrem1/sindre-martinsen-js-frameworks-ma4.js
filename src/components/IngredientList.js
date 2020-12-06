import React from "react"

function IngredientList({ ingredients }) {

	const SplitAtComma = ingredients.split(",")
	return (
		<ul>
			{SplitAtComma.map(function (ingredients) {
				return <li>{ingredients}</li>
			})}
		</ul>
	)
}

export default IngredientList;