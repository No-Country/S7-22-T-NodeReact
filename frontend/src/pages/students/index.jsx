import Layout from "@/components/Layout";
import GradCard from "@/components/GradCard";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
    { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
    { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
    { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> },
];

const Index = ({ subjects }) => {
    return (
        <Layout name={'Inicio'} menuItems={menuItems}>
            <div className='grid grid-cols-3 gap-5 pt-5'>
                {subjects.map((subject, id) => {
                    return <GradCard name={subject.name} key={id} id={subject.id} path={'/students/materias/' + subject.id} />
                })}
            </div>
        </Layout>
    )
}

export default Index;

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/subjects');
    const subjects = await res.json();

    return {
        props: {
            subjects
        }
    }
}
