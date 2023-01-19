import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";


function DetailPage(props) {
    const { cateID } = useParams();
    const paths = ['jackets', 'hoodie', 'accessory'];
    if(!paths.includes(cateID)){
        throw new Error('Invalid URL');
    }
   
    return (
        <section className="row">
            <ProductList category={cateID} sex={props?.sex}/>
        </section>
    );
}



export default DetailPage;