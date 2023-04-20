import { CalendarIcon, HomeIcon, StarIcon, SubjectsIcon } from '@/assets/icons-sidebar';

import Layout from '@/components/Layout';

const menuItems = [
  { label: 'Inicio', url: '/students', icon: <HomeIcon /> },
  { label: 'Materias', url: '/students/materias', icon: <SubjectsIcon /> },
  { label: 'Calificaciones', url: '/students/calificaciones', icon: <StarIcon /> },
  { label: 'Anuncios', url: '/students/anuncios', icon: <CalendarIcon /> },
];

const Index = () => {
  return (
    <Layout name={'Inicio'} menuItems={menuItems}>
    <h4>Listado de materias cursando</h4>
    <div className="grid grid-cols-3 gap-5 pt-5">
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Matemáticas</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Programación</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Inglés</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Física</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Historia</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Economía</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Química</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Filosofía</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Derecho</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Psicología</p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => router.push(path)}>
        <div className="bg-danger-bg rounded-t-lg py-16 flex justify-center">
          <HomeIcon />
        </div>
        <div className="bg-secondary rounded-b-lg flex justify-center items-center py-4">
          <p className="text-lg font-medium">Biología</p>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Index;
