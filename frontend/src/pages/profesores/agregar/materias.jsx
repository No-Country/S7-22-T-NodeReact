import Layout from "@/components/Layout";
import Button from "@/components/Button";

const AsignarMaterias = () => {
    const handleSubmit = () => {
        console.log('guardar');
    }

    return (
        <Layout name={"Asignar materias"}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Button text={'Guardar'} variant={'success'} visible={true} type={'button'} onClick={handleSubmit} />
            </div>

            <div className='md:w-4/5'>
                <form className='flex flex-col md:flex-row md:gap-5 mt-5 md:mt-0'>
                    <div className='bg-blue-400 w-2/6'>
                        gd
                    </div>
                    <div className='bg-red-400 w-4/6'>
gf
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default AsignarMaterias;