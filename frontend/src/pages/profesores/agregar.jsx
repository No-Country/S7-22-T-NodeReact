import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Link from "next/link";

const Agregar = () => {
    return (
        <Layout name={'Agregar profesor'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Link href={'/profesores/agregar'}>
                    <Button text={'Guardar'} variant={'success'} visible={true} />
                </Link>
            </div>
            <h1>Form</h1>
        </Layout>
    )
}

export default Agregar;