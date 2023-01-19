import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation";

function NotFoundPage() {
   const error =  useRouteError();
    const styling = {
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center'
    }
    return (
        <Fragment>
            <MainNavigation/>
            <main style={styling}>
                <h1 style={{fontSize: '18rem'}}>
                    {error?.message ?? 404}
                </h1>
            </main>
        </Fragment>
    );
}

export default NotFoundPage;