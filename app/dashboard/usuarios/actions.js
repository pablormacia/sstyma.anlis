'use server'
import db from '@/app/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Rol } from '@prisma/client'
import bcrypt from 'bcrypt'

export async function createUsuario(formData) {
    console.log("Establecimientos asignados", formData.getAll('establecimientos'))

    /* if(formData.get('password')!==formData.get('confirmPassword')){
        return alert("Las contraseñas no coinciden")
    } */

    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        rol: formData.get('rol'),
        establecimientos: formData.getAll('establecimientos')
    }


        const usuarioFound = await db.usuarios.findUnique({
            where: {
                username: data.username
            }
        })

        if (usuarioFound) {
            return null
        }

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const establecimientosIds = data.establecimientos.reduce( (acc, x ) => acc.concat(+x), [])

        const usuario = await db.usuarios.create({
            data:{
                username: data.username,
                password: hashedPassword,
                rol: Rol[data.rol],
                establecimientos:establecimientosIds 
            }
            
        
         })
        console.log(usuario)
        revalidatePath('/dashboard/usuarios');
        redirect('/dashboard/usuarios');
}

export async function updateUsuario(formData) {
    const data = {
        id: parseInt(formData.get('id')),
        nombre: formData.get('nombre'),
        domicilio: formData.get('domicilio'),
        localidad: formData.get('localidad'),
        provincia: formData.get('provincia'),
        cp: formData.get('cp'),
        tel: formData.get('tel'),
        ciiu: formData.get('ciiu'),
        art: formData.get('art'),
    }


        const usuarioFound = await db.usuarios.findUnique({
            where: {
                nombre: data.nombre
            }
        })

        if (usuarioFound) {
            return null
        }
        const usuario = await db.usuarios.update({ 
            where:{
                id:data.id
            },
            data 
        })
        console.log(usuario)
        revalidatePath('/dashboard/usuarios');
        redirect('/dashboard/usuarios');
}

export async function deleteUsuario(id) {
    try {
        const usuario = await db.usuarios.delete({
            where:{
                id:id
            }
        })
        console.log(usuario)
        return usuario
    } catch (error) {
        return error.message
    }
}

