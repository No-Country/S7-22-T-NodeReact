import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> }
];

const announcements = [
    { professor: 'Esteban Ceres', subject: 'Matemáticas', date: '2023/04/17', mailSubject: 'Tarea semana', message: 'Se ha subido la tarea de la semana pasada' },
    { professor: 'Pedro Pérez', subject: 'Física', date: '2023/04/17', mailSubject: 'Tarea semana', message: 'Se ha subido la tarea de la semana pasada' },
    { professor: 'Juan López', subject: 'Química', date: '2023/04/17', mailSubject: 'Tarea semana', message: 'Se ha subido la tarea de la semana pasada' },
    { professor: 'Carla Ramirez', subject: 'Lengua', date: '2023/04/17', mailSubject: 'Tarea semana', message: 'Se ha subido la tarea de la semana pasada' },
];

const Anuncios = () => {
    return (
        <Layout name={'Anuncios'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Últimos mensajes</p>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {announcements.map((announcement, index) => {
                    return (
                        <div key={index} className='bg-gray-300 flex flex-col gap-1.5 p-5 rounded-lg mt-5'>
                            <p>Profesor: <span className='font-semibold'>{announcement.professor}</span></p>
                            <p>Materia: <span className='font-semibold'>{announcement.subject}</span></p>
                            <p>Fecha: <span className='font-semibold'>{announcement.date}</span></p>
                            <p>Asunto: <span className='font-semibold'>{announcement.mailSubject}</span></p>
                            <p>Anuncio: <span className='font-semibold'>{announcement.message}</span></p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Anuncios;