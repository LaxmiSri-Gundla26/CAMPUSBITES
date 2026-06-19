import dosa from "../assets/images/dosa.jpg";
import idli from "../assets/images/idli.jpg";
import vegBiryani from "../assets/images/veg-biryani.jpg";
import chickenBiryani from "../assets/images/chicken-biryani.jpg";
import paneerRoll from "../assets/images/paneer-roll.jpg";

const foodData = [
  {
    id: 1,
    name: "Masala Dosa",
    price: 50,
    category: "Breakfast",
    type: "veg",
    image: dosa,
  },
  {
    id: 2,
    name: "Idli Sambar",
    price: 40,
    category: "Breakfast",
    type: "veg",
    image: idli,
  },
  {
    id: 3,
    name: "Veg Biryani",
    price: 80,
    category: "Lunch",
    type: "veg",
    image: vegBiryani,
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: 120,
    category: "Lunch",
    type: "nonveg",
    image: chickenBiryani,
  },
  {
    id: 5,
    name: "Paneer Roll",
    price: 60,
    category: "Snack",
    type: "veg",
    image: paneerRoll,
  },
];

export default foodData;