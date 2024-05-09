import axios from "axios";
export const getAxiosData = async (query) => {
  const url = process.env.REACT_APP_API_URL; // API URL'ini .env dosyasından al
  try {
    const response = await axios.get(`${url}${query || ""}`);
    return response.data;
  } catch (error) {
    console.error(`Veri alınırken bir hata oluştu: ${error}`);
  }
};
