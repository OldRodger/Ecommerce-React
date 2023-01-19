import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const totalQuantity = useSelector(store => store.cartSlice.totalQuantity);
    const [detected, setDetected] = useState(false);
    const headerClass =`${classes.header} ${props.bannerVisible || classes.active}`;

    useEffect(() => {
        setDetected(true);
        const timer = setTimeout(() => {
            setDetected(false);
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [totalQuantity])


    return (
        <header className={headerClass} style={{ color: props.color }}>
            <div className={classes.flex}>
                <Link to='/' className={classes.logo}>Logo</Link>
                <nav className={classes.flex}>
                    <NavLink to="men/jackets">Men</NavLink>
                    <NavLink to="women/jackets">Women</NavLink>
                </nav>
            </div>

            <Link to="cart">
                <button type="button" title="wardrobe">
                    <span className="material-symbols-outlined icon">
                        styler
                    </span>
                    <span className={`${classes.badge} ${detected && classes.active}`}>{totalQuantity}</span>
                </button>
            </Link>
        </header>
    );
}

export default MainNavigation;