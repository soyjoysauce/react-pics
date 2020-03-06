import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization : 'Client-ID 92Ix0O-DAcLgLPsNmbgQBn7mZ3xAt3K9WF8sTykCwUs'
  }
});

