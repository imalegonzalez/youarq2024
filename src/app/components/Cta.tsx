import Link from 'next/link';
function Cta() {
    return (
        <div className="fixed flex min-w-full pointer-events-none  justify-center bottom-0 mb-3 p-4">
            <Link href={"https://youarq.com/quieroremodelar"} className='h-8 z-10 items-center justify-center pointer-events-auto bg-white flex px-10 py-12 rounded-full  max-w-full w-full sticky md:max-w-lg shadow-lg ring-1 ring-slate-900/10'>
                <p className='text-xl text-red-700'>Quiero remodelar mi casa </p>
            </Link>
        </div>
    );
}

export default Cta; 

