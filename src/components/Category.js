import { useState } from "react";

const Category = ({ category }) => {
  const [panier, setPanier] = useState([]);

  const handelClick = (meal) => {
    const newPanier = [...panier];
    // modification de la copie
    newPanier.push(meal);
    // mise à jour du state avec la copie
    setPanier(newPanier);
    console.log(newPanier);
  };

  return (
    <div>
      <h2>{category.name}</h2>
      {/* List de produits */}
      {category.meals.map((meal, index) => {
        return (
          <div
            onClick={() => {
              handelClick(meal);
            }}
            className="card"
          >
            <h3>{meal.title}</h3>
            <p>{meal.description.slice(0, 50)}...</p>
            {meal.picture && (
              <img style={{ height: 100 }} src={meal.picture} alt="" />
            )}
            <span>{meal.price} €</span>
            {meal.popular && <span>★ Populaire</span>}
          </div>
        );
      })}

      {panier.map((select_meal, index) => {
        return <p key={index}>{select_meal}</p>;
      })}
    </div>
  );
};

export default Category;
