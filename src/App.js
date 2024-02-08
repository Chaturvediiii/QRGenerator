import React, { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import axios from "axios";
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const [response,setResponse] = useState('')
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const config = {
    headers: {Authorization: 'Bearer 7da2eee0-c4ec-11ee-bbfc-3b65948fb20e'}
  }

  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url
  };



  const getQRCode = async () =>{
    try{
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      )
      setResponse(res.data.url)
    }catch(err){
        setError(err)
    } finally {
      setLoading(false)
    }
  }

  const value = {
    inputValue,
    setInputValue,
    getQRCode,
    response,
    loading,
    error
  };
  return (
    <div className="bg-gray-900 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
