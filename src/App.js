import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-deliveroo-api.herokuapp.com"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Hero restaurant={data.restaurant} />
      {/* Liste de catégories */}
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Category key={index} category={category} />
          )
        );
      })}
    </div>
  );
}

export default App;
