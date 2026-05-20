'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function onSubmit(data: FormData) {
    setLoading(true);
    sendEmail(data)
      .then((response) => {
        setSuccessMessage(response.message);
        reset();
      })
      .catch((err) => {
        console.error('Error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: heading + contact info */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-6">
              Contáctanos
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Inicia el diagnóstico de tu patrimonio
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12">
              Cuéntanos sobre tu situación y un experto de Cassad se pondrá en contacto contigo para una consulta personalizada, sin compromiso.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-gray-200 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cassad-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Monterrey, Nuevo León, México</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center border border-gray-200 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cassad-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:mmcassad@gmail.com" className="text-sm text-gray-600 hover:text-cassad-blue transition-colors">
                  mmcassad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {successMessage && (
              <div className="mb-6 p-4 border border-green-200 bg-green-50 text-green-800 text-sm">
                Mensaje enviado con éxito. Nos pondremos en contacto pronto.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cassad-blue transition-colors bg-white"
                  {...register('name', { required: true })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cassad-blue transition-colors bg-white"
                  {...register('email', { required: true })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu propiedad o situación..."
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-cassad-blue transition-colors resize-none bg-white"
                  {...register('message', { required: true })}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cassad-blue text-white py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0a3558] transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
