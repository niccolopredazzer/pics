import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6LWnOiAtmFaNPFxkskODUhLpdAN02ITJkdZSv9n3SDI',
  },
});