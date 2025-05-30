const fetch = require("node-fetch")


exports.handler = async (event) => {
    const {name, email, message} = JSON.parse(event.body)

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;



    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                name,
                email,
                message
            }}
        )
    })

    if( response.ok){
        return {
            statusCode: 200,
            body: JSON.stringify({success: true})
        }
    }

    return {
            statusCode: 500,
            body: JSON.stringify({error: "Failed to send email"})
        }
}