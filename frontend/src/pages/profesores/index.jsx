import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Profesores = ({ professors }) => {
    const [selectedProfessor, setSelectedProfessor] = useState({
        id: '',
        firstName: '',
        surname: '',
        age: '',
        email: '',
        dni: '',
        dateOfBirth: '',
        phone: ''
    });
    const [editStatus, setEditStatus] = useState(false);
    const [saveButton, setSaveButton] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        const {name, value} = e.target; // name and value are the attributes of the input field
        setSelectedProfessor((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

    const editForm = () => {
        setEditStatus(true);
        setSaveButton(true);
    }

    const getProfessor = (id) => {
        const [ findProfessor ] = professors.filter(professor => professor.id === id);
        setSelectedProfessor(findProfessor);
    }

    const handleDelete = async (id) => {
        await deleteProfessor(id);
        await router.push('/profesores');
        setSelectedProfessor({
            id: '',
            firstName: '',
            surname: '',
            age: '',
            email: '',
            dni: '',
            dateOfBirth: '',
            phone: ''
        })
        setEditStatus(false);
    }

    const handleUpdate = async (id) => {
        await updateProfessor(id);
        await router.push('/profesores');
        setEditStatus(false);
    }

    const deleteProfessor = async (id) => {
        try {
            await fetch(`http://localhost:3001/professors/${id}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateProfessor = async (id) => {
        try {
            await fetch(`http://localhost:3001/professors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedProfessor)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout name={'Profesores'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Link href={'/profesores/agregar'}>
                    <Button text={'Agregar profesor'} variant={'interactive'} visible={true} />
                </Link>
            </div>

            <div className='flex gap-5 mt-5'>
                <div className='w-1/5 h-[80vh] flex flex-col gap-4 overflow-y-scroll'>
                    {professors.map((professor, id) => {
                        return (
                            <div key={id} className='px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer' onClick={() => getProfessor(professor.id)}>
                                <p className='text-body font-semibold mb-1'>{`${professor.firstName} ${professor.surname}`}</p>
                                <p className='text-body-sm'>DNI: {professor.dni}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='w-4/5 max-h-40'>
                    <div className='border-b border-primary flex justify-between items-center mb-5 h-11'>
                        <h2 className='text-h4 font-semibold'>Datos del profesor</h2>
                        <Button text={'Editar'} variant={'normal'} type={'button'} visible={!editStatus} onClick={editForm} />
                        <Button text={'Cancelar'} variant={'normal'} type={'button'} visible={editStatus} onClick={() => setEditStatus(false)} />
                    </div>

                    <form className='flex gap-5'>
                        <div className='w-full'>
                            <InputField label={'Nombre'} type={'text'} name={'firstName'} disabled={!editStatus} value={selectedProfessor.firstName} onChange={handleChange} />
                            <InputField label={'Apellido'} type={'text'} name={'surname'} disabled={!editStatus} value={selectedProfessor.surname} onChange={handleChange} />
                            <InputField label={'DNI'} type={'number'} name={'dni'} disabled={!editStatus} value={selectedProfessor.dni} onChange={handleChange} />
                            <InputField label={'Fecha de nacimiento'} type={'date'} name={'dateOfBirth'} disabled={!editStatus} value={selectedProfessor.dateOfBirth} onChange={handleChange} />
                            <InputField label={'Email'} type={'email'} name={'email'} disabled={!editStatus} value={selectedProfessor.email} onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <InputField label={'Edad'} type={'number'} name={'age'} disabled={!editStatus} value={selectedProfessor.age} onChange={handleChange} />
                            <InputField label={'Teléfono'} type={'number'} name={'phone'} disabled={!editStatus} value={selectedProfessor.phone} onChange={handleChange} />
                            <div className={`w-1/6 absolute bottom-0 right-5 flex gap-2 ${editStatus ? 'block' : 'hidden'}`}>
                                <Button text={'Guardar'} variant={'success'} size={'full'} type={'button'} visible={saveButton} onClick={() => handleUpdate(selectedProfessor.id)} />
                                <Button text={'Eliminar'} variant={'danger'} size={'full'} type={'button'} visible={saveButton} onClick={() => handleDelete(selectedProfessor.id)} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </Layout>
    )
}

export default Profesores;

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/professors');
    const professors = await res.json();

    return {
        props: {
            professors,
        }
    }
}