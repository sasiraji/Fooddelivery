import React from 'react';
import './FoodDisplay.css';
import FoodCard from './FoodCard';
import assets from '../../assets/assets';

const foodList = [
  { id: 1, image: assets.food_1, name: 'Golden Crisps', price: 4.99, description: 'Delicious and freshly made Golden Crisps.' },
  { id: 2, image: assets.food_2, name: 'Naan Munchies', price: 4.99, description: 'Delicious and freshly made Naan Munchies.' },
  { id: 3, image: assets.food_3, name: 'Crispy Green Fritters', price: 4.99, description: 'Delicious and freshly made Crispy Green Fritters.' },
  { id: 4, image: assets.food_4, name: 'Crisp ‘n’ Roll Veggies', price: 4.99, description: 'Delicious and freshly made Crisp ‘n’ Roll Veggies.' },
  { id: 5, image: assets.food_5, name: 'Paneer Puff Balls', price: 5.69, description: 'Delicious and freshly made Paneer Puff Balls.' },
  { id: 6, image: assets.food_6, name: 'Egg Zing 65', price: 5.69, description: 'Delicious and freshly made Egg Zing 65.' },
  { id: 7, image: assets.food_7, name: 'Egg Omelette', price: 6.89, description: 'Delicious and freshly made Egg Omelette.' },
  { id: 8, image: assets.food_8, name: 'Crisp ‘n’ Roll Chicken', price: 9.49, description: 'Delicious and freshly made Crisp ‘n’ Roll Chicken.' },
  { id: 9, image: assets.food_9, name: 'Flame-kissed Chicken', price: 9.49, description: 'Delicious and freshly made Flame-kissed Chicken.' },
  { id: 10, image: assets.food_10, name: 'Mutton Joy Balls', price: 9.49, description: 'Delicious and freshly made Mutton Joy Balls.' },
  { id: 11, image: assets.food_11, name: 'Thava Fish', price: 9.49, description: 'Delicious and freshly made Thava Fish.' },
  { id: 12, image: assets.food_12, name: 'Green Glow Soup', price: 4.99, description: 'Delicious and freshly made Green Glow Soup.' },
  { id: 13, image: assets.food_13, name: 'Vegetable Soup', price: 4.99, description: 'Delicious and freshly made Vegetable Soup.' },
  { id: 14, image: assets.food_14, name: 'Soulful Chicken Sip', price: 6.49, description: 'Delicious and freshly made Soulful Chicken Sip.' },
  { id: 15, image: assets.food_15, name: 'Mutton Glory Sip', price: 6.79, description: 'Delicious and freshly made Mutton Glory Sip.' },
  { id: 16, image: assets.food_16, name: 'Mediterranean Salad', price: 4.99, description: 'Delicious and freshly made Mediterranean Salad.' },
  { id: 17, image: assets.food_17, name: 'Continental Salad', price: 4.99, description: 'Delicious and freshly made Continental Salad.' },
  { id: 18, image: assets.food_18, name: 'Salad of the Day', price: 4.99, description: 'Delicious and freshly made Salad of the Day.' },
  { id: 19, image: assets.food_19, name: 'Bun Dabeli', price: 6.49, description: 'Delicious and freshly made Bun Dabeli.' },
  { id: 20, image: assets.food_20, name: 'Sev puri - Potato or Guac', price: 6.49, description: 'Delicious and freshly made Sev puri - Potato or Guac.' },
  { id: 21, image: assets.food_21, name: 'Bun Samosa', price: 6.49, description: 'Delicious and freshly made Bun Samosa.' },
  { id: 22, image: assets.food_22, name: 'Papdi Chaat', price: 6.49, description: 'Delicious and freshly made Papdi Chaat.' },
  { id: 23, image: assets.food_23, name: 'Ragada Chaat', price: 6.49, description: 'Delicious and freshly made Ragada Chaat.' },
  { id: 24, image: assets.food_24, name: 'Bhel Puri', price: 6.49, description: 'Delicious and freshly made Bhel Puri.' },
  { id: 25, image: assets.food_25, name: 'Pulav (Garden Fresh)', price: 10.99, description: 'Delicious and freshly made Pulav (Garden Fresh).' },
  { id: 26, image: assets.food_26, name: 'Crunchy Podi Rice', price: 10.99, description: 'Delicious and freshly made Crunchy Podi Rice.' },
  { id: 27, image: assets.food_27, name: 'Vibrant Veg Pilaf', price: 10.99, description: 'Delicious and freshly made Vibrant Veg Pilaf.' },
  { id: 28, image: assets.food_28, name: 'Chicken Satti Soru', price: 13.99, description: 'Delicious and freshly made Chicken Satti Soru.' },
  { id: 29, image: assets.food_29, name: 'Mutton Satti Soru', price: 15.99, description: 'Delicious and freshly made Mutton Satti Soru.' },
  { id: 30, image: assets.food_30, name: 'Kathi rolls - Paneer', price: 13.99, description: 'Delicious and freshly made Kathi rolls - Paneer.' },
  { id: 31, image: assets.food_31, name: 'Kathi rolls - Mixed Vegetables', price: 13.99, description: 'Delicious and freshly made Kathi rolls - Mixed Vegetables.' },
  { id: 32, image: assets.food_32, name: 'Kathi rolls - Egg', price: 11.99, description: 'Delicious and freshly made Kathi rolls - Egg.' },
  { id: 33, image: assets.placeholder, name: 'Kathi rolls - Chicken', price: 13.99, description: 'Delicious and freshly made Kathi rolls - Chicken.' },
  { id: 34, image: assets.placeholder, name: 'Kathi rolls - Mutton', price: 15.99, description: 'Delicious and freshly made Kathi rolls - Mutton.' },
  { id: 35, image: assets.placeholder, name: 'Naan', price: 3.99, description: 'Delicious and freshly made Naan.' },
  { id: 36, image: assets.placeholder, name: 'Flaky Delight Parotta (1 pc)', price: 3.99, description: 'Delicious and freshly made Flaky Delight Parotta (1 pc).' },
  { id: 37, image: assets.placeholder, name: 'Wheat Roti (1 pc)', price: 2.49, description: 'Delicious and freshly made Wheat Roti (1 pc).' },
  { id: 38, image: assets.placeholder, name: 'Chapati (2 pcs)', price: 3.99, description: 'Delicious and freshly made Chapati (2 pcs).' },
  { id: 39, image: assets.placeholder, name: 'Idli (2 pcs)', price: 4.29, description: 'Delicious and freshly made Idli (2 pcs).' },
  { id: 40, image: assets.placeholder, name: 'Dosa', price: 11.99, description: 'Delicious and freshly made Dosa.' },
  { id: 41, image: assets.placeholder, name: 'Chopsy Parotta - Egg (Kothu)', price: 13.99, description: 'Delicious and freshly made Chopsy Parotta - Egg (Kothu).' },
  { id: 42, image: assets.placeholder, name: 'Chopsy Parotta - Chicken (Kothu)', price: 13.99, description: 'Delicious and freshly made Chopsy Parotta - Chicken (Kothu).' },
  { id: 43, image: assets.placeholder, name: 'Curry Chefs Choice', price: 9.99, description: 'Delicious and freshly made Curry Chefs Choice.' },
  { id: 44, image: assets.placeholder, name: 'Lentil Tomato Curry', price: 9.99, description: 'Delicious and freshly made Lentil Tomato Curry.' },
  { id: 45, image: assets.placeholder, name: 'Mutter Curry Semi Gravy', price: 9.99, description: 'Delicious and freshly made Mutter Curry Semi Gravy.' },
  { id: 46, image: assets.placeholder, name: 'Butter Paneer Masala', price: 10.99, description: 'Delicious and freshly made Butter Paneer Masala.' },
  { id: 47, image: assets.placeholder, name: 'Chicken Curry', price: 12.49, description: 'Delicious and freshly made Chicken Curry.' },
  { id: 48, image: assets.placeholder, name: 'Goat Curry', price: 14.99, description: 'Delicious and freshly made Goat Curry.' },
  { id: 49, image: assets.placeholder, name: 'Butter Chicken Masala', price: 12.49, description: 'Delicious and freshly made Butter Chicken Masala.' },
  { id: 50, image: assets.placeholder, name: 'Business Lunch - Veg', price: 11.99, description: 'Delicious and freshly made Business Lunch - Veg.' },
  { id: 51, image: assets.placeholder, name: 'Business Lunch - Chicken', price: 13.99, description: 'Delicious and freshly made Business Lunch - Chicken.' },
  { id: 52, image: assets.placeholder, name: 'Business Lunch - Mutton', price: 15.99, description: 'Delicious and freshly made Business Lunch - Mutton.' },
  { id: 53, image: assets.placeholder, name: 'Thirunelveli Halwa', price: 4.99, description: 'Delicious and freshly made Thirunelveli Halwa.' },
  { id: 54, image: assets.placeholder, name: 'Rabdi', price: 4.99, description: 'Delicious and freshly made Rabdi.' },
  { id: 55, image: assets.placeholder, name: 'Gulab Jamoon (2 pcs)', price: 4.99, description: 'Delicious and freshly made Gulab Jamoon (2 pcs).' },
  { id: 56, image: assets.placeholder, name: 'Carrot Halwa', price: 4.99, description: 'Delicious and freshly made Carrot Halwa.' },
  { id: 57, image: assets.placeholder, name: 'Melting Mysorepak (1 pc)', price: 2.99, description: 'Delicious and freshly made Melting Mysorepak (1 pc).' },
  { id: 58, image: assets.placeholder, name: 'Boondi Laddu (1 pc)', price: 1.99, description: 'Delicious and freshly made Boondi Laddu (1 pc).' },
  { id: 59, image: assets.placeholder, name: 'Tapioca pudding', price: 3.19, description: 'Delicious and freshly made Tapioca pudding.' },
  { id: 60, image: assets.placeholder, name: 'Madurai Donut', price: 3.99, description: 'Delicious and freshly made Madurai Donut.' },
  { id: 61, image: assets.placeholder, name: 'Kara Boondi', price: 3.99, description: 'Delicious and freshly made Kara Boondi.' },
  { id: 62, image: assets.placeholder, name: 'Tamilnadu Mixture', price: 3.99, description: 'Delicious and freshly made Tamilnadu Mixture.' },
  { id: 63, image: assets.placeholder, name: 'Jigarthanda', price: 4.99, description: 'Delicious and freshly made Jigarthanda.' },
  { id: 64, image: assets.placeholder, name: 'Lassi', price: 4.99, description: 'Delicious and freshly made Lassi.' },
  { id: 65, image: assets.placeholder, name: 'Rosemilk', price: 4.99, description: 'Delicious and freshly made Rosemilk.' },
  { id: 66, image: assets.placeholder, name: 'Soda', price: 3.19, description: 'Delicious and freshly made Soda.' },
  { id: 67, image: assets.placeholder, name: 'South Indian Filter Coffee', price: 3.79, description: 'Delicious and freshly made South Indian Filter Coffee.' },
  { id: 68, image: assets.placeholder, name: 'Masala Tea', price: 3.79, description: 'Delicious and freshly made Masala Tea.' },
  { id: 69, image: assets.placeholder, name: 'Chefs Special Combo', price: 14.99, description: 'Delicious and freshly made Chefs Special Combo.' },
  { id: 70, image: assets.placeholder, name: 'Onion Dosa', price: 9.99, description: 'Delicious and freshly made Onion Dosa.' },
  { id: 71, image: assets.placeholder, name: 'Keerai Vadai (3 pcs)', price: 4.99, description: 'Delicious and freshly made Keerai Vadai (3 pcs).' },
  { id: 72, image: assets.placeholder, name: 'Filter Coffee Ice', price: 5.49, description: 'Delicious and freshly made Filter Coffee Ice.' },
];
function FoodDisplay() {
  return (
    <div className="food-display">
      {foodList.map(item => (
        <FoodCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default FoodDisplay;
