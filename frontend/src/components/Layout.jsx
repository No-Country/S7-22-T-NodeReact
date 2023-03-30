import HamMenu from "@/components/HamMenu";
import { useState } from "react";
import Menu from "@/components/Menu";
import MenuItem from "@/components/MenuItem";

const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Profesores', url: '/profesores' },
    { label: 'Alumnos', url: '/alumnos' },
    { label: 'Cursos y carreras', url: '/cursos' },
    { label: 'Perfil', url: '/perfil' },
];

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex'>
            <div className='hidden lg:fixed lg:w-56 lg:h-screen bg-secondary lg:flex lg:flex-col'>
                {menuItems.map((option, id) => {
                    return (
                        <div key={id} className='flex items-center h-20'>
                            <p className='text-body font-semibold'>{option.label}</p>
                        </div>
                    )}
                )}
            </div>

            <div className='w-full lg:ml-56'>
                <div className='bg-secondary h-16 flex items-center justify-between px-5'>
                    <h1 className='text-h3 font-semibold'>Admin</h1>

                    <HamMenu handleMenu={handleMenu} />

                    <Menu isOpen={isOpen}>
                        {menuItems.map((item, id) => {
                            return (
                                <MenuItem title={item.label} href={item.url} key={id} />
                            )
                        })}
                    </Menu>

                </div>
                <main className='px-5'>
                    { children }
                </main>
            </div>
        </div>
    )
}

export default Layout;