import axios from "axios";
import App from "../App";

const apiBuscaCEP = axios.create({
    
    baseURL:"https://viacep.com.br/ws/"

});

export default apiBuscaCEP;