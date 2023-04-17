import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> },
];

const Index = () => {
    return (
        <Layout name={'Inicio'} menuItems={menuItems}>
            <p>Estudiantes</p>
        </Layout>
    )
}

export default Index;