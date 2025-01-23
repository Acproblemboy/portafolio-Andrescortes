import React from "react";



import Blogs from '../leer/Blogs';
const Blog = () => {

    return (
        <>
            <div class="div-4">
                <h1 class="title-1">Blog</h1>
                <p> Bienvenidos al blog de Andres Cortes, docente de informática.
                    Este espacio está dedicado a compartir mis experiencias, recursos y reflexiones
                    sobre la enseñanza de la informática. A lo largo de los años, he aprendido que enseñar
                    informática va mucho más allá de enseñar lenguajes de programación. Se trata de preparar
                    a los estudiantes para afrontar un mundo digital que está en constante evolución,
                    fomentando habilidades como el pensamiento crítico, la resolución de problemas y la creatividad.
                    A través de este blog, espero ofrecer consejos prácticos, reflexiones y recursos que ayuden tanto
                    a docentes como a estudiantes a aprovechar al máximo las herramientas digitales disponibles.
                </p>
                <Blogs/> 
               

            </div>


        </>
    )
}

export default Blog;