import { Link } from 'react-router-dom';

import style from './Card.module.css';

const Card = ({ item }) => {


    return (
        <div className={style.card}>
            <Link to={'/detalhes/' + item.idMeal} className={style.link}>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <p>{item.strMeal}</p>
                <span>{item.strCategory}</span>
            </Link>
        </div>
    )
}

export default Card