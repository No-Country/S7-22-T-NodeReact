import { useRouter } from "next/router";
import {HomeIcon} from "@/assets/icons-sidebar";

const ComCard = ({ title, degree, subject, path }) => {
    const router = useRouter();

    return (
        <div className='cursor-pointer' onClick={() => router.push(`/profs/comisiones/${path}`)}>
            <div className='bg-danger-bg rounded-t-lg py-24 flex justify-center'>
                <HomeIcon />
            </div>
            <div className='bg-secondary rounded-b-lg flex flex-col justify-center p-4'>
                <p className='text-lg font-medium'>{title}</p>
                <p className='text-sm'>Carrera: {degree}</p>
                <p className='text-sm'>Carrera: {subject}</p>
            </div>
        </div>
    )
}

export default ComCard;