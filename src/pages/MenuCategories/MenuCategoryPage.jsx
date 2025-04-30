import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';
import './MenuCategoryPage.css';

const MenuCategoryPage = () => {
    const { category } = useParams();
    const { food_list } = useContext(StoreContext);

    // Format category name for comparison (convert kebab-case to title case)
    const formattedCategory = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Filter foods based on the category
    const categoryFoods = food_list.filter(food => 
        food.category.toLowerCase() === formattedCategory.toLowerCase()
    );

    return (
        <div className="menu-category-page">
            <div className="menu-category-header">
                <h1>{formattedCategory}</h1>
                <p>Explore our delicious {formattedCategory.toLowerCase()} options</p>
            </div>
            <div className="menu-category-grid">
                {categoryFoods.length > 0 ? (
                    categoryFoods.map((food) => (
                        <FoodItem 
                            key={food.id} 
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            description={food.description}
                            image={food.image}
                        />
                    ))
                ) : (
                    <div className="no-items-message">
                        <p>No items found in this category.</p>
                        <button onClick={() => window.history.back()}>Go Back</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCategoryPage; 