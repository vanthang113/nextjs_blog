"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./productDetail.module.css";
import { ProductDetail as ProductDetailType } from "@/constants/types/homeType";

const ProductDetailPage = () => { 
  const pathname = usePathname();
  const router = useRouter();
  const [product, setProduct] = useState<ProductDetailType | null>(null);

  useEffect(() => {
    const id = pathname.split("/").pop();
    if (!id) return;

    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [pathname]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
    <button onClick={() => router.push("/")}></button>
      <h1 className={styles.title}>{product.name}</h1>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.description}>{product.description}</p>
      </div>
  );
};

export default ProductDetailPage; 
