import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Link from "next/link";
import InputField from "@/components/InputField";

const Agregar = () => {
    return (
        <Layout name={'Agregar profesor'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Link href={'/profesores/agregar'}>
                    <Button text={'Guardar'} variant={'success'} visible={true} />
                </Link>
            </div>

            <div className='w-4/5'>
                <form className='flex gap-5'>
                    <div className='w-full'>
                        <InputField label={'Nombre'} type={'text'} name={'firstName'} />
                        <InputField label={'Apellido'} type={'text'} name={'surname'} />
                        <InputField label={'DNI'} type={'number'} name={'dni'} />
                        <InputField label={'Fecha de nacimiento'} type={'date'} name={'dateOfBirth'} />
                        <InputField label={'Email'} type={'email'} name={'email'} />
                    </div>
                    <div className='w-full'>
                        <InputField label={'Edad'} type={'number'} name={'age'} />
                        <InputField label={'Teléfono'} type={'number'} name={'phone'} />
                        <Button text={'Editar'} variant={'interactive'} size={'full'} type={'button'} />
                        <Button text={'Guardar'} variant={'success'} size={'full'} type={'submit'} />
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Agregar;