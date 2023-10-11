import { useState } from "react";
import { Product } from "../../models/product.model";

interface ProductProps {
    product: Product
}

export function ProductCard ({product}: ProductProps) {
    const [datails, setDetails] = useState(false);

    const btnBgClassname = datails ? 'bg-yellow-400': 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassname]; 

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6"/>
            <p>{product.title}</p>
            <span className="font-bold"> {product.price} </span>
            <button className={btnClasses.join(' ')}
            onClick={()=> setDetails(prev => !prev)}
            > 
            {datails ? 'Hide' : 'Show'}
            </button>
            {datails && <div>
                <p>{product.description} </p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating?.rate}</span> </p>
            </div>
                
            }
        </div>
    )
}