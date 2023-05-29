

export default function Form() {
  return (
    <form className="flex flex-col">
        <label htmlFor="email" className="text-sm font-bold mb-2">Email address</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="email@company.com"
        className="px-4 py-2 border-[1px] border-Grey rounded-lg mb-6"
        />
        <button className="bg-Dark-Slate-Grey text-White py-2 rounded-lg">
        Subscribe to the monthly newsletter
        </button> 
    </form>
  )
}
