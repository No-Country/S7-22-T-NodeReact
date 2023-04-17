import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import Button from "@/components/Button";
import Router from "next/router";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> }
];

const handleBack = () => {
    Router.back();
}

const Calificaciones = () => {
    return (
        <Layout name={'Calificaciones'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Programa de estudio</p>
                <Button onClick={handleBack} visible={true} type={'button'} text={'Volver'} />
            </div>
        </Layout>
    )
}

export default Calificaciones;