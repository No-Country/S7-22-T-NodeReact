import HamMenu from "@/components/HamMenu";
import { useState } from "react";
import Menu from "@/components/Menu";
import MenuItem from "@/components/MenuItem";
import SidebarItem from "@/components/SidebarItem";
import { HomeIcon, SubjectsIcon, StarIcon, CalendarIcon, MessageIcon } from "@/assets/icons";
import Image from "next/image";
import LogoIcon from "../../public/eduweb.png";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/professors', icon: <SubjectsIcon /> },
    { label: 'Alumnos', url: '/agregaralumno', icon: <StarIcon /> },
    { label: 'Carreras', url: '/cursos', icon: <CalendarIcon /> },
    { label: 'Perfil', url: '/perfil', icon: <MessageIcon /> },
];

const Layout = ({ children, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex'>
            <div className='hidden lg:fixed lg:w-56 lg:py-5 lg:px-5 lg:h-screen bg-secondary lg:flex lg:flex-col lg:items-center'>
                <div className='lg:w-20 lg:h-20 lg:mb-10 lg:relative'>
                    <Image src={LogoIcon} alt='logo' fill={true} />
                </div>

                <div className='lg:w-full lg:flex lg:flex-col lg:gap-3'>
                    {menuItems.map((option, id) => {
                        return (
                            <SidebarItem name={option.label} icon={option.icon} href={option.url} key={id} />
                        )}
                    )}
                </div>
            </div>

            <div className='w-full lg:ml-56'>
                <div className='bg-secondary h-16 flex items-center justify-between px-5'>
                    <h1 className='text-h3 font-semibold'>{ name }</h1>

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