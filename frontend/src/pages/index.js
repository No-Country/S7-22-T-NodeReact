import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

export default function Home() {
  return (
      <Layout name={'Inicio'} menuItems={menuItems}>
          <div className='h-screen'>
              <h1>Inicio</h1>
          </div>
      </Layout>
  )
}