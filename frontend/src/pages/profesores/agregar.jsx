import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";
import { useRouter } from 'next/router';
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/carreras', icon: <CalendarIcon /> },
];

const Agregar = () => {
    const [newProfessor, setNewProfessor] = useState({
        id: '',
        firstName: '',
        surname: '',
        age: '',
        email: '',
        dni: '',
        dateOfBirth: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    const router = useRouter();

    const validate = () => {
        const errors = {};

        if (!newProfessor.firstName) errors.firstName = 'El nombre es obligatorio';
        if (!newProfessor.surname) errors.surname = 'El apellido es obligatorio';
        if (!newProfessor.age) errors.age = 'La edad es obligatoria';
        if (!newProfessor.email) errors.email = 'El email es obligatorio';
        if (!newProfessor.dni) errors.dni = 'El DNI es obligatorio';
        if (!newProfessor.dateOfBirth) errors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
        if (!newProfessor.phone) errors.phone = 'El teléfono es obligatorio';

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = validate();

        if (Object.keys(errors).length) return setErrors(errors);

        await createProfessor();
        await router.push('/profesores');
    }

    const handleChange = (e) => {
        setNewProfessor({
            ...newProfessor,
            [e.target.name]: e.target.value
        })
    }

    const createProfessor = async () => {
        try {
            await fetch('http://localhost:3001/professors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProfessor)
            })
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
                        <InputField label={'Nombre'} type={'text'} name={'firstName'} onChange={handleChange} error={errors.firstName ? errors.firstName : null} />
                        <InputField label={'Apellido'} type={'text'} name={'surname'} onChange={handleChange} error={errors.surname} />
                        <InputField label={'DNI'} type={'number'} name={'dni'} onChange={handleChange} error={errors.dni} />
                        <InputField label={'Fecha de nacimiento'} type={'date'} name={'dateOfBirth'} onChange={handleChange} error={errors.dateOfBirth} />
                        <InputField label={'Email'} type={'email'} name={'email'} onChange={handleChange} error={errors.email} />
                    </div>
                    <div className='w-full'>
                        <InputField label={'Edad'} type={'number'} name={'age'} onChange={handleChange} error={errors.age} />
                        <InputField label={'Teléfono'} type={'number'} name={'phone'} onChange={handleChange} error={errors.phone} />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Agregar;