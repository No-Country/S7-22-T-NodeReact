import Link from 'next/link';

const MenuItem = ({ title, href }) => {
    return (
        <Link href={href} className='w-full'>
            <li className='text-white text-center py-2 px-4 rounded-md hover:bg-white/10'>
                { title }
            </li>
        </Link>
    )
}

export default MenuItem;