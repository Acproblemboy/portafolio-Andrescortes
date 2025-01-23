import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // Importa la configuración de Supabase

const Info = () => {
  const [blog, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para mostrar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Hacemos la consulta a la base de datos cuando el componente se monta
  useEffect(() => {
    // Función para obtener los usuarios desde Supabase
    const fetchUsers = async () => {
      try {
        setLoading(true); // Iniciamos la carga
        const { data, error } = await supabase
          .from('blog') // Nombre de la tabla que quieres consultar
          .select('*'); // Selecciona todas las columnas

        if (error) throw error; // Si hay error, lo lanzamos

        setUsers(data); // Guardamos los datos en el estado
        setLoading(false); // Terminamos la carga
      } catch (error) {
        setError(error.message); // Capturamos errores
        setLoading(false); // Terminamos la carga
      }
    };

    fetchUsers(); // Llamamos la función para obtener los datos
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.bloguno}</strong> - {blog.blogdos}
            <Link to={`/Blog/${blog.id}`}>Leer más</Link>  {/* Enlace para leer más */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;