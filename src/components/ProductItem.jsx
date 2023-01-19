import classes from './ProductItem.module.css';

function ProductItem(props) {
    let sex = 'unisex'
    if (props.sex === 'M') {
        sex = 'male';
    }

    if (props.sex === 'F') {
        sex = 'female';
    }

    return (
        <div className={classes.product}>
            <img src={props.img} alt="prod" />
            <div>
                <p>{sex} {props.category}</p>
                <p>${props.price}</p>
            </div>
            <div className={classes.hidden}>
                <button type='button' onClick={props.clicked}>Buy Now!</button>
            </div>


        </div>
    );
}

export default ProductItem;