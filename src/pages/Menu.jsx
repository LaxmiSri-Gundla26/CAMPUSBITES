import Sidebar from "../components/Sidebar";
import FoodCard from "../components/FoodCard";
import Cart from "../components/Cart";
import foodData from "../data/foodData";

const Menu = () => {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1 className="section-title">
          🍽 Our Menu
        </h1>

        <div className="food-grid">

          {foodData.map((food) => (
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

export default Menu;