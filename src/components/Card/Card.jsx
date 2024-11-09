
import style from './Card.module.css';

const Card = ({ item }) => {
    return (
        <div className={style.card}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <p>{item.strMeal}</p>
            <span>{item.strCategory}</span>
        </div>
    )
}

export default Card