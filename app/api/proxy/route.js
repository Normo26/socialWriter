// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.tesla-mag.com/wp-json/wp/v2/posts');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}