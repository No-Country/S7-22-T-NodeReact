import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import {useState, useContext, useEffect} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import Cookies from 'js-cookie';
// import { UserContext } from "@/contexts/UserContext";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

const Profesores = ({ professors }) => {
    const cookie = Cookies.get('user');
    const cookieRes = JSON.parse(cookie)

    const [selectedProfessor, setSelectedProfessor] = useState({
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
    const [editStatus, setEditStatus] = useState(false);
    const [saveButton, setSaveButton] = useState(false);
    const [assignSubjects, setAssignSubjects] = useState(false);

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
        const foundProfessor = professors.find(professor => professor.id === id);
        setSelectedProfessor(foundProfessor);
    }

    const handleDelete = async (id) => {
        await deleteProfessor(id);
        await router.push('/admin/profesores');
        setSelectedProfessor({
            name: '',
            lastName: '',
            dni: '',
            birthDate: '',
            phone: '',
            address: '',
        })
        setEditStatus(false);
    }

    const handleUpdate = async (id) => {
        console.log(selectedProfessor)
        await updateProfessor(id);
        await router.push('/admin/profesores');
        setEditStatus(false);
    }

    const deleteProfessor = async (id) => {
        try {
            await fetch(`https://s7-22-t-nodereact-production.up.railway.app/api/user/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'set-token': cookieRes.result.token // token
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateProfessor = async (id) => {
        try {
            await fetch(`https://s7-22-t-nodereact-production.up.railway.app/api/user/put/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'set-token': cookieRes.result.token // token
                },
                body: JSON.stringify(selectedProfessor)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout name={'Profesores'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Link href={'/admin/profesores/agregar'}>
                    <Button text={'Agregar profesor'} variant={'interactive'} visible={true} />
                </Link>
            </div>

            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <div className='w-full md:w-1/5 md:h-[80vh] flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll overscroll-contain'>
                    {professors.map((professor, id) => {
                        return (
                            <div key={id} className='px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer' onClick={() => getProfessor(professor.id)}>
                                <p className='text-body font-semibold mb-1'>{`${professor.name} ${professor.lastName}`}</p>
                                <p className='text-body-sm'>DNI: {professor.dni}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='w-full md:w-4/5 md:max-h-[80vh] md:overflow-y-scroll overscroll-contain'>
                    <div className='border-b border-primary flex justify-between items-center mb-5 h-11'>
                        <h2 className='text-h4 font-semibold'>Datos del profesor</h2>
                        <Button text={'Editar'} variant={'normal'} type={'button'} visible={!editStatus} onClick={editForm} />
                        <Button text={'Cancelar'} variant={'normal'} type={'button'} visible={editStatus} onClick={() => setEditStatus(false)} />
                    </div>

                    <form className='flex flex-col md:grid md:grid-cols-2 md:gap-5 relative'>
                        <div className='w-full'>
                            <InputField label={'Nombre'} type={'text'} name={'name'} disabled={!editStatus} value={selectedProfessor.name} onChange={handleChange} />
                            <InputField label={'Apellido'} type={'text'} name={'lastName'} disabled={!editStatus} value={selectedProfessor.lastName} onChange={handleChange} />
                            <InputField label={'DNI'} type={'number'} name={'dni'} disabled={!editStatus} value={selectedProfessor.dni} onChange={handleChange} />
                            <InputField label={'Fecha de nacimiento'} type={'date'} name={'birthDate'} disabled={!editStatus} value={selectedProfessor.birthDate.slice(0, 10)} onChange={handleChange} />
                            <InputField label={'Email'} type={'email'} name={'email'} disabled={!editStatus} value={selectedProfessor.email} onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <InputField label={'Teléfono'} type={'number'} name={'phone'} disabled={!editStatus} value={selectedProfessor.phone} onChange={handleChange} />
                            <Button text={'Asignar materias'} variant={'primary'} type={'button'} size={'full'} visible={editStatus} onClick={() => setAssignSubjects(!assignSubjects)} />
                            <div className={`md:absolute md:bottom-0 md:right-5 mt-6 md:mt-0 flex gap-2 ${editStatus ? 'block' : 'hidden'}`}>
                                <Button text={'Guardar'} variant={'success'} size={'full'} type={'button'} visible={saveButton} onClick={() => handleUpdate(selectedProfessor.id)} />
                                <Button text={'Eliminar'} variant={'danger'} size={'full'} type={'button'} visible={saveButton} onClick={() => handleDelete(selectedProfessor.id)} />
                            </div>
                        </div>
                        <div className={`md:col-span-2 md:last:mb-14 ${assignSubjects ? 'block' : 'hidden'}`}>
                            <div className='flex flex-col gap-1.5'>
                                <label className="text-body font-semibold">Materias</label>
                                <select disabled={!editStatus} className={`border w-full rounded-md px-3 py-2 text-body focus:outline-none`}>
                                    <option value="1">Materia 1</option>
                                </select>
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
    const response = await fetch('https://s7-22-t-nodereact-production.up.railway.app/api/user');
    const users = await response.json();
    const professors = users.results.filter(user => user.role.id === 2);

    return {
        props: {
            professors
        }
    }
}