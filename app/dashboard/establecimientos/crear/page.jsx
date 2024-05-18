import { createEstablecimiento } from '../actions';
import CancelButton from '@/app/components/CancelButton';

const CrearEstablecimientoPage = () => {
    return (
        <div className="container mx-auto px-32">
            <h1 className='text-slate-700 my-4 font-bold'>Crear establecimiento</h1>
            <form action={createEstablecimiento}>
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Nombre del establecimiento'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Domicilio'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Localidad'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Provincia'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Código postal'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Teléfono'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='CIIU'
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
                            className='input p-3 rounded block mb-2 bg-slate-100 text-slate-700 w-full'
                            placeholder='Número ART'
                        />
                        </div>
                </div>
                <CancelButton path='/dashboard/establecimientos' />
                <button
                        className='btn bg-sky-800 text-white p-2 mt-8 rounded-lg w-1/4'
                    >
                        Crear
                    </button>
                    

            </form>

        </div>
    )
}

export default CrearEstablecimientoPage