document.addEventListener('DOMContentLoaded', function() {
    const sueldo_basico = document.getElementById('inp_sueldob'); // VARIABLE DE SUELDO BASICO
    const asignacion_fam = document.getElementById('inp_asignacionf'); // VARIABLE DE ASIGNACION FAMILIAR
    const select_asignacionf = document.getElementById('select_asignacionf'); // ELEGIR ENTRE SI O NO DE UN SELECT PARA LA ASIGNACION FAMILIAR
    const resultado = document.getElementById('inp_total_basico'); // TOTAL BASICO, ES DECIR LA SUMA DE SUELDO BASICO + ASIGNACION FAMILIAR
    const valor_ph = document.getElementById('valor_ph'); // Valor por hora trabajada
    const inp_mes_lab = document.getElementById('inp_mes_lab'); // DIAS DEL MES

    const vphe_25 = document.getElementById('vphe_25');
    const vphe_35 = document.getElementById('vphe_35');
    const vphe_100 = document.getElementById('vphe_100');
    
    const her_25 = document.getElementById('her_25');
    const her_35 = document.getElementById('her_35');
    const her_100 = document.getElementById('her_100');

    const thesoles_25 = document.getElementById('thesoles_25');
    const thesoles_35 = document.getElementById('thesoles_35');
    const thesoles_100 = document.getElementById('thesoles_100');

    const btn_calcular = document.getElementById('btn_calcular'); //BOTON para calcular el resultado

    // Función para limpiar campos
    function limpiarCampos() {
        valor_ph.value = '';
        resultado.value = '';
        vphe_25.value = '';
        vphe_35.value = '';
        vphe_100.value = '';
        her_25.value = '';
        her_35.value = '';
        her_100.value = '';
        thesoles_25.value = '';
        thesoles_35.value = '';
        thesoles_100.value = '';
    }
    select_asignacionf.addEventListener('change', function() {
        const valor_asignacion_familiar = 102.50;
        if (select_asignacionf.value === 'si') {
            asignacion_fam.value = valor_asignacion_familiar;
            
        } else {
            asignacion_fam.value = '';
        }
        limpiarCampos();
    });

    btn_calcular.addEventListener('click', function() {
        const sueldoBasico = parseFloat(sueldo_basico.value) || 0;
        const asignacionFam = parseFloat(asignacion_fam.value) || 0;
        const inp_meslab = parseFloat(inp_mes_lab.value) || 0;
        
        // Sumar los valores y limitar a dos decimales
        const sueldo = (sueldoBasico + asignacionFam).toFixed(2);

        // Asignar el resultado al valor del input
        resultado.value = sueldo;

        // Asignar el valor por hora
        const valorPorHora = (((sueldo / inp_meslab) / 8)).toFixed(2);
        valor_ph.value = valorPorHora;
        
        //Asignar valores vphe
        vphe_25.value = (parseFloat(valorPorHora) + parseFloat(valorPorHora) * 0.25).toFixed(2);
        vphe_35.value = (parseFloat(valorPorHora) + parseFloat(valorPorHora) * 0.35).toFixed(2);
        vphe_100.value = (parseFloat(valorPorHora) + parseFloat(valorPorHora) * 1).toFixed(2);
        
        // Calcular valores thesoles
        thesoles_25.value = (parseFloat(vphe_25.value) * parseFloat(her_25.value)).toFixed(2);
        thesoles_35.value = (parseFloat(vphe_35.value) * parseFloat(her_35.value)).toFixed(2);
        thesoles_100.value = (parseFloat(vphe_100.value) * parseFloat(her_100.value)).toFixed(2);
    });
});
