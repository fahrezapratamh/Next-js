
import getData from "@/Lib/services/products";
import Link from 'next/link';

type ProductPageProps = { params: { slug: string } };

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};
export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {products.data.length > 0 &&
          products.data.map((product: Product) => (
            <>
              <div
              key={product.id}
                className="mx-2 group my-10 flex w-64 flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
              >
                <div className="relative flex h-60 overflow-hidden">
                  <Link href={`/product/detail/${product.id}`}>
                  <img
                    className="absolute top-0 right-0 h-full w-full object-cover"
                    src={product.image}
                    alt="product image"
                  />
                  </Link>
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                    <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col my-2 mx-2">
                  <p className="">{product.name}</p>
                  <p className="">{product.category}</p>
                  <div className="">
                    <h1 className="text-bold text-2xl">
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </h1>
                    <button className="h-10 my-2 rounded-lg text-white w-full bg-sky-500">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
