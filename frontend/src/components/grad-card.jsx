import { HomeIcon } from "@/assets/icons-sidebar";
import { useRouter } from "next/router";

const GradCard = ({ name, path }) => {
    const router = useRouter();

    return (
        <div className='cursor-pointer' onClick={() => router.push(`/carreras/${path}`)}>
            <div className='bg-danger-bg rounded-t-lg py-16 flex justify-center'>
                <HomeIcon />
            </div>
            <div className='bg-secondary rounded-b-lg flex justify-center items-center py-4'>
                <p className='text-lg font-medium'>{name}</p>
            </div>
        </div>
    )
}

export default GradCard;