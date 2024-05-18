'use client'
import { useRouter } from "next/navigation"

const CancelButton = ({path}) => {
    const router = useRouter()
    return (
        <button
            type="button"
            className='btn  bg-slate-400 text-white p-2 mt-8 rounded-lg w-1/4'
            onClick={()=>router.push(path)}
        >
            Cancelar
        </button>
    )
}

export default CancelButton