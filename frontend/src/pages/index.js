import Layout from "@/components/Layout";
import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import Button from "@/components/Button";

const menuItems = [
    { label: 'Inicio', url: '/', icon: <HomeIcon /> },
    { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
    { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
    { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

export default function Home() {
    const { user } = useContext(UserContext);
    console.log(user)

  return (
      <Layout name={'Inicio'} menuItems={menuItems}>
          <div className='flex justify-between items-center py-4 border-b border-secondary'>
              <p className='text-h4'>Bienvenido {user.result.user.name} {user.result.user.lastName}</p>
              {/*<Link href={'/admin/carreras/agregar'}>*/}
              {/*    <Button text={'Agregar carrera'} variant={'disabled'} visible={true} />*/}
              {/*</Link>*/}
          </div>
      </Layout>
  )
}