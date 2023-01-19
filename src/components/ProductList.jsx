import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../redux/slice/cart-slice";
import ProductItem from "./ProductItem";

function ProductList(props) {
    const productSlice = useSelector((store) => store.mainSlice.products);
    let category = productSlice.filter(prod => prod.category === props.category);
    if (props.sex) {
        category = category.filter(prod => prod.sex === props.sex || prod.sex === 'N');
    }

    const dispatch = useDispatch();

    const handleAddToCart = (prod) => {
        const newProd = {
            id: prod.id,
            category: prod.category,
            img: prod.img,
            price: +prod.price,
            sex: prod.sex
        }

        dispatch(cartSliceActions.addToCart(newProd))

    }
    
    let products = <h1 align="center">Out of stock</h1>

    if (category.length) {
        products = <div className="grid">
            {category.map(({ id, quan, ...rest }) => <ProductItem
                key={id}
                {...rest}
                clicked={handleAddToCart.bind(null, { id, quan, ...rest })}
            />)}
        </div>
    }



   

    return products;
}

export default ProductList;