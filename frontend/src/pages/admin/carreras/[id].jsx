import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import Button from "@/components/Button";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

const Carrera = ({ grad }) => {
    const router = useRouter();
    const { slug } = router.query;
    // const name = slug.replace(/-/g, ' ');
    // const pageTitle = name.charAt(0).toUpperCase() + name.slice(1);

    const handleBack = () => {
        router.push('/admin/carreras');
    }

    return (
        <Layout name={'Carreras'} menuItems={menuItems}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>{grad.career.careerName}</p>
                <Button variant='normal' text={'Volver'} visible={true} onClick={handleBack} />
            </div>

            <div className='mt-5 h-[80vh] flex flex-col md:flex-row items-start gap-8 md:gap-32'>
                <div className='md:w-2/6'>
                    <h3 className='text-h3 mb-2.5'>Perfil del egresado</h3>
                    {/*<p>{foundGrad.description}</p>*/}
                </div>
                <div className='md:w-4/6'>
                    <h3 className='text-h3 mb-2.5'>Materias asociadas</h3>
                    <ul className='flex flex-col gap-1.5'>
                        {/*{foundGrad.subjects.map(subject => (*/}
                        {/*    <li key={subject.id}>{subject.name}</li>*/}
                        {/*))}*/}
                    </ul>
                </div>
            </div>
        </Layout>
  );
}

export default Carrera;

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetch(`https://s7-22-t-nodereact-production.up.railway.app/api/career/${id}`,
        {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "set-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6ImQ0YmNkYTc2LTJmMDctNDAzNy1hOTVjLTYyZWM4ZWNlZGFmZCIsImRuaSI6IjkyNTUtMjAwMy0wMTA1MyIsImVtYWlsIjoiam9zdWUubGFyYUBlZHV3ZWIuY29tIiwibmFtZSI6Ikpvc3VlIiwibGFzdE5hbWUiOiJMYXJhIiwiYmlydGhEYXRlIjoiMTk5MS0wNy0xNFQwMDowMDowMC4wMDBaIiwicGhvbmUiOiIrNTEgNCA1MzQyLTM0MzUiLCJhZGRyZXNzIjoiQ29saW5hIGxhcyBDYXVzYXMiLCJzdGF0ZSI6ImFjdGl2ZSJ9LCJpYXQiOjE2ODE4Njg1NjEsImV4cCI6MTY4MTg3NTc2MX0.vKhIWq-M_dNI7PVJGdiTIdYaCMPqUmpBRajEmNuQzFI",
        }
    });
    const grad = await res.json();

    return {
        props: {
            grad
        }
    }
}
