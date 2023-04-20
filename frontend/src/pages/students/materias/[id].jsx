import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import Button from "@/components/Button";
import Router from "next/router";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> },
];

const studyPlan = [
    { name: 'Unidad 1', description: 'Álgebra: ecuaciones de primer y segundo grado, sistemas de ecuaciones, ' +
            'funciones lineales y cuadráticas, factorización y simplificación de expresiones algebraicas.' },
    { name: 'Unidad 2', description: 'Geometría: ángulos, triángulos, cuadriláteros, circunferencias, áreas y' +
            ' perímetros de figuras planas, proporcionalidad y semejanza.' },
    { name: 'Unidad 3', description: 'Trigonometría: identidades trigonométricas, funciones trigonométricas ' +
            'y sus gráficas, resolución de triángulos y problemas trigonométricos.' },
    { name: 'Unidad 4', description: 'Estadística y Probabilidad: medidas de tendencia central, desviación estándar, ' +
            'distribuciones de frecuencia, probabilidad simple y condicional.' }
];

const handleBack = () => {
    Router.back();
}

const Materia = ({ subject }) => {
    return (
        <Layout name={subject.name} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Programa de estudio</p>
                <Button onClick={handleBack} visible={true} type={'button'} text={'Volver'} />
            </div>

            <div className='mt-5 h-[80vh] flex flex-col md:flex-row items-start gap-8 md:gap-32'>
                <div className='md:w-2/6'>
                    <h3 className='text-h3 mb-2.5'>Objetivos generales</h3>
                    <p>El objetivo general de la materia es que el alumno logre desarrollar habilidades matemáticas
                        y fomentar la comprensión y aplicación de los conceptos matemáticos fundamentales,
                        además de fomentar el pensamiento crítico, el trabajo en equipo y la preparación
                        para futuros estudios y carreras. <br /> <br /> Duración: anual
                    </p>
                </div>
                <div className='md:w-4/6'>
                    <h3 className='text-h3 mb-2.5'>Programa de estudio</h3>
                    <ul className='flex flex-col gap-1.5'>
                        {studyPlan.map((unit, index) => {
                            return (
                                <li key={index} className='flex gap-2.5 pb-10 mb-10 border-b first:pt-10'>
                                    <p className='text-h4 w-1/6'>{unit.name}</p>
                                    <p className='w-5/6'>{unit.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Materia;

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.params;
    const res = await fetch(`http://localhost:3001/subjects/${id}?_embed=grads&_embed=commissions`);
    const subject = await res.json();

    return {
        props: {
            subject
        }
    };
}