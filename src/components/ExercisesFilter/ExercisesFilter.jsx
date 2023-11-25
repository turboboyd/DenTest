import React from 'react'
import { useNavigate } from 'react-router-dom';
import { EXERCISES_ROUTE } from 'utils/const';
import css from './ExercisesFilter.module.css';

function ExercisesFilter({selectedCategory, setSelectedCategory, setCurrentPage, setPath}) {
    const categories = ["Body parts", "Equipment", "Muscles"];

    const navigate = useNavigate()
    const categoryLiClassName = (category) =>
    `${selectedCategory === category ? css.active : ''} ${css.sliderLi}`;

    const handleClick = (category) => {
        if (selectedCategory !== category) {
            setCurrentPage(1)
            navigate(EXERCISES_ROUTE)
        }
        setSelectedCategory(category);
    };

    return (
        <div className={css.categoryContainer}>
            <ul className={css.sliderUl}>
                {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => handleClick(category)}
                        className={categoryLiClassName(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExercisesFilter