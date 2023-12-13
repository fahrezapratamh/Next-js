import { getData, getDataId } from "@/Lib/firebase/services";
import { NextResponse, NextRequest } from "next/server";
const products = [
  {
    id: 1,
    title: "Nike Dunk Low Retro",
    description: "product 1 description",
    price: 1920000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8409c3b2-add4-4b18-927f-2767435a660b/dunk-low-retro-shoes-Zc0601.png",
  },
  {
    id: 2,
    title: "Nike Air Max",
    description: "product 2 description",
    price: 2480000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png",
  },
  {
    id: 3,
    title: "Nike Air Force",
    description: "product 3 description",
    price: 1549000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 4,
    title: "Nike Air Force",
    description: "product 3 description",
    price: 1549000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 5,
    title: "Nike Air Max",
    description: "product 2 description",
    price: 2480000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png",
  },
  {
    id: 6,
    title: "Nike Air Max",
    description: "product 2 description",
    price: 2480000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png",
  },
  {
    id: 7,
    title: "Nike Dunk Low Retro",
    description: "product 1 description",
    price: 1920000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8409c3b2-add4-4b18-927f-2767435a660b/dunk-low-retro-shoes-Zc0601.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const data = await getDataId("products", id);
    if (data) {
      return NextResponse.json({
        status: 200,
        message: "good Request",
        data: data,
      });
    }
    return NextResponse.json({
      status: 400,
      message: "bad Request",
      data: {},
    });
  }
  const products = await getData("products");
  return NextResponse.json({
    status: 200,
    message: "good Request",
    data: products,
  });
}
