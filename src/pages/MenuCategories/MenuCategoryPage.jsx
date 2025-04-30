import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import './MenuCategoryPage.css';

const MenuCategoryPage = () => {
    const { category } = useParams();
    const { food_list } = useContext(StoreContext);

    // Filter foods based on the category from URL
    const categoryFoods = food_list.filter(food => 
        food.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="menu-category-page">
            <div className="menu-category-header">
                <h1>{category}</h1>
                <p>Explore our delicious {category.toLowerCase()} options</p>
            </div>
            <FoodDisplay category={category} />
        </div>
    );
};

export default MenuCategoryPage; 