let nombresPkm = ["charmander", "pikachu", "bulbasaur", "squirtle"];

let habilidades = [
    [80, 75, 90], //charmander
    [65, 55, 95], //pikachu
    [80, 70, 65], //bulbasaur
    [85, 90, 70] //squirtle
]

function calcularPromHab(habilidades) {
    let promedios= [];
    
    for (let i=0;i<habilidades.length;i++) {
        let fila = habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedios[i] = suma/fila.length;
    }

    return promedios;
}

function evaluarAptitud(nombresPkm,promedios) {
    for (let i=0;i<promedios.length;i++) {
        if (promedios[i]>=70) {
            console.log("El pokemon" + nombresPkm[i] + "Supera el promedio con:" + promedios[i]);
        } else {
            console.log("El pokemon" + nombresPkm[i] + "NO supera el promedio con:" + promedios[i]);
        }
    }
}

let promedios = calcularPromHab(habilidades);
evaluarAptitud(nombresPkm,promedios);