import axios from 'axios';

const API_URL = 'https://dspa.apigateway.data.gov.mo/T_Bas_POI_Basic/plasticNCanRecycle';
const API_KEY = '09d43a591fba407fb862412970667de4';

export const fetchRecyclingPoints = async () => {
  try {
    console.log('Fetching recycling points...');
    const response = await axios.post(API_URL, 
      {
        // Add any required body parameters here
        // For example:
        // "param1": "value1",
        // "param2": "value2"
      },
      {
        headers: {
          'Authorization': `APPCODE ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('API Response:', response);
    
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid data format received from API');
    }
    
    console.log(`Fetched ${response.data.length} recycling points`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recycling points:', error);
    if (error.response) {
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};