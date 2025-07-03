import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductCard({ product }) {
    const router = useRouter();

    const goToDetail = (id) => {
        router.push(`/product/${id}`);
    }

      if (!product || !product.image || !product.title) {
    return <p>Invalid product data</p>;
  }

    return (
        <>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <Image src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
                width={200}
                height={200}
            />
            <h2 className="text-md font-semibold my-4">{product.title}</h2>
            <button onClick={() => goToDetail(product.id)} className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto">
                View Detail
            </button>   
        </div>
        </>
    );
}