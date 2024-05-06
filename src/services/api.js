import axios from 'axios';

export async function bookTicket(data) {
  console.log("bookTicket data", data);
  let bodyRequest = JSON.stringify({
    "customer": {
      "name": data.name,
      "email": data.email,
      "phone": data.phone
    },
    "ticket": {
      "fromStation": data.fromStation,
      "toStation": data.toStation,
      "quantity": data.quantity,
      "departureTime": data.departureTime
    }
  });

  let config = {
    method: 'post',
    url: 'http://localhost:3000/book-ticket',
    headers: {
      'Content-Type': 'application/json'
    },
    data: bodyRequest
  };
  try {
    const response = await axios.request(config);
    return JSON.stringify(response.data);
  } catch (err) {
    throw new Error(err);
  }
}