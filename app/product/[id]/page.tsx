"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductDetail } from "@/constants/types/homeType";

const ProductDetailPage = () => {
    const pathname = usePathname(); // Lấy URL hiện tại
    const router = useRouter();
    const [product, setProduct] = useState<ProductDetail | null>(null);

    useEffect(() => {
        if (!pathname) return;

        // Tách ID từ URL
        const id = pathname.split("/").pop(); // Lấy phần cuối cùng của URL làm ID
        if (!id) return;

        //  gọi API
        const productData: ProductDetail = {
            id,
            name: `Product ${id}`,
            description: `This is the detail of product ${id}`,
            image: "/images/hero.png",
            price: "",
            fuel: "",
            power: ""
        };
        setProduct(productData);
    }, [pathname]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="id-card-items" style={{ padding: "20px" }}>
            <button onClick={() => router.push("/")}>Back to Home</button>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} width="300" />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetailPage;
