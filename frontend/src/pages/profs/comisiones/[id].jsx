import Layout from "@/components/Layout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import { useState } from "react";

const menuItems = [
    { label: 'Inicio', url: '/profs', icon: <HomeIcon /> },
    { label: 'Comisiones', url: '/profs/comisiones', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/profs/calificaciones', icon: <StarIcon /> },
    { label: 'Crear tarea', url: '/profs/crear-tarea', icon: <CalendarIcon /> },
];

const Comisiones = ({ singleCommission }) => {
    const [inputCommission, setInputCommission] = useState({
        students: '',
        title: '',
        link: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputCommission({ ...inputCommission, [e.target.name]: e.target.value });
    }

    return (
        <Layout name={'Comisiones'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>{singleCommission.name}</p>
            </div>

            <div className='py-5'>
                <p>Carrera: {singleCommission.grads[0].name}</p>
                <p>Materia: {singleCommission.subjects[0].name}</p>
                <p>Horario: {singleCommission.schedule}</p>
            </div>

            <div className='flex flex-col gap-5 md:flex-row'>
                <div className='w-full md:w-1/5 md:h-[70vh] flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll overscroll-contain'>
                    <h3 className='text-h4 font-bold'>Alumnos</h3>
                    {singleCommission.students.map((student, id) => {
                        return (
                            <div key={id} className='px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer'>
                                <p className='text-body font-semibold mb-1'>{`${student.firstName} ${student.surname}`}</p>
                                <p className='text-body-sm'>DNI: {student.dni}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='w-full md:w-4/5 md:max-h-[70vh] md:overflow-y-scroll overscroll-contain'>
                    <h3 className='text-h4 font-bold mb-4'>Envío de archivo</h3>
                    <form className='flex flex-col md:flex-row md:gap-5'>
                        <div className='w-4/12'>
                            <InputField label='Alumnos destinatarios' name={'students'} type='text' onChange={handleChange} />
                            <InputField label='Título' type='text' name={'title'} onChange={handleChange} />
                            <InputField label='Documento' type='text' name={'link'} onChange={handleChange} />
                            <InputField label='Fecha de entrega' type='date' name={'date'} onChange={handleChange} />
                            <div className='flex gap-2.5'>
                                <Button text='Enviar' visible={true} type={'button'} variant={'success'} />
                                <Button text='Cancelar' visible={true} type='button' variant={'normal'} />
                            </div>
                        </div>
                        <div className='w-8/12'>
                            <p className='font-medium text-black mb-1'>Mensaje</p>
                            <textarea className='w-full h-96 border border-border focus:border-primary rounded-md px-3 py-2 text-body focus:outline-none'
                                      placeholder='Escriba aquí su mensaje'
                                      onChange={handleChange}
                                      name={'message'} />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Comisiones;

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetch('http://localhost:3001/commissions?_embed=subjects&_embed=grads');
    const commissions = await res.json();
    const [ singleCommission ] = commissions.filter(commission => commission.id === parseInt(id));

    return {
        props: {
            singleCommission
        }
    }
}