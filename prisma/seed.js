const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');  // Usaremos bcrypt para hashear la contraseña


async function main() {

    //Agregar establecimientos
    const establecimientosData = [
        { nombre: 'Predio Central' },
        { nombre: 'Campo INPB' },
        { nombre: 'CNGM' },
        { nombre: 'CNIN' },
        { nombre: 'INE' },
        { nombre: 'INER' },
        { nombre: 'INEVH' },
        { nombre: 'INMET' },
        { nombre: 'INP-CENDIE' },
        { nombre: 'UnOVE' },
    ];

    const establecimientos = await prisma.establecimientos.createMany({
        data: establecimientosData,
    });

    // Obtener el ID del establecimiento 'Predio Central'
    const predioCentral = await prisma.establecimientos.findUnique({
        where: { nombre: 'Predio Central' },
    });

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash('123456', 10);



    // Crear el usuario admin
    await prisma.usuarios.create({
        data: {
            username: 'admin',
            password: hashedPassword,  // Guardamos la contraseña hasheada
            rol: 'Administrador',  // Asignamos el rol de Admin
            establecimientos: [predioCentral.id],  // Inicialmente sin establecimientos
            lastAccess: null,  // Último acceso aún no registrado
        },
    });

    console.log('Usuario admin creado.');

    await prisma.years.createMany({
        data: [
            { year: 2025, open: true },
            { year: 2024, open: false },
        ],
    });

    console.log('Años agregados.');



}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });