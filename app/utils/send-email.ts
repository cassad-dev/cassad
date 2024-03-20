import { FormData } from "../ui/ContactForm";

export function sendEmail(data: FormData): Promise<{ message: string }> {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo.');
            }
            return res.json();
        })
}