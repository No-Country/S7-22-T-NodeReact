import Layout from "@/components/Layout";
import Button from "@/components/Button";
import GradCard from "@/components/grad-card";
import Link from "next/link";

const Carreras = ({ grads }) => {
    return (
        <Layout name='Carreras'>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>Filtrar</p>
                <Link href={'/carreras/agregar'}>
                    <Button text={'Agregar carrera'} variant={'interactive'} visible={true} />
                </Link>
            </div>

            <div className='grid gap-4 md:grid-cols-4 pt-5'>
                {grads && grads.map((grad, id) => {
                    return (
                        <GradCard key={id} name={grad.name} path={grad.slug} />
                    )
                })}
            </div>

        </Layout>
    )
}

export default Carreras;

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3001/grads');
    const grads = await res.json();

    return {
        props: {
            grads
        }
    }
}