import ActionRes from '@/interfaces/ActionsRes';
import LoginRes from '@/interfaces/Login';
import SignUpRes from '@/interfaces/SignUpRes';
import axios, { AxiosError, AxiosResponse } from 'axios';


const VITE_USER_API_URL: string  = import.meta.env.VITE_USER_API_URL || '';
const VITE_ACTIONS_API_URL: string  = import.meta.env.VITE_ACTIONS_API_URL || '';
const VITE_AUTH_API_URL: string  = import.meta.env.VITE_AUTH_API_URL || '';


const handleAxiosError = (error: AxiosError) => {
  console.error('Error en la llamada a la API:', error);
  throw error;
};


export const login = (username: string, password: string): Promise<AxiosResponse<LoginRes>> => {
  const url = VITE_AUTH_API_URL
  
  return axios
    .post(url, {
      username,
      password
    })
    .then((response) => response)
    .catch(handleAxiosError);

}

export const signUp = (username: string, password: string): Promise<AxiosResponse<SignUpRes>> => {
  const url = VITE_USER_API_URL
  
  return axios
    .post(url, {
      username,
      password
    })
    .then((response) => response.data)
    .catch(handleAxiosError);

}

export const actions = (): Promise<AxiosResponse<ActionRes>> => {
  const url = VITE_ACTIONS_API_URL
  const token = localStorage.getItem("token")!.replace(/"/g, '')
  return axios
    .get(url,{
      headers: {
        'Authorization': token
}})
    .then((response) => response.data)
    .catch(handleAxiosError);

}

