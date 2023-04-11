import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";
import { useRouter } from "next/router";

const Agregar = () => {
  // Estado inicial del formulario
  const [newStudent, setNewStudent] = useState({
    id: "",
    firstName: "",
    surname: "",
    age: "",
    email: "",
    dni: "",
    dateOfBirth: "",
    cellphone: "",
    carrera_curso: "",
    comision: "",
    estado: "",
  });

  // Estado de los errores de validación
  const [errors, setErrors] = useState({});

  // Manejador de rutas para la navegación
  const router = useRouter();

  // Función de validación de formulario
  const validate = () => {
    const errors = {};

    if (!newStudent.firstName) errors.firstName = "El nombre es obligatorio";
    if (!newStudent.surname) errors.surname = "El apellido es obligatorio";
    if (!newStudent.age) errors.age = "La edad es obligatoria";
    if (!newStudent.email) errors.email = "El email es obligatorio";
    if (!newStudent.dni) errors.dni = "El DNI es obligatorio";
    // if (!newStudent.dateOfBirth) errors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
    if (!newStudent.cellphone) errors.cellphone = "El teléfono es obligatorio";
    if (!newStudent.carrera_curso)
      errors.carrera_curso = "La carrera o curso es obligatoria";
    if (!newStudent.comision) errors.comision = "La comisión es obligatoria";
    if (!newStudent.estado) errors.estado = "El estado es obligatorio";

    return errors;
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    await createStudent();
    await router.push("/estudiantes");
  };

  // Manejador de cambios en el formulario
  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  // Función para crear un nuevo estudiante en la base de datos
  const createStudent = async () => {
    try {
      await fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout name={"Agregar alumno"}>
      <div className="flex justify-between items-center py-4 border-b border-secondary">
        <p className="text-h4">Filtrar</p>
        <Button
          text={"Guardar"}
          variant={"success"}
          visible={true}
          type={"button"}
          onClick={handleSubmit}
        />
      </div>

      <div className="w-4/5">
        <form className="flex gap-5">
          <div className="w-full">
            <InputField
              label={"Nombre"}
              type={"text"}
              name={"firstName"}
              onChange={handleChange}
              error={errors.firstName ? errors.firstName : null}
            />
            <InputField
              label={"Apellido"}
              type={"text"}
              name={"surname"}
              onChange={handleChange}
              error={errors.surname}
            />
            <InputField
              label={"DNI"}
              type={"number"}
              name={"dni"}
              onChange={handleChange}
              error={errors.dni}
            />
            <InputField
              label={"Fecha de dateOfBirth"}
              type={"date"}
              name={"Fecha de nacimiento"}
              onChange={handleChange}
            />
            <InputField
              label={"Email"}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className="w-full">
            <InputField
              label={"Edad"}
              type={"number"}
              name={"age"}
              onChange={handleChange}
              error={errors.age}
            />
            <InputField
              label={"Teléfono"}
              type={"number"}
              name={"cellphone"}
              onChange={handleChange}
              error={errors.cellphone}
            />
            <InputField
              label={"Carrera/Curso"}
              type={"text"}
              name={"carrera_curso"}
              onChange={handleChange}
              error={errors.carrera_curso}
            />
            <InputField
              label={"Comisión"}
              type={"text"}
              name={"comision"}
              onChange={handleChange}
              error={errors.comision}
            />
            <InputField
              label={"Estado"}
              type={"text"}
              name={"estado"}
              onChange={handleChange}
              error={errors.estado}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Agregar;
