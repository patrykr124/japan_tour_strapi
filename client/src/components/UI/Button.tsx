import Link from "next/link";
import { ButtonType } from "@/types"; 


export default function Button({children, href}:ButtonType  ) {
  return (
    <Link className="bg-indigo-700 max-w-[140px] text-lg px-4 py-2 rounded-lg text-center" href={href}>{children}</Link>
  )
}