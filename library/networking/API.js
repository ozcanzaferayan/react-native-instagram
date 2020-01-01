export const DEV_URL = 'https://randomuser.me/api';

export const fetchData = async (DEV_URL) => {
    try {
      const response = await fetch();
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };