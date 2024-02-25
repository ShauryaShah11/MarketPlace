import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProdcutCard";
import { getProductByCategoryId } from "../Services/functions/product";

function ProductCategory(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await getProductByCategoryId(id);
            setProduct(response);
            console.log(response);
        }
        fetchProductData();
    }, [id])
    return(
        <div className="container mx-auto mt-10 mb-10">
            <ProductCard products={product} />
        </div>
    )
}

export default ProductCategory;