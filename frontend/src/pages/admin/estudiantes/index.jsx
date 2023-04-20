import {CalendarIcon, HomeIcon, StarIcon, SubjectsIcon} from "@/assets/icons-sidebar";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Layout from "@/components/Layout";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

const menuItems = [
  { label: 'Inicio', url: '/', icon: <HomeIcon /> },
  { label: 'Profesores', url: '/admin/profesores', icon: <SubjectsIcon /> },
  { label: 'Estudiantes', url: '/admin/estudiantes', icon: <StarIcon /> },
  { label: 'Carreras', url: '/admin/carreras', icon: <CalendarIcon /> },
];

function Alumnos({ students }) {

  const studentsFilter = students.results.filter(student => student.role.id === 3)
  const [selectedStudent, setSelectedStudent] = useState({
    id: '',
    name: '',
    lastName: '',
    email: '',
    address: '',
    degree: '',
    dni: '',
    birthDate: '',
    phone: '',
  });
  
  
  const [editStatus, setEditStatus] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const {name, value} = e.target; // name and value are the attributes of the input field
    setSelectedStudent((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const editForm = () => {
    setEditStatus(true);
    setSaveButton(true);
  };

  const getStudent = (id) => {
    const [findStudent] = studentsFilter.filter((students) => students.id === id);
    console.log(findStudent)
    setSelectedStudent(findStudent);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    await router.push("/admin/estudiantes");
    setSelectedStudent({
      id: '',
      firstName: '',
      surname: '',
      email: '',
      address: '',
      degree: '',
      dni: '',
      dateOfBirth: '',
      phone: '',
    });
    setEditStatus(false);
  };

  const handleUpdate = async (id) => {
    await updateStudent(id);
    await router.push("/admin/estudiantes");
    setEditStatus(false);
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/students/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/students/${id}`, {
        method: "PUT", headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedStudent),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>
        <Layout name={'Estudiantes'} menuItems={menuItems}>
          <div className='flex justify-between items-center py-4 border-b border-secondary'>
            <p className='text-h4'>Filtrar</p>
            <Link href={'/admin/estudiantes/agregar'}>
              <Button text={'Agregar alumno'} variant={'interactive'} visible={true}/>
            </Link>
          </div>

          <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <div className='w-full md:w-1/5 md:h-[80vh] flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll overscroll-contain'>
              {studentsFilter.map((student, id) => {
                return (
                  <div key={id} className="px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer" onClick={() => getStudent(student.id)}>
                    <p className="text-body font-semibold mb-1">{`${student.name} ${student.lastName}`}</p>
                    <p className="text-body-sm">DNI: {student.dni}</p>
                  </div>
                );
              })}
            </div>

            <div className='w-full md:w-4/5 md:max-h-[80vh] md:overflow-y-scroll overscroll-contain'>
              <div className='border-b border-primary flex justify-between items-center mb-5 h-11'>
                <h2 className='text-h4 font-semibold'>Datos del alumno</h2>
                <Button text={'Editar'} variant={'normal'} type={'button'} visible={!editStatus} onClick={editForm}/>
                <Button text={'Cancelar'} variant={'normal'} type={'button'} visible={editStatus} onClick={() => setEditStatus(false)}/>
              </div>

              <form className="flex flex-col md:flex-row md:gap-5 relative">
                <div className="w-full">
                  <InputField
                      label={"Nombre"}
                      type={"text"}
                      name={"name"}
                      disabled={!editStatus}
                      value={selectedStudent.name}
                      onChange={handleChange}
                  />
                  <InputField
                      label={"Apellido"}
                      type={"text"}
                      name={"lastName"}
                      disabled={!editStatus}
                      value={selectedStudent.lastName}
                      onChange={handleChange}
                  />
                  <InputField
                      label={"DNI"}
                      type={"number"}
                      name={"dni"}
                      disabled={!editStatus}
                      value={selectedStudent.dni}
                      onChange={handleChange}
                  />
                  {/* <InputField
                      label={"Fecha de dateOfBirth"}
                      type={"date"}
                      name={"birthDate"}
                      disabled={!editStatus}
                      value={selectedStudent.birthDate}
                      onChange={handleChange}
                  /> */}
                  <InputField
                      label={"Email"}
                      type={"email"}
                      name={"email"}
                      disabled={!editStatus}
                      value={selectedStudent.email}
                      onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <InputField label={"Teléfono"} type={"text"} name={"phone"} disabled={!editStatus} value={selectedStudent.phone} onChange={handleChange}/>
                  {/*<InputField label={"Carrera"} type={"text"} name={"degree"} disabled={!editStatus} value={selectedStudent.degree} onChange={handleChange}/>*/}
                  <div className='flex flex-col gap-1.5'>
                  {/* <label className="text-body font-semibold">Carrera</label>
                  <p></p>
                    <select disabled={!editStatus} className={`border w-full rounded-md px-3 py-2 text-body focus:outline-none`}>
                    <option value="1">""</option>
                    </select> */}
                  </div>

                  <div className={`md:absolute md:bottom-0 md:right-5 mt-6 md:mt-0 flex gap-2 ${editStatus ? 'block' : 'hidden'}`}>
                    <Button text={"Guardar"} variant={"success"} size={"full"} type={"button"} visible={saveButton} onClick={() => handleUpdate(selectedStudent.id)}/>
                    <Button text={"Eliminar"} variant={"danger"} size={"full"} type={"button"} visible={saveButton} onClick={() => handleDelete(selectedStudent.id)}/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </>
  );
}

export default Alumnos;

export const getServerSideProps = async (ctx) => {
  const res = await fetch("https://s7-22-t-nodereact-production.up.railway.app/api/user");
  const students = await res.json();

  return {
    props: {
      students,
    },
  };
};