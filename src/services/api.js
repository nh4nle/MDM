import axios from 'axios';

export async function bookTicket(data) {
    let hardData = JSON.stringify({
      "customer": {
        "name": "Le Minh Nhan",
        "email": "leminhnhan@gmail.com",
        "phone": "0971339422"
      },
      "ticket": {
        "arrival": "SG",
        "departure": "DL",
        "quantity": 2,
        "ArrivalTime": "00:00"
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
    console.log(hardData);
    try {
        const response = await axios.request(config);
        return JSON.stringify(response.data);
    } catch (err) {
        throw new Error(err);
    }
}