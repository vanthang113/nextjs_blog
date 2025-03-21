import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${params.id}`
    );

    if (!response.ok) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const data = await response.json();

    // Định dạng lại dữ liệu cho phù hợp với `ProductDetail`
    const productDetail = {
      id: data.id.toString(),
      name: data.name,
      image: "/images/hero.png", 
      price: "100.000.000",
      fuel: "100l",
      power: "550HP",
    };

    return NextResponse.json(productDetail);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
