import React from "react";
import crud from "../Imagenes/crud.png";
import crud2 from "../Imagenes/crud2.png";
const Proyectos = () => {

    return (
        <>
            <div>
                <div class="div-4">
                    <h1 class="title-1">Proyectos</h1>
                    <p>En el marco de mi curso de Tecnologías de la Información, diseñé
                        un proyecto en el que los estudiantes tenían que desarrollar una base
                        de datos sencilla en Mysql en conexiòn con java.
                    </p>
                    <p>El propósito era que los estudiantes
                        comprendieran cómo gestionar datos a travez del modelado de datos
                        identificando las entidades,relaciones y atributos a partir de estos datos crear un modelo
                        relacional y finalmente una interfaz funcional para interactuar
                        con esos datos a través un LOGIN y un CRUD básico utilizando formularios.
                    </p>
                    <div>
                        <div class="container1"><img src={crud} alt="CRUD" /></div>
                        <div class="container2"><img src={crud2} alt="CRUD2" /></div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Proyectos;