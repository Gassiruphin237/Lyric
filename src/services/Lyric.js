import axios from 'axios';

const fetchLyrics = async (artist, title) => {
  try {
    const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    return response.data.lyrics;
  } catch (error) {
    throw new Error('Unable to fetch lyrics. Please try again later.');
  }
};

export { fetchLyrics };
