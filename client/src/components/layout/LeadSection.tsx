import type { LeadSection } from "@/types"

type H = {
    leadData: LeadSection
}

export default function LeadSection({ leadData }: H) {
    console.log(leadData)
    return (
        <section className="wrapper">
            <div className="space-y-8">
                <div className="space-y-8">
                    <h2>{leadData.text}</h2>

                    <p>{leadData.description}</p>
                </div>
                <form className="flex gap-4">
                    <input className="outline-none border-b-[1px] w-full placeholder:text-xl py-4 border-white/50" placeholder="Enter your email" />
                    <button className="bg-indigo-700 w-[160px] text-lg px-4 py-2 rounded-lg text-center">Send</button>
                </form>
            </div>
        </section>
    )
}