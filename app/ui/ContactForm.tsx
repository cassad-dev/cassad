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
                setSuccessMessage(response.message); // Set success message
                reset(); // Reset form
            })
            .catch((err) => {
                console.error('Error:', err);
                // Handle error here
            })
            .finally(() => {
                setLoading(false); // Set loading to false after sending email
            });
    }

    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctanos</h2>
                <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 sm:text-xl">¿Necesitas ayuda? Estamos aquí para apoyarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
                {successMessage && (
                    <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">¡Éxito!</strong> <span>Mensaje enviado</span>
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                            Tu nombre
                        </label>
                        <input
                            id="name"
                            type='text'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Escribe tu nombre"
                            {...register('name', { required: true })}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Tu correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="ejemplo@email.com"
                            {...register('email', { required: true })}
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Deja un comentario..."
                            {...register('message', { required: true })}
                            required
                        >
                        </textarea>
                    </div>

                    <button type="submit" disabled={loading} className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-mainAzul-100 mx-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                </form>
            </div>
        </section>
    )
}