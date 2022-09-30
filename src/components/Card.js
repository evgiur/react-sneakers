function Card (props) {
    return (
        <div className="itemCard">
    
            <div className="favorite">
                <img src="img/unliked.svg" alt="Unliked" />
            </div>

            <img
                width={133}
                height={112}
                src="img/sneakers/1.jpg"
                alt="Sneakers"
            />

            <h5>{props.title}</h5>

            <div className="cardTop">
                <div className="cardPrice">
                    <span>Price: </span>
                    <b>200 $</b>
                </div>

                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>

    )
}

export default Card
