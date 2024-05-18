import { createUsuario } from '../actions';
import CancelButton from '@/app/components/CancelButton';
import { getEstablecimientos } from '../../establecimientos/data';

const CrearUsuarioPage = async () => {
    const establecimientos = await getEstablecimientos()

    return (
        <div className="container mx-auto px-32">
            <h1 className='text-slate-700 my-4 font-bold'>Crear Usuario</h1>
            <form action={createUsuario}>
                <div className='flex justify-start gap-8'>
                    <div>
                        <label htmlFor="username"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            username*
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className='input input-bordered w-full max-w-xs'
                            placeholder='Nombre de usuario'
                        />
                        <label htmlFor="password"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className='input input-bordered w-full max-w-xs'
                            placeholder='password'
                        />
                        <label htmlFor="password"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Confirmar Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className='input input-bordered w-full max-w-xs'
                            placeholder='Confirmar password'
                        />
                        <label htmlFor="rol"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Rol
                        </label>
                        <select id="rol" name="rol" className="select select-bordered w-full max-w-xs">
                            <option>Administrador</option>
                            <option selected>Usuario</option>
                            <option>Observador</option>
                        </select>

                    </div>
                    <div>
                        <label htmlFor="rol"
                            className='text-slate-500 mb-2 text-sm block'
                        >
                            Establecimientos asignados:
                        </label>
                        <div className="form-control">

                            {
                                establecimientos.map(est => (
                                    <label className="label cursor-pointer ">
                                        <span className="label-text">{est.nombre}</span>
                                        <input name="establecimientos" value={est.id} type="checkbox" defaultChecked className="checkbox checkbox-info [--chkfg:white]" />
                                    </label>
                                ))
                            }

                        </div>
                    </div>

                </div>
                <CancelButton path='/dashboard/usuarios' />
                <button
                    className='btn bg-sky-800 text-white p-2 mt-8 rounded-lg w-1/4'
                >
                    Crear
                </button>


            </form>

        </div>
    )
}

export default CrearUsuarioPage