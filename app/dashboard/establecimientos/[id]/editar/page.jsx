import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import CancelButton from '@/app/components/CancelButton';
import { getEstablecimientoById } from '../../data';
import { updateEstablecimiento } from '../../actions';

const EditarEstablecimientoPage = async ({params}) => {
    //console.log(params.id)
    const establecimiento = await getEstablecimientoById(Number(params.id))
    console.log(establecimiento)
    return (
        <div className="container mx-auto px-32">
            <h1 className='text-slate-700 my-4 font-bold'>Editar establecimiento</h1>
            <form action={updateEstablecimiento}>
                <div className='flex justify-start gap-8'>
                    <div>
                        <label htmlFor="nombre"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Nombre*
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Nombre del establecimiento'
                            defaultValue={establecimiento.nombre}
                        />
                        <label htmlFor="domicilio"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Domicilio
                        </label>
                        <input
                            type="text"
                            id="domicilio"
                            name="domicilio"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Domicilio'
                            defaultValue={establecimiento.domicilio}
                        />
                        <label htmlFor="localidad"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Localidad
                        </label>
                        <input
                            type="text"
                            id="localidad"
                            name="localidad"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Localidad'
                            defaultValue={establecimiento.localidad}
                        />
                        <label htmlFor="provincia"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Provincia
                        </label>
                        <input
                            type="text"
                            id="provincia"
                            name="provincia"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Provincia'
                            defaultValue={establecimiento.provincia}
                        />
                        <label htmlFor="cp"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Código postal
                        </label>
                        <input
                            type="text"
                            id="cp"
                            name="cp"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Código postal'
                            defaultValue={establecimiento.cp}
                        />
                    </div>
                    <div>
                    <label htmlFor="tel"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Teléfono
                        </label>
                        <input
                            type="text"
                            id="tel"
                            name="tel"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Teléfono'
                            defaultValue={establecimiento.tel}
                        />
                    
                    <label htmlFor="ciiu"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            CIIU
                        </label>
                        <input
                            type="text"
                            id="ciiu"
                            name="ciiu"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='CIIU'
                            defaultValue={establecimiento.ciiu}
                        />
                        <label htmlFor="art"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Número ART
                        </label>
                        <input
                            type="text"
                            id="art"
                            name="art"
                            className='p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Número ART'
                            defaultValue={establecimiento.art}
                        />
                        </div>
                        <input type='hidden' id="id" name="id" defaultValue={establecimiento.id} />
                </div>
                <CancelButton path='/dashboard/establecimientos'/>
                <button
                        className='btn bg-sky-800 text-white p-2 mt-8 rounded-lg w-1/4'
                    >
                        Guardar
                    </button>
            </form>

        </div>
    )
}

export default EditarEstablecimientoPage