import { leerInput, inquirerMenu, pausa } from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


const main = async() => {
    let opt = 0
    const busqueda = new Busquedas()
    do {
        //opt = await mostrarMenu();
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const lugar = await leerInput('Ciudad a Buscar : ');
                console.log(lugar);
                break;
            case 2:
                console.log('historial de busqueda');
                break;



        }
        if (opt !== 0) await pausa();
    } while (opt !== 0);

}

main();