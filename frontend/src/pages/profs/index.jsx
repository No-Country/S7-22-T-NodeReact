import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import ComCard from "@/components/ComCard";

const menuItems = [
    { label: 'Inicio', url: '/profs', icon: <HomeIcon /> },
    { label: 'Comisiones', url: '/profs/comisiones', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/profs/calificaciones', icon: <StarIcon /> },
    { label: 'Crear tarea', url: '/profs/crear-tarea', icon: <CalendarIcon /> },
];

const Index = () => {
    return (
        <Layout name={'Inicio'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>¡Hola, Esteban!</p>
            </div>

            <div className='mt-5 flex flex-col gap-2.5'>
                <h1 className='text-h3 font-semibold'>Comisiones</h1>
                <p className='md:mb-2.5'>Haz click sobre una comisión para ver los detalles</p>
                <div className='grid md:grid-cols-3 gap-5'>
                    <ComCard title={'Comisión 1'} degree={'Ingeniería informática'} subject={'Matemáticas'} path={'1'} />
                    <ComCard title={'Comisión 2'} degree={'Ingeniería informática'} subject={'Matemáticas'} path={'2'} />
                    <ComCard title={'Comisión 3'} degree={'Ingeniería informática'} subject={'Matemáticas'} path={'3'} />
                </div>
            </div>
        </Layout>
    )
}

export default Index;