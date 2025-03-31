'use client'
import type { OfferSection, Product } from "@/types";
import { Hotel, PersonStanding, Soup, Wifi } from "lucide-react";
import Image from "next/image";

type H = {
    offerData: OfferSection
    products: Product[];
}

export default function Offer({ offerData, products }: H) {

    const handleCheckout = async (product: Product) => {
        const res = await fetch("/api/checkout-session", {
            method: "POST",
            body: JSON.stringify({ product }),
        });

        const data = await res.json();
        window.location.href = data.url
    }

    console.log(products)
    return (
        <section className="wrapper py-40 space-y-20">
            <div className="space-y-8 flex flex-col items-center justify-center">
                <h2>{offerData.text}</h2>
                <p className="text-center">{offerData.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-4 xl:gap-20">
                {Object.values(products).map((product: Product) => (
                    <div key={product.id} className="h-[550px] w-full relative rounded-xl overflow-hidden">
                        <div className="absolute top-10 left-0 w-[200px] h-[50px] rounded-r-xl shadow-md bg-indigo-700 z-50 flex items-center justify-center">
                            <h4 className="text-center text-2xl">{product.price} zł</h4>
                        </div>
                        <div className="relative object-cover h-[340px]">
                            <Image src={`http://localhost:1337${product.image.url}`} fill className="object-cover" alt={product.image.alternativeText || ''} />
                        </div>
                        <div className="bg-gray-800 z-50 w-full h-[210px] p-4 flex justify-center items-center">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <h3>{product.name}</h3>
                                    <div className="flex gap-4">
                                        {product?.Dinner ? <span className="text-xs flex flex-col items-center"><Soup size={16} />Dinner</span> : <></>}
                                        {product?.Wifi ? <span className="text-xs flex flex-col items-center"><Wifi size={16} />Dinner</span> : <></>}
                                        {product?.Hotel ? <span className="text-xs flex flex-col items-center"><Hotel size={16} />Dinner</span> : <></>}
                                        {product?.guide ? <span className="text-xs flex flex-col items-center"><PersonStanding size={16} />Dinner</span> : <></>}
                                    </div>
                                </div>

                                <p>{product.description}</p>
                                <div className="">
                                    <button className="bg-indigo-700 px-4 py-2 rounded-md cursor-pointer" onClick={() => handleCheckout(product)}>{product.cta.text}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}