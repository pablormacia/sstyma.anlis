export async function calcularCumplimientos(array_cumplimiento) {
    //Recibe un array y cuenta los valores "C" , "MC", "PC", "IN", y "A"
    //Devuelve un array de 4 dimensiones con los valores en ese órden
    let cumplimiento = [0,0,0,0,0]
    //console.log(array_cumplimiento)
    for (let i = 0; i < array_cumplimiento.length; i++) {
        console.log(array_cumplimiento[i])
        if (array_cumplimiento[i] === "C") {
            cumplimiento[0] += 1
        } else if (array_cumplimiento[i] === "MC") {
            cumplimiento[1] += 1
        } else if (array_cumplimiento[i] === "PC") {
            cumplimiento[2] += 1
        } else if (array_cumplimiento[i] === "IN") {
            cumplimiento[3] += 1
        } else if (array_cumplimiento[i] === "A") {
            cumplimiento[4] += 1
        }
    }
    //console.log(cumplimiento)
    return cumplimiento
}