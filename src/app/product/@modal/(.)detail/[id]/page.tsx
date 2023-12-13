import Modal from "@/Components/Modal";
import getData from "@/Lib/services/products";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <>
      <Modal>
        <div className="container mx-auto my-10">
          <div className="w-1/2 mx-auto border-gray-700 ">
            <img
              src={product.data.image}
              alt=""
              className="w-full object-ceover aspect-square col-span-2"
            />
            <div className="bg-white p-4 px-6">
              <h3>{product.data.title}</h3>
              <p>{product.data.price}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}