import Layout from "@/components/Layout";
import InputField from "@/components/InputField";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import { useState } from "react";
import Button from "@/components/Button";

const menuItems = [
    { label: 'Inicio', url: '/profs', icon: <HomeIcon /> },
    { label: 'Comisiones', url: '/profs/comisiones', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/profs/calificaciones', icon: <StarIcon /> },
    { label: 'Crear tarea', url: '/profs/crear-tarea', icon: <CalendarIcon /> },
];

const Calificaciones = ({ commissions }) => {
    const [marks, setMarks] = useState({
        status: '',
        date: '',
        observations: '',
    });

    const handleChange = (e) => {
        setMarks({
            ...marks,
            [e.target.name]: e.target.value
        })
    }

  return (
    <Layout name={'Calificaciones'} menuItems={menuItems}>
        <div className='flex items-center gap-5 py-4 border-b border-secondary'>
            {commissions.map((com, id) => {
                return (
                    <div key={id}>
                        <h2 className='text-h4'>{com.name}</h2>
                    </div>
                )
            })}
        </div>

        <div className='py-5'>
            <p>Carrera: {commissions[0].grads[0].name}</p>
            <p>Materia: {commissions[0].subjects[0].name}</p>
            <p>Horario: {commissions[0].schedule}</p>
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
            <div className='w-full md:w-1/5 md:h-[70vh] flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll overscroll-contain'>
                <h3 className='text-h4 font-bold'>Alumnos</h3>
                {commissions[0].students.map((student, id) => {
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
                <form className='flex flex-col md:flex-row md:gap-5 bg-gray-200 py-10 px-8 rounded-lg'>
                    <div className='w-4/12'>
                        <div className='mb-5'>
                            <h4 className='text-body font-medium mb-1 block'>Marcar la opción que corresponda</h4>
                            <div className='flex gap-1.5 items-center mb-1'>
                                <input type={'radio'} id={'passed'} name={'status'} value={'passed'} onChange={handleChange} />
                                <label htmlFor={'passed'} className='text-body-sm'>Aprobado</label>
                            </div>
                            <div className='flex gap-1.5 items-center mb-1'>
                                <input type={'radio'} id={'failed'} name={'status'} value={'failed'} onChange={handleChange} />
                                <label htmlFor={'failed'} className='text-body-sm'>Desaprobado</label>
                            </div>
                            <div className='flex gap-1.5 items-center'>
                                <input type={'radio'} id={'regular'} name={'status'} value={'regular'} onChange={handleChange} checked={true} />
                                <label htmlFor={'regular'} className='text-body-sm'>Alumno regular</label>
                            </div>
                        </div>
                        <InputField label='Fecha' name={'students'} type='date' onChange={handleChange} />
                        <div className='flex gap-2.5 w-full mt-44'>
                            <Button text='Guardar' visible={true} type={'button'} variant={'success'} size={'full'} />
                            <Button text='Cancelar' visible={true} type='button' variant={'normal'} size={'full'} />
                        </div>
                    </div>
                    <div className='w-8/12'>
                        <p className='font-medium text-black mb-1'>Observaciones</p>
                        <textarea className='w-full h-96 border border-border focus:border-primary rounded-md px-3 py-2 text-body focus:outline-none'
                                  placeholder='Escriba aquí su mensaje'
                                  onChange={handleChange}
                                  name={'message'} />
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  );
}

export default Calificaciones;

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/commissions?_embed=subjects&_embed=grads');
    const commissions = await res.json();

    return {
        props: {
            commissions
        }
    }
}