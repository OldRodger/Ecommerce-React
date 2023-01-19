import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation";

function MainLayout() {
    const bannerVisible = useSelector(store => store.mainSlice.bannerVisible);
    return (
        <Fragment>
            <MainNavigation bannerVisible={bannerVisible} />
            <main>
                <Outlet/>
            </main>
        </Fragment>
    );
}

export default MainLayout;