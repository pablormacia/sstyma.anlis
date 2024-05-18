'use server'
import db from '@/app/lib/db'

export async function getYears() {
    try {
        const years = await db.years.findMany({
            orderBy: 
              {
                year: 'desc',
              }
         })
        //console.log(establecimientos)
        return years
    } catch (error) {
        return error.message
    }
}