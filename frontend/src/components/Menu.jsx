const Menu = ({ children, isOpen }) => {
    return (
        <nav className={`${isOpen ? 'absolute z-50 left-5 right-5 top-16' : 'hidden'} md:hidden`}>
            <ul className='flex flex-col items-center gap-2.5 bg-primary w-full p-5 rounded-lg'>
                { children }
            </ul>
        </nav>
    )
}

export default Menu;