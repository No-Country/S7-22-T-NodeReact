import { useRouter } from 'next/router';

const Carrera = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
    <div>
      <h1> {slug} </h1>
    </div>
  );
}

export default Carrera;