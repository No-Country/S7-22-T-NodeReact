import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState, useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from 'next/router';
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import Cookies from 'js-cookie';

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

const Agregar = () => {
    const { user } = useContext(UserContext);

    const [newProfessor, setNewProfessor] = useState({
        name: '',
        lastName: '',
        dni: '',
        birthDate: '',
        phone: '',
        address: '',
        role: 2,
        career: 1,
        state: 'active'
    });
    const [errors, setErrors] = useState({});

    const router = useRouter();

    const validate = () => {
        const errors = {};

        if (!newProfessor.name) errors.name = 'El nombre es obligatorio';
        if (!newProfessor.lastName) errors.lastName = 'El apellido es obligatorio';
        if (!newProfessor.dni) errors.dni = 'El DNI es obligatorio';
        if (!newProfessor.birthDate) errors.birthDate = 'La fecha de nacimiento es obligatoria';
        if (!newProfessor.phone) errors.phone = 'El teléfono es obligatorio';
        if (!newProfessor.address) errors.address = 'La dirección es obligatoria';

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = validate();

        if (Object.keys(errors).length) return setErrors(errors);

        await createProfessor();
        await router.push('/admin/profesores');
    }

    const handleChange = (e) => {
        setNewProfessor({
            ...newProfessor,
            [e.target.name]: e.target.value
        })
    }

    const createProfessor = async () => {
       

        try {
            const result = await fetch('https://s7-22-t-nodereact-production.up.railway.app/api/user/post/addUser/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'set-token': user.result.token
                },
                body: JSON.stringify(newProfessor)
            })

            const data = await result.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout name={'Agregar profesor'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Button text={'Guardar'} variant={'success'} visible={true} type={'button'} onClick={handleSubmit} />
            </div>

            <div className='md:w-4/5'>
                <form className='flex flex-col md:flex-row md:gap-5 mt-5 md:mt-0'>
                    <div className='w-full'>
                        <InputField label={'Nombre'} type={'text'} name={'name'} onChange={handleChange} error={errors.name ? errors.name : null} />
                        <InputField label={'Apellido'} type={'text'} name={'lastName'} onChange={handleChange} error={errors.lastName} />
                        <InputField label={'DNI'} type={'text'} name={'dni'} onChange={handleChange} error={errors.dni} />
                        <InputField label={'Fecha de nacimiento'} type={'date'} name={'birthDate'} onChange={handleChange} error={errors.birthDate} />
                    </div>
                    <div className='w-full'>
                        <InputField label={'Teléfono'} type={'text'} name={'phone'} onChange={handleChange} error={errors.phone} />
                        <InputField label={'Dirección'} type={'text'} name={'address'} onChange={handleChange} error={errors.address} />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Agregar;