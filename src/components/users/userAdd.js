import UserAddForm from "./userAddForm"

export default function UserAdd(){

    return(
        <>
            <div className='sm:w-full mx-auto text-center p-9 sm:px-14 sm:py-3 sm:bg-[#f5f7f7] bg-slate-400 border-4 border-violet-400 rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0_4px_80px_0px_rgba(0,0,0,0.05)]'>
                <div className='text-xl font-bold'>
                    افزودن کاربر جدید
                </div>
            </div>

            {/* import User Add Form */}
            <UserAddForm />
        </>
    )
}