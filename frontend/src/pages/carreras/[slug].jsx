import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import Link from "next/link";
import Button from "@/components/Button";

const Carrera = ({ foundGrad }) => {
    const router = useRouter();
    const { slug } = router.query;
    const name = slug.replace(/-/g, ' ');
    const pageTitle = name.charAt(0).toUpperCase() + name.slice(1);

    const handleBack = () => {
        router.push('/carreras');
    }

    return (
        <Layout name={'Carreras'}>
            <div className='flex justify-between items-center py-4 border-b border-secondary'>
                <p className='text-h4'>{pageTitle}</p>
                <Button variant='normal' text={'Volver'} visible={true} onClick={handleBack} />

            </div>

            <div className='mt-5 h-[80vh] flex flex-col md:flex-row items-start gap-8 md:gap-32'>
                <div className='md:w-2/6'>
                    <h3 className='text-h3 mb-2.5'>Perfil del egresado</h3>
                    <p>{foundGrad.description}</p>
                </div>
                <div className='md:w-4/6'>
                    <h3 className='text-h3 mb-2.5'>Materias asociadas</h3>
                    <ul className='flex flex-col gap-1.5'>
                        {foundGrad.subjects.map(subject => (
                            <li key={subject.id}>{subject.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
  );
}

export default Carrera;

export const getServerSideProps = async (ctx) => {
    const { slug } = ctx.query;
    const res = await fetch('http://localhost:3001/grads?_embed=subjects');
    const grads = await res.json();
    const [ foundGrad ] = grads.filter(grad => grad.slug === slug);

    return {
        props: {
            foundGrad
        }
    }
}
