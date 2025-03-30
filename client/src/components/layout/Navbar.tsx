import { NavItems } from "@/data/NavItems";

export default function Navbar() {
  return (
    <header className=" z-50 flex items-center justify-center  ">
      <div className="wrapper flex items-center justify-between w-full py-4 backdrop-blur-lg bg-black/20 shadow-md  mt-1 fixed top-0 inset-x-0 rounded-lg z-50">
        <div className="text-3xl uppercase">Japanly</div>
        <div className="">
          {NavItems.map((item, index) => (
            <span key={index} className="mx-4">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}