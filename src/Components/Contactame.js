//ContactForm
import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const Contactame = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contacto').insert([formData]);
      if (error) throw error;

      setFeedback('¡Formulario enviado con éxito!');
      setFormData({ name: '', email: '', message: '', phone:'' }); // Limpia el formulario
    } catch (error) {
      setFeedback(`Error al enviar el formulario: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label> telefono<input type="phone" name="phone" values={formData.phone} onChange={handleChange} required /></label>
        <br />
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Contactame;