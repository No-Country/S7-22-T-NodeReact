import Layout from "@/components/Layout";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import InputField from "@/components/InputField";

const Profesores = () => {
    const [profesores, setProfesores] = useState([]);
    const [profesor, setProfesor] = useState({
        "id": '',
        "firstName": '',
        "surname": '',
        "age": '',
        "email": '',
        "dni": '',
        "dateOfBirth": '',
        "phone": ''
    });
    const [editStatus, setEditStatus] = useState(false);
    const [saveButton, setSaveButton] = useState(false);
    // const [inputValue, setInputValue] = useState({
    //     "id": '',
    //     "firstName": '',
    //     "surname": '',
    //     "age": '',
    //     "email": '',
    //     "dni": '',
    //     "dateOfBirth": '',
    //     "phone": ''
    // });
    const {id, firstName, surname, age, email, dni, dateOfBirth, phone} = profesor;

    const handleChange = (e) => {
        const {name, value} = e.target; // name and value are the attributes of the input field
        setProfesor((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

    const fetchProfesores = async () => {
        const response = await fetch('http://localhost:3001/professors');
        return await response.json();
    }

    const fetchOneProfessor = async (id) => {
        const response = await fetch(`http://localhost:3001/professors/${id}`);
        const data = await response.json();
        setProfesor(data);
    }

    const editProfessor = async (id, oldData) => {
        const response = await fetch(`http://localhost:3001/professors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...oldData,
            })
        }).then(response => response.json())
            .then(data => {console.log(data)});
    }

    useEffect(() => {
        fetchProfesores().then(data => {
            setProfesores(data);
        })
    }, []);

    const editForm = () => {
        setEditStatus(true);
        setSaveButton(true);
    }

    return (
        <Layout name={'Profesores'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Button text={'Agregar'} variant={'interactive'} visible={true} />
            </div>

            <div className='flex gap-5 mt-5'>
                <div className='w-1/5 h-[80vh] flex flex-col gap-4 overflow-y-scroll'>
                    {profesores.map((profesor, id) => {
                        return (
                            <div key={id} className='px-2.5 py-2.5 bg-grey rounded-lg pointer' onClick={() => fetchOneProfessor(profesor.id)}>
                                <p className='text-body font-semibold mb-1'>{`${profesor.firstName} ${profesor.surname}`}</p>
                                <p className='text-body-sm'>DNI: {profesor.dni}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='w-4/5 max-h-40'>
                    <form className='flex gap-5' onSubmit={() => editProfessor(profesor.id, profesor)}>
                        <div className='w-full'>
                            <InputField label={'Nombre'} type={'text'} name={'firstName'} disabled={!editStatus} value={firstName} onChange={handleChange} />
                            <InputField label={'Apellido'} type={'text'} name={'surname'} disabled={!editStatus} value={surname} onChange={handleChange} />
                            <InputField label={'DNI'} type={'number'} name={'dni'} disabled={!editStatus} value={dni} onChange={handleChange} />
                            <InputField label={'Fecha de nacimiento'} type={'date'} name={'dateOfBirth'} disabled={!editStatus} value={dateOfBirth} onChange={handleChange} />
                            <InputField label={'Email'} type={'email'} name={'email'} disabled={!editStatus} value={email} onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <InputField label={'Edad'} type={'number'} name={'age'} disabled={!editStatus} value={age} onChange={handleChange} />
                            <InputField label={'Teléfono'} type={'number'} name={'phone'} disabled={!editStatus} value={phone} onChange={handleChange} />
                            <Button text={'Editar'} variant={'interactive'} size={'full'} type={'button'} onClick={editForm} visible={!editStatus} />
                            <Button text={'Guardar'} variant={'success'} size={'full'} type={'submit'} visible={saveButton} />
                        </div>
                    </form>
                </div>
            </div>


        </Layout>
    )
}

export default Profesores;