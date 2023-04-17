import Layout from "@/components/Layout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import { useState } from "react";

const menuItems = [
    { label: 'Inicio', url: '/profs', icon: <HomeIcon /> },
    { label: 'Comisiones', url: '/profs/comisiones', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/profs/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/profs/anuncios', icon: <CalendarIcon /> },
];

const Anuncios = () => {
    const [formData, setFormData] = useState({
        subject: '',
        date: '',
        commission: '',
        announcement: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        console.log(formData)
    }

    return (
        <Layout name={'Anuncios'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Crear anuncio</p>
            </div>

            <form className='mt-5'>
                <div>
                    <InputField label='Asunto' name='subject' type='text' onChange={handleChange} />
                </div>
                <div className='flex gap-5'>
                    <div className='w-full'>
                        <InputField label='Fecha de publicación' name='date' type='date' onChange={handleChange} value={formData.date} />
                    </div>
                    <div className='w-full'>
                        <p className='font-medium text-black mb-1'>Comisión</p>
                        {/*<InputField label='Comisión' name='commission' type='text' onChange={handleChange} value={formData.commission} />*/}
                        <select onChange={handleChange} name='commission'
                                className='border border-border focus:border-primary w-full rounded-md px-3 py-2.5 text-body focus:outline-none'>
                            <option value='uno'>Comision 1</option>
                            <option value='dos'>Comision 2</option>
                            <option value='tres'>Comision 3</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='font-medium text-black mb-1'>Anuncio (máximo 300 caracteres)</p>
                    <textarea className='w-full h-96 border border-border focus:border-primary rounded-md px-3 py-2 text-body focus:outline-none'
                              placeholder='Escriba aquí su anuncio'
                              name='announcement'
                              value={formData.announcement}
                              onChange={handleChange} />
                </div>

                <div className='flex ml-auto gap-2.5 mt-5 w-4/12'>
                    <Button text='Enviar' variant='primary' type='submit' visible={true} size={'full'} />
                    <Button text='Cancelar' variant='normal' type='button' visible={true} size={'full'} />
                </div>
            </form>
        </Layout>
    )
}

export default Anuncios;