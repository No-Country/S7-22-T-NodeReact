import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

function Alumnos({ students }) {
  const [selectedStudent, setSelectedStudent] = useState({
    id: "",
    firstName: "",
    surname: "",
    age: "",
    email: "",
    dni: "",
    dateOfBirth: "",
    email: "",
    cellcellphone: "",
    carrera_curso: "",
    comision: "",
    dni: "",
    dateOfBirth: "",
    estado: "",
  });

  const [editStatus, setEditStatus] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target; // name and value are the attributes of the input field
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
      id: "",
      firstName: "",
      surname: "",
      age: "",
      email: "",
      dni: "",
      dateOfBirth: "",
      cellphone: "",
      email: "",
      carrera_curso: "",
      comision: "",
      dni: "",
      dateOfBirth: "",
      estado: "",
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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedStudent),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const campos = Array.from({ length: 10 }, (_, i) => i + 1);

  const labels_information = campos.map((campo) => (
    <div key={campo} className={campo % 2 === 0 ? "ml-14" : ""}>
      <label htmlFor={`campo${campo}`}>Campo {campo}</label>
      <br />
      <input
        type="text"
        id={`campo${campo}`}
        name={`campo${campo}`}
        readOnly
        className="mt-4 border border-gray-500 w-[349px] h-[47px] rounded-lg"
      />
    </div>
  ));

  return (
    <>
      <div class="flex items-center mt-4">
        <h4 class="text-black text-[24px] font-bold ml-16 mt-4">
          Añadir alumno
        </h4>
        <button class="w-[150px] h-[43px] rounded-md bg-[#C0C0C0] text-black ml-2 ml-auto mr-6">
          Salir
        </button>
      </div>
      <div className="container w-[full] h-[52rem] m-12 p-6 bg-[#D9D9D9] rounded-lg">
        <div className="bg-[#D9D9D9] p-4 overflow-y-scroll h-[804px] w-[359px] rounded-lg float-left">
          {students.map((student, id) => {
            return (
              <div
                key={id}
                className="px-2.5 py-2.5 bg-grey rounded-lg cursor-pointer"
                onClick={() => getStudent(student.id)}
              >
                <p className="text-body font-semibold mb-1">{`${student.firstName} ${student.surname}`}</p>
                <p className="text-body-sm">DNI: {student.dni}</p>
              </div>
            );
          })}

          {/* {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 m-2 bg-white rounded-lg overflow-hidden w-260 h-55"
            >
              <div
                className="w-4 h-4 rounded-full border border-blue-500 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  e.target.classList.toggle("bg-blue-500");
                }}
              ></div>
              <div className="flex flex-col pt-4 pb-4">
                <p className="font-bold text-black text-base leading-6">
                  Nombre {i + 1}
                </p>
                <p className="font-normal text-black text-sm leading-5">
                  DNI 5
                </p>
              </div>
            </div>
          ))} */}
        </div>
        <div className="pt-8 mt-[1.5rem] bg-[#F5F5F5] h-full rounded-lg">
          <div className="flex justify-between">
            <h4 className="ml-[2.5rem] text-[20px] font-bold mb-4">
              Datos del alumno
            </h4>
            <hr className="border-b-1 border-blue-500 ml-[25.5rem] mb-4"></hr>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2-2h4a2 2 0 012 2v5"
                />
              </svg>
              {/* <p className="inline-block ml-2">Editar</p> */}
              <Button
                text={"Editar"}
                variant={"normal"}
                type={"button"}
                visible={!editStatus}
                onClick={editForm}
              />
              <Button
                text={"Cancelar"}
                variant={"normal"}
                type={"button"}
                visible={editStatus}
                onClick={() => setEditStatus(false)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.293 9.293a1 1 0 011.414 0L12 10.586l1.293-1.293a1 1 0 011.414 1.414L13.414 12l1.293 1.293a1 1 0 01-1.414 1.414L12 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12l-1.293-1.293a1 1 0 010-1.414z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21,20c0,1.1046 -0.8954,2 -2,2H5c-1.1046,0 -2,-0.8954 -2,-2V8c0,-1.1046 
      "
                ></path>
              </svg>
              <p className="inline-block ml-2 mr-8">Eliminar</p>
            </div>
          </div>
          <hr className="border-b-1 border-blue-500 ml-[25rem] mb-4"></hr>
          <div className="grid grid-cols-2 gap-4 flex w-[600px] float-right mr-56">
            {/* {labels_information} */}
            <form className="flex gap-5 relative">
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
                <InputField
                  label={"Edad"}
                  type={"number"}
                  name={"age"}
                  disabled={!editStatus}
                  value={selectedStudent.age}
                  onChange={handleChange}
                />
                <InputField
                  label={"Teléfono"}
                  type={"number"}
                  name={"cellphone"}
                  disabled={!editStatus}
                  value={selectedStudent.cellphone}
                  onChange={handleChange}
                />
                <InputField
                  label={"Carrera / Curso"}
                  type={"text"}
                  name={"carrera_curso"}
                  disabled={!editStatus}
                  value={selectedStudent.carrera_curso}
                  onChange={handleChange}
                />
                <InputField
                  label={"Comision"}
                  type={"text"}
                  name={"comision"}
                  disabled={!editStatus}
                  value={selectedStudent.comision}
                  onChange={handleChange}
                />
                <InputField
                  label={"Estado"}
                  type={"text"}
                  name={"estado"}
                  disabled={!editStatus}
                  value={selectedStudent.estado}
                  onChange={handleChange}
                />

                <div
                  className={`absolute bottom-0 right-5 flex gap-2 ${
                    editStatus ? "block" : "hidden"
                  }`}
                >
                  <Button
                    text={"Guardar"}
                    variant={"success"}
                    size={"full"}
                    type={"button"}
                    visible={saveButton}
                    onClick={() => handleUpdate(selectedStudent.id)}
                  />
                  <Button
                    text={"Eliminar"}
                    variant={"danger"}
                    size={"full"}
                    type={"button"}
                    visible={saveButton}
                    onClick={() => handleDelete(selectedStudent.id)}
                  />
                </div>
              </div>
              {/*TODO*/}
              {/*Add section with relations of subjects and classes*/}
            </form>
            <div className="ml-[22.6rem]">
              {/* <button className="w-[350px] h-[43px] rounded-md bg-[#022647] text-white mb-2">
                Ver detalles de materias
              </button>
              <div className="flex mt-8 w-[20rem] ml-8">
                <button className="w-[150px] h-[43px] rounded-md bg-[#008060] text-white mr-2">
                  Guardar
                </button>
                <button className="w-[150px] h-[43px] rounded-md bg-[#C0C0C0] text-black ml-2">
                  Salir
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
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
