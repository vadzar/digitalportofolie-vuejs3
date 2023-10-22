import { axiosConnector } from './apiConnector';

async function fetchUserData() {
  try {
    const userData = await axiosConnector.get<UserData>('/users/123');
    console.log('User Data:', userData);
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
    }
}

// Define a TypeScript interface for the expected response data (UserData)
interface UserData {
  // Define the structure of the user data here
  id: number;
  name: string;
  email: string;
}

// Call the function to fetch user data
// fetchUserData();







