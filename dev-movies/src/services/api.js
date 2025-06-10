import axios from "axios";

    
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "703ee69fb040e87e3db16da53e1080d0",
    language: "pt-BR",
    page: 1,
  },
});
    
export default api;

//TOKEN DE LEITURA DA API
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDNlZTY5ZmIwNDBlODdlM2RiMTZkYTUzZTEwODBkMCIsIm5iZiI6MTc0ODgwMjc0MC43ODU5OTk4LCJzdWIiOiI2ODNjOWNiNGUxODQyZDZjZjRmZGIxODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mUezbUSbstRkFLTAXr5nDu8SMfujX0-w_afiUfnS_8c


//CHAVE DA API
//API-KEY: 703ee69fb040e87e3db16da53e1080d0
