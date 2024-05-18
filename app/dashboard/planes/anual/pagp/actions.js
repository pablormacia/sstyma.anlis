'use server'
import db from '@/app/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createActividadPA(data,path) {
    console.log(data)
    const actividadPA = await db.planAnualData.create({ data })
    console.log("Actividad PA", actividadPA)
    revalidatePath(`/dashboard/planes/anual/${path}`);
    redirect(`/dashboard/planes/anual/${path}`); 
}

export async function deleteActividadPA(id,path) {
    try {
        const actDeleted = await db.planAnualData.delete({
            where:{
                id:id
            }
        })
        console.log(actDeleted)
        revalidatePath('/dashboard/planes/anual/pagp');
        redirect('/dashboard/planes/anual/pagp'); 
        
    } catch (error) {
        return error.message
    }
}

export async function updateActividadPA(data,id) {
        console.log(data)
        await db.planAnualData.update({ 
            where:{
                id
            },
            data 
        })
        revalidatePath('/dashboard/planes/anual/pagp');
        redirect('/dashboard/planes/anual/pagp');
}