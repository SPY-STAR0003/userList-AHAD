import UserAddForm from "./userAddForm"

export default function UserAdd({ showModal , setShowModal }){
    return(
        <>
            <div className='sm:w-full mx-auto text-center p-9 sm:px-14 sm:py-3 sm:bg-[#f5f7f7] bg-slate-400 border-4 border-violet-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)]'>
                <div className='text-xl font-bold'>
                    افزودن کاربر جدید
                </div>
            </div>

            {/* import User Add Forme  */}
            <UserAddForm />

            <hr className="my-4"/>
            <div className='sm:w-full flex justify-between mx-auto px-2 mt-3'>
                <button
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    onClick={() => { setShowModal(false) }}
                >
                    بستن
                </button>
                <button
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                >
                    ذخیره
                </button>
            </div>
        </>
    )
}