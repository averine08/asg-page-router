export default function ProductDetail({ product }) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            {/* <img src={product.image} alt={product.title} className="w-full h-auto mb-4" /> */}
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Add to Cart
            </button>
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