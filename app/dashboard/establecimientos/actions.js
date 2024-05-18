'use server'
import db from '@/app/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createEstablecimiento(formData) {
    const data = {
        nombre: formData.get('nombre'),
        domicilio: formData.get('domicilio'),
        localidad: formData.get('localidad'),
        provincia: formData.get('provincia'),
        cp: formData.get('cp'),
        tel: formData.get('tel'),
        ciiu: formData.get('ciiu'),
        art: formData.get('art'),
    }


        const establecimientoFound = await db.establecimientos.findUnique({
            where: {
                nombre: data.nombre
            }
        })

        if (establecimientoFound) {
            return null
        }
        const establecimiento = await db.establecimientos.create({ data })
        console.log(establecimiento)
        revalidatePath('/dashboard/establecimientos');
        redirect('/dashboard/establecimientos');
}

export async function updateEstablecimiento(formData) {
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


        const establecimientoFound = await db.establecimientos.findUnique({
            where: {
                nombre: data.nombre
            }
        })

        if (establecimientoFound) {
            return null
        }
        const establecimiento = await db.establecimientos.update({ 
            where:{
                id:data.id
            },
            data 
        })
        console.log(establecimiento)
        revalidatePath('/dashboard/establecimientos');
        redirect('/dashboard/establecimientos');
}

export async function deleteEstablecimiento(id) {
    try {
        const establecimiento = await db.establecimientos.delete({
            where:{
                id:id
            }
        })
        console.log(establecimiento)
        return establecimiento
    } catch (error) {
        return error.message
    }
}

