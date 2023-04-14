import {useState} from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import {useRouter} from "next/router";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

function Alumnos({ students }) {
  const [selectedStudent, setSelectedStudent] = useState({
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
    const [findStudent] = students.filter((students) => students.id === id);
    setSelectedStudent(findStudent);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    await router.push("/estudiantes");
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
    await router.push("/estudiantes");
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
        <Layout name={'Estudiantes'}>
          <div className='flex justify-between items-center py-4 border-b border-secondary'>
            <p className='text-h4'>Filtrar</p>
            <Link href={'/estudiantes/agregar'}>
              <Button text={'Agregar alumno'} variant={'interactive'} visible={true}/>
            </Link>
          </div>

          <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <div className='w-full md:w-1/5 md:h-[80vh] flex md:flex-col gap-4 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll overscroll-contain'>
              {students.map((student, id) => {
                return (
                  <div key={id} className="px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer" onClick={() => getStudent(student.id)}>
                    <p className="text-body font-semibold mb-1">{`${student.firstName} ${student.surname}`}</p>
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
                      name={"firstName"}
                      disabled={!editStatus}
                      value={selectedStudent.firstName}
                      onChange={handleChange}
                  />
                  <InputField
                      label={"Apellido"}
                      type={"text"}
                      name={"surname"}
                      disabled={!editStatus}
                      value={selectedStudent.surname}
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
                  <InputField
                      label={"Fecha de dateOfBirth"}
                      type={"date"}
                      name={"dateOfBirth"}
                      disabled={!editStatus}
                      value={selectedStudent.dateOfBirth}
                      onChange={handleChange}
                  />
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
                  <InputField label={"Teléfono"} type={"number"} name={"phone"} disabled={!editStatus} value={selectedStudent.phone} onChange={handleChange}/>
                  <InputField label={"Carrera"} type={"text"} name={"degree"} disabled={!editStatus} value={selectedStudent.degree} onChange={handleChange}/>
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
  const res = await fetch("http://localhost:3001/students");
  const students = await res.json();

  return {
    props: {
      students,
    },
  };
};