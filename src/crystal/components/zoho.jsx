import axios from 'axios';

const client_id = '1000.O0YMG6257W995SZ44V4H4TNXRJY78H';
const client_secret = '1321f68536ee291d4202ebd817f9de1827e945277f';
const redirect_uri = 'http://localhost:3000/oauth';
const scope = 'ZohoCRM.modules.ALL';

const getAccessToken = async () => {
  const storedRefreshToken = localStorage.getItem('zoho_refresh_token');

  if (!storedRefreshToken) {
    console.error("No refresh token available. Please authenticate again.");
    return null; // Return null if there’s no refresh token
  }

  try {
    const response = await axios.post(
      `https://accounts.zoho.com/oauth/v2/token?refresh_token=${storedRefreshToken}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`
    );
    console.log('Access token retrieved:', response.data.access_token); // Log access token for debugging
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    return null; // Return null if access token retrieval fails
  }
};

export const fetchZohoData = async (appointmentData) => {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      console.error("Access token is null. Please authenticate again.");
      return;
    }

    const response = await axios.post(
      'https://www.zohoapis.com/crm/v2/Leads',
      {
        data: [
          {
            Last_Name: appointmentData.name,
            Email: appointmentData.email,
            Appointment_Date: appointmentData.date,
            Appointment_Time: appointmentData.time,
          },
        ],
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      }
    );

    console.log('Data successfully sent to Zoho CRM:', response.data); // Success log
    return response.data;
  } catch (error) {
    console.error("Error in fetchZohoData:", error.response?.data || error.message);
    throw error; // Rethrow to catch in the component
  }
};
