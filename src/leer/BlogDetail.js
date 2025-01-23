// BlogDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Usamos useParams para obtener el id de la URL
import supabase from './supabaseClient';  // Importamos el cliente de Supabase

const BlogDetail = () => {
  const { id } = useParams();  // Obtenemos el id de la URL
  const [blog, setBlog] = useState(null);  // Estado para almacenar el blog
  const [loading, setLoading] = useState(true);  // Estado para la carga de datos

  // Función para cargar el blog por su id desde Supabase
  const loadBlog = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('blog')  // Nombre de la tabla en Supabase
      .select('*')    // Seleccionamos todos los campos
      .eq('id', id)   // Filtramos por el id
      .single();      // Aseguramos que solo obtenemos un blog

    if (error) {
      console.error('Error al cargar el blog:', error);
    } else {
      setBlog(data);  // Almacenamos el blog en el estado
    }
    setLoading(false);
  };

  useEffect(() => {
    loadBlog();  // Cargamos el blog cuando el componente se monte
  }, [id]);  // Dependemos del id para recargar el blog si cambia

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        blog && (
          <div className="blog-detail">
            <h1>{blog.bloguno}</h1>
            
            <p>{blog.blogdos}</p>
            <p><strong>ID:</strong> {blog.id}</p>
          </div>
        )
      )}
    </div>
  );
};

export default BlogDetail;



