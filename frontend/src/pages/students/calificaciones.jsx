import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import Router from "next/router";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> }
];

const subjects = [
    { name: 'Matemáticas', status: 'Aprobado' },
    { name: 'Física', status: 'Cursando' },
    { name: 'Química', status: 'Pendiente' },
    { name: 'Programación', status: 'Aprobado' },
    { name: 'Inglés', status: 'Aprobado' },
    { name: 'Historia', status: 'Cursando' },
    { name: 'Filosofía', status: 'Pendiente' },
    { name: 'Economía', status: 'Cursando' },
    { name: 'Derecho', status: 'Reprobado' },
    { name: 'Psicología', status: 'Reprobado' },
    { name: 'Biología', status: 'Reprobado' },
]

const handleBack = () => {
    Router.back();
}

const Calificaciones = () => {
    return (
        <Layout name={'Calificaciones'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Carrera: Ingeniería informática</p>
            </div>

            <div className='grid grid-cols-4 gap-5 mt-5'>
                <div>
                    <h3 className='text-h4 mb-2.5'>Aprobadas</h3>
                    <div className='flex flex-col gap-5'>
                        {subjects.filter(subject => subject.status === 'Aprobado').map((subject, index) => {
                            return (
                                <div key={index} className='bg-gray-300 flex justify-between items-center p-5 rounded-lg'>
                                    <p className='font-semibold'>{subject.name}</p>
                                    <p className='bg-white px-5 py-1.5 text-success rounded-full'>{subject.status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='text-h4 mb-2.5'>Cursando</h3>
                    <div className='flex flex-col gap-5'>
                        {subjects.filter(subject => subject.status === 'Cursando').map((subject, index) => {
                           return (
                               <div key={index} className='bg-gray-300 flex justify-between items-center p-5 rounded-lg'>
                                   <p className='font-semibold'>{subject.name}</p>
                                   <p className='bg-white px-5 py-1.5 text-interactive rounded-full'>{subject.status}</p>
                               </div>
                           )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='text-h4 mb-2.5'>Pendientes</h3>
                    <div className='flex flex-col gap-5'>
                        {subjects.filter(subject => subject.status === 'Pendiente').map((subject, index) => {
                            return (
                                <div key={index} className='bg-gray-300 flex justify-between items-center p-5 rounded-lg'>
                                    <p className='font-semibold'>{subject.name}</p>
                                    <p className='bg-white px-5 py-1.5 text-placeholder rounded-full'>{subject.status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='text-h4 mb-2.5'>Reprobadas</h3>
                    <div className='flex flex-col gap-5'>
                        {subjects.filter(subject => subject.status === 'Reprobado').map((subject, index) => {
                            return (
                                <div key={index} className='bg-gray-300 flex justify-between items-center p-5 rounded-lg'>
                                    <p className='font-semibold'>{subject.name}</p>
                                    <p className='bg-white px-5 py-1.5 text-danger rounded-full'>{subject.status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Calificaciones;