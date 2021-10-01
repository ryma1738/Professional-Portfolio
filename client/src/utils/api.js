export const emailApiCall = (email, subject, message) => {
    return fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            subject: subject,
            message: message
        })
    });
}