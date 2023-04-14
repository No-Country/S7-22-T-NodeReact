import Layout from "@/components/Layout";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";
import { useRouter } from "next/router";

const Agregar = () => {
  const [newStudent, setNewStudent] = useState({
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

  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validate = () => {
    const errors = {};

    if (!newStudent.firstName) errors.firstName = "El nombre es obligatorio";
    if (!newStudent.surname) errors.surname = "El apellido es obligatorio";
    if (!newStudent.email) errors.email = "El email es obligatorio";
    if (!newStudent.address) errors.address = "La dirección es obligatoria";
    if (!newStudent.degree) errors.degree = "La carrera es obligatoria";
    if (!newStudent.dni) errors.dni = "El DNI es obligatorio";
    if (!newStudent.dateOfBirth) errors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
    if (!newStudent.phone) errors.phone = "El teléfono es obligatorio";

    return errors;
  };

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

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

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
          <Button text={"Guardar"} variant={"success"} visible={true} type={"button"} onClick={handleSubmit}/>
        </div>

        <div className="md:w-4/5">
          <form className="flex flex-col md:flex-row md:gap-5 mt-5 md:mt-0">
            <div className="w-full">
              <InputField label={"Nombre"} type={"text"} name={"firstName"} onChange={handleChange} error={errors.firstName ? errors.firstName : null}/>
              <InputField label={"Apellido"} type={"text"} name={"surname"} onChange={handleChange} error={errors.surname}/>
              <InputField label={"DNI"} type={"number"} name={"dni"} onChange={handleChange} error={errors.dni}/>
              <InputField label={"Fecha de nacimiento"} type={"date"} name={"dateOfBirth"} onChange={handleChange} error={errors.dateOfBirth}/>
              <InputField label={"Email"} type={"email"} name={"email"} onChange={handleChange} error={errors.email}/>
            </div>
            <div className="w-full">
              <InputField label={"Teléfono"} type={"number"} name={"phone"} onChange={handleChange} error={errors.phone}/>
              <InputField label={"Carrera"} type={"text"} name={"degree"} onChange={handleChange} error={errors.degree}/>
              <InputField label={"Dirección"} type={"text"} name={"address"} onChange={handleChange} error={errors.address}/>
            </div>
          </form>
        </div>
      </Layout>
  );
};

export default Agregar;