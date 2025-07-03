import FavoriteButton from "@/components/favorite-btn";
import Image from "next/image";

export default function ProductDetail({ product }) {
    

    return (
        <div className="p-8">
            <Image src={product.image}
                alt={product.name}
                className="w-fit h-48 object-cover rounded-t-lg"
                width={200}
                height={200}
                
            />
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            
            <FavoriteButton productId={product.id} />
        </div>
    );  
}

export async function getStaticPaths(){
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const paths = products.map((product) => ({
        params : { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}