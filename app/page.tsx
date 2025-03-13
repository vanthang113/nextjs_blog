'use client';
import { Button } from "@/components/Button";
import { TextFiled } from "@/components/TextFiled";
import { IcCarLogo } from "@/public/icons/IcCarLogo";
import {ProductCar} from "@/constants/types/homeType";
import CardProduct from "@/sections/CardProduct/CradProduct";
import { useEffect, useState } from "react";


export default function Home() {

  const[page, setpage] = useState(0);
  const[product, setProduct] = useState<ProductCar[]>([]);

  const getCars = async () => {
    const res = await fetch('https://gorest.co.in/public/v2/users?page=${page + 1}&per_page=6');
    const data = await res.json();
    setProduct([...product, ...data]);
    setpage(page + 1);
  }
  useEffect(() => {
    getCars();
  }, [])

  return (
    <>
    <div className="overflow-hidden none">
      <div className="relative w-full h-full" style={{zIndex: -1, left: '55%', bottom: '5rem'}}>
        <img src="/images/hero-bg.png" style={{height: '45rem'}}/>
      </div>
    </div>
    <div className="absolute top-0 left-10 h-4/6 flex">
        <div className="flex-1 flex items-end">
          <div>
            <h1 className="title-homepage w-4/6">
            Find, book or rent a car, quickly and easily!
            </h1>
            <h2 className="sub-title-homepage w-4/6">
              Streamline your car rental experien with our effortless booking process. 
            </h2>
            <div className="mt-5">
               <Button width="140px" color="accent"> Explore more</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-end">
          <img src="/images/hero.png"/>
        </div>
     </div>
     <div className="px-10">
        <div>
          <div className="title-catalogue">Car Catalogue</div>
          <div className="sub-title-catalogue">Explore the cars you might like</div>
        </div>
        <div className="flex mt-5" style={{columnGap: '.5rem'}}>
            <TextFiled
                color="accent"
                width="300px"
                height="40px"
                placeholder="Enter Search Here"
                startIcon={<IcCarLogo width="24px" height="24px"/>}
            />
            <Button width="100px" height="40px" color="accent">Search</Button>
        </div>
     </div>
          <div className="px-10 py-10" style={{display:'flex', flexWrap:'wrap', columnGap:'4rem', rowGap:'4rem'}}>
            {(product ||[]).map((item: ProductCar, Index: number) => <CardProduct key={Index} itemDetail={item}/>)}
              <div className="flex w-full justify-center">
                  <Button width="130px" height="40px" color="accent" onClick={getCars}>View more</Button>
              </div>
          </div>
    </>
  )
}