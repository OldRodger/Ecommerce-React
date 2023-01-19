import { Fragment, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { mainSliceAction } from "../redux/slice/main-slice";
import classes from './WelcomePage.module.css';

function WelcomePage(props) {
    const { ref: bannerRef, inView: isIntersecting } = useInView({
        rootMargin: '-90px'
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainSliceAction.setBannerVisible(isIntersecting))
    }, [dispatch, isIntersecting])
    const styling = {
        backgroundImage: `linear-gradient(rgba(5,5,5, .3), rgba(5,5,5, .3)),url('${props.hero}')`
    }

    function activeStyle({ isActive }) {
        return isActive ? classes.active : '';
    }




    return (
        <Fragment>
            <header className={classes.banner} style={styling} ref={bannerRef}></header>
            <nav className={classes.links}>
                <NavLink to="jackets" className={activeStyle}>Jackets</NavLink>
                <NavLink to="hoodie" className={activeStyle}>Hoodies</NavLink>
                <NavLink to="accessory" className={activeStyle}>Accessories</NavLink>
            </nav>
            <Outlet />
        </Fragment>
    );
}

export default WelcomePage;