import { useState } from "react";
import Sidebar from "../components/Sidebar";
import FoodCard from "../components/FoodCard";
import Cart from "../components/Cart";
import foodData from "../data/foodData";

const Home = () => {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredFoods = foodData.filter((food) => {

    const searchMatch =
      food.name.toLowerCase().includes(search.toLowerCase());

    if (filter === "all")
      return searchMatch;

    if (filter === "veg")
      return searchMatch && food.type === "veg";

    if (filter === "nonveg")
      return searchMatch && food.type === "nonveg";

    return searchMatch && food.category === filter;
  });

  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <div className="hero">

          <div>
            <h1>
              Campus<span>Bite</span>
            </h1>

            <p>
              Fresh food • Quick pickup • Smart token system
            </p>

            <button className="hero-btn">
              Order Now
            </button>
          </div>

        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="filters">

          <button onClick={() => setFilter("all")}>
            All
          </button>

          <button onClick={() => setFilter("veg")}>
            🟢 Veg
          </button>

          <button onClick={() => setFilter("nonveg")}>
            🔴 Non Veg
          </button>

          <button
            onClick={() =>
              setFilter("Breakfast")
            }
          >
            Breakfast
          </button>

          <button
            onClick={() =>
              setFilter("Lunch")
            }
          >
            Lunch
          </button>

          <button
            onClick={() =>
              setFilter("Snack")
            }
          >
            Snacks
          </button>

        </div>

        <h2 className="section-title">
          Popular Menu
        </h2>

        <div className="food-grid">

          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </div>

      <Cart />

    </div>
  );
};

export default Home;