import React, { createContext, useContext } from "react";
import { AxiosRequestConfig, AxiosError, AxiosResponse, AxiosInstance } from "axios";

import api from "../services/api";

import { LoadingContext } from "./LoadingContext";

interface ApisContextProps{
  api:AxiosInstance;
}

const ApisContext = createContext<ApisContextProps>({} as ApisContextProps)

const ApisProvider: React.FC = ({children}) => {
  const { open, close } = useContext(LoadingContext);

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      open();
      return config;
    },
    (err: AxiosError) => {
      close();
      return Promise.reject(err);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      close();
      return response;
    },
    (err: AxiosError) => {
      close();
      return Promise.reject(err);
    }
  );

  return <ApisContext.Provider value={{api}}>{children}</ApisContext.Provider>;
};

export default ApisProvider;