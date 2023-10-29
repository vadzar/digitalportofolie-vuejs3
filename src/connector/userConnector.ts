import { axiosConnector } from './apiConnector';

export const fetchUserData = async (token:string) => {
  try {
    const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const userData = await axiosConnector.get<UserData>(
      '/user/details',
      config
    );
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

export const userLogin = async(data:any) => {
    try {
        const config: AxiosRequestConfig = {
            headers: {
                //'Authorization': 'Bearer your_token_here',
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const resp = await axiosConnector.post<any>(
            '/auth/authenticate', 
            data,
            config
        );
        return resp;
    } catch(error) {
        alert("Incorrect email or password");
        console.error('Failed login: ', error);
        return null;
    }
}

export const userRegister = async (data:any) => {
  try {
      const config: AxiosRequestConfig = {
          headers: {
              //'Authorization': 'Bearer your_token_here',
              'Content-Type': 'application/json; charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
          },
      };
      const resp = await axiosConnector.post<any>(
          '/auth/register', 
          data,
          config
      );
      return resp;
  } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert(error.message);
      }
      console.error('Failed register: ', error);
  }
}

export const updateUserData = async (data:UserData, token:string) => {
  try {
      const config: AxiosRequestConfig = {
          headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json; charset=UTF-8',
              'Access-Control-Allow-Origin': '*'
          },
      };
      const resp = await axiosConnector.post<UserData>(
          '/user/update', 
          data,
          config
      );
      return resp;
  } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert(error.message);
      }
      console.error('Failed update: ', error);
  }
}

// Define a TypeScript interface for the expected response data (UserData)
export interface UserData {
  // Define the structure of the user data here
  id: number;
  firstName: string;
  lastName: string;
  aboutMe: string;
  email: string;
  password: string,
  role: string;
}

// Call the function to fetch user data
// fetchUserData();







