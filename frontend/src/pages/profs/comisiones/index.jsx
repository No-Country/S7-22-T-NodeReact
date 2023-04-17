import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/profs', icon: <HomeIcon /> },
    { label: 'Comisiones', url: '/profs/comisiones', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/profs/calificaciones', icon: <StarIcon /> },
    { label: 'Crear tarea', url: '/profs/crear-tarea', icon: <CalendarIcon /> },
];

const Index = () => {
    return (
        <Layout name={'Comisiones'} menuItems={menuItems}>
            Comisiones page content here :)
        </Layout>
    )
}

export default Index;