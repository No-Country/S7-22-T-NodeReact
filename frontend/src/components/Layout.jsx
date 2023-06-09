import HamMenu from "@/components/HamMenu";
import { useState } from "react";
import Menu from "@/components/Menu";
import MenuItem from "@/components/MenuItem";
import SidebarItem from "@/components/SidebarItem";
import { HomeIcon, SubjectsIcon, StarIcon, CalendarIcon, MessageIcon } from "@/assets/icons-sidebar";
import Image from "next/image";
import LogoIcon from "../../public/eduweb.png";

// const menuItems = [
//     { label: 'Inicio', url: '/', icon: <HomeIcon /> },
//     { label: 'Profesores', url: '/profesores', icon: <SubjectsIcon /> },
//     { label: 'Estudiantes', url: '/estudiantes', icon: <StarIcon /> },
//     { label: 'Carreras', url: '/carreras', icon: <CalendarIcon /> },
// ];

const Layout = ({ children, name, menuItems }) => {
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
                    {menuItems && menuItems.map((option, id) => {
                        return (
                            <SidebarItem name={option.label} icon={option.icon} href={option.url} key={id} />
                        )}
                    )}
                </div>
            </div>

            <div className='w-full lg:ml-56 relative'>
                <div className='bg-secondary h-16 flex items-center justify-between px-5'>
                    <h1 className='text-h3 font-semibold'>{ name }</h1>

                    <HamMenu handleMenu={handleMenu} />

                    <Menu isOpen={isOpen}>
                        {menuItems && menuItems.map((item, id) => {
                            return (
                                <MenuItem title={item.label} href={item.url} key={id} />
                            )
                        })}
                    </Menu>

                </div>
                <main className='px-5 pb-5'>
                    { children }
                </main>
            </div>
        </div>
    )
}

export default Layout;