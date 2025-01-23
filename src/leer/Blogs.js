// Blogs.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Usamos Link de React Router
import supabase from './supabaseClient';  // Importamos el cliente de Supabase

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);  // Estado para almacenar los blogs
  const [loading, setLoading] = useState(true);  // Estado para la carga

  // Función para cargar los blogs desde Supabase
  const loadBlogs = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from('blog')  // Nombre de la tabla en Supabase
      .select('*');   // Selecciona todos los campos

    if (error) {
      console.error('Error al cargar los blogs:', error);
    } else {
      setBlogs(data);  // Almacenamos los blogs en el estado
    }
    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();  // Cargar los blogs cuando el componente se monte
  }, []);

  return (
    <div>
      <h1>Lista de Blogs</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <h2>{blog.bloguno}</h2>
            <p>{blog.blogdos.substring(0, 100)}...</p>            
            <Link to={`/blog/${blog.id}`}>Leer más</Link>  {/* Enlace para leer más */}
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
