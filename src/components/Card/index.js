import styles from './Card.module.scss';


function Card (props) {
    return (
        <div className={styles.itemCard}>
    
            <div className={+styles.favorite} onClick={props.onFavorite}>
                <img src="img/unliked.svg" alt="Unliked" />
            </div>

            <img
                width={133}
                height={112}
                src={props.imageUrl}
                alt="Sneakers"
            />

            <h5>{props.title}</h5>

            <div className="cardTop">
                <div className="cardPrice">
                    <span>Price: </span>
                    <b>{props.price} $</b>
                </div>

                <button className="button" onClick={props.onPlus}>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>

    )
}

export default Card
