import axios from 'axios';

export async function bookTicket(data) {
    let hardData = JSON.stringify({
      "customer": {
        "name": "Le Minh Nhan",
        "email": "leminhnhan@gmail.com",
        "phone": "0971339422"
      },
      "ticket": {
        "route": "SG-DL",
        "departureTime": "1",
        "quantity": 2,
        "price": 600000
      }
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/book-ticket',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : hardData
    };
    try {
        const response = await axios.request(config);
        return JSON.stringify(response.data);
    } catch (err) {
        throw new Error(err);
    }
}
