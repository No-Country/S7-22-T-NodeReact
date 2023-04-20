const HamMenu = ({ handleMenu }) => {
    return (
        <div className='inline-block rounded-md bg-primary p-3 space-y-1 cursor-pointer md:hidden lg:hidden' onClick={handleMenu}>
            <span className='block w-4 h-0.5 bg-white'></span>
            <span className='block w-4 h-0.5 bg-white'></span>
            <span className='block w-4 h-0.5 bg-white'></span>
        </div>
    )
}

export default HamMenu;