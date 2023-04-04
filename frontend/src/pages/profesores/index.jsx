import Layout from "@/components/Layout";
import Button from "@/components/Button";
import {useEffect, useState} from "react";

const Profesores = () => {
    const [profesores, setProfesores] = useState([]);
    const [profesor, setProfesor] = useState({});

    const fetchProfesores = async () => {
        const response = await fetch('http://localhost:3001/professors');
        return await response.json();
    }

    const fetchOneProfessor = async (id) => {
        const response = await fetch(`http://localhost:3001/professors/${id}`);
        const data = await response.json();
        setProfesor(data);
    }

    useEffect(() => {
        fetchProfesores().then(data => {
            setProfesores(data);
        })
    }, []);

    return (
        <Layout name={'Profesores'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Button text={'Agregar'} variant={'interactive'} />
            </div>

            <div className='w-1/5 h-screen flex flex-col gap-4'>
                {profesores.map((profesor, id) => {
                    return (
                        <div key={id} className='px-2.5 py-2.5 bg-grey rounded-lg pointer' onClick={() => fetchOneProfessor(profesor.id)}>
                            <p className='text-body font-semibold mb-1'>{`${profesor.firstName} ${profesor.surname}`}</p>
                            <p className='text-body-sm'>DNI: {profesor.dni}</p>
                        </div>
                    )
                })}

                <p>{profesor.firstName}</p>
            </div>


        </Layout>
    )
}

export default Profesores;