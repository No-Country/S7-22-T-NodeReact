import Link from "next/link";

const SidebarItem = ({ icon, name, href }) => {
    return (
        <Link href={href} className='w-full'>
            <div className='rounded-md px-5 py-2.5 flex items-center gap-3 lg:hover:bg-primary lg:hover:text-white'>
                <div className='lg:w-6 lg:h-6 lg:flex lg:justify-center lg:items-center'>{icon}</div>
                <p className='text-body font-semibold'>{name}</p>
            </div>
        </Link>
    )
}

export default SidebarItem;