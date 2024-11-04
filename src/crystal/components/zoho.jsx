import axios from 'axios';


const client_id = '1000.O0YMG6257W995SZ44V4H4TNXRJY78H';
const client_secret = '1321f68536ee291d4202ebd817f9de1827e945277f';
const refresh_token = '1000.e3490035707bfdb1ad65cf7057c6baf7.d3b5b5dd6aa54e430fb461940465bb69';


const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refresh_token}&client_id=${client_id}&client_secret=${client_secret}&grant_type=refresh_token`
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};


export const fetchZohoData = async () => {
  try {
    const accessToken = await getAccessToken();
    
    const response = await axios.get('https://www.zohoapis.com/crm/v2/Leads', {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from Zoho CRM:", error);
    throw error;
  }
};
