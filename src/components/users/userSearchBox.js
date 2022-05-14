import React from "./index";

export default function UserSearchBox(){
    return(
        <div className='w-full reletive mx-auto text-center p-9 sm:px-14 sm:py-3 sm:bg-[#f5f7f7] bg-slate-400 border-2 border-violet-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row'>
                <div className="basis-1/3">
                    <label htmlFor="last-name" className="block text-sm text-right font-medium text-gray-700">
                        جستجو
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="basis-1/3 mx-3">
                    <label htmlFor="country" className="block text-sm text-right font-medium text-gray-700">
                        جنسیت
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>مرد</option>
                        <option>زن</option>
                    </select>
                </div>
                <div className="basis-1/3">
                    <label htmlFor="country" className="block text-sm text-right font-medium text-gray-700">
                        نقش
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>
        </div>
    )
}