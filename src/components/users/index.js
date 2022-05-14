import React from ".";

const users = [
    {
        key: Date.now(),
        firstName: 'Ahad',
        lastName: 'Lag',
        gender: 'male',
        phone: '09122972275',
        email: 'lindsay.walton@example.com',
        role: 'admin'
    },
]

export default function Users (){
    return(
        <div className='sm:absolute w-full mt-10'>
            <div className='sm:absolute w-full'>
                <div className='sm:w-2/5 reletive mx-auto text-center p-9 sm:px-14 sm:py-3 sm:bg-[#f5f7f7] bg-slate-400 border-4 border-violet-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)]'>
                    <div className='text-2xl font-bold'>
                        مدیریت کاربران
                    </div>
                </div>
            </div>
            <div className='container sm:w-4/5 w-full mx-auto'>
                <div className='p-6 sm:px-14 sm:pb-7 sm:pt-12 mt-7 bg-white rounded-lg md:rounded-xl lg:rounded-2xl mb-5 shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)] border-2 border-violet-200'>
                    <div className="sm:flex sm:items-center mb-4">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">لیست کاربران</h1>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                کاربر جدید
                            </button>
                        </div>
                    </div>
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
                    <div className="px-4 sm:px-6 lg:px-8 mt-5">
                        <div className="mt-5 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg border-2 border-violet-200">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                                    ردیف
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                                    نام
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                                    نام خانوادگی
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                                    جنسیت
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                                    نقش
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                                    شماره همراه
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                                    ایمیل
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                            {
                                                users.map((user,index) => (
                                                <tr key={user.key}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {index + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.firstName}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.lastName}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.gender}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.role}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.phone}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ml-2"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}