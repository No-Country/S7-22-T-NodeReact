import Layout from "@/components/Layout";
import Button from "@/components/Button";

const Professors = () => {
    return (
        <Layout name={'Profesores'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Button text={'Agregar'} variant={'interactive'} />
            </div>
        </Layout>
    )
}

export default Professors;