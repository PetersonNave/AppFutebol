
const BASE_API = 'https://api.b7web.com.br/devbarber/api';

import ArenaCandeiasImage from './assets/imagesRooms/arenaCandeias.png';
import CendesulImage from './assets/imagesRooms/cendesul.png';
import QuadraDoLauroImage from './assets/imagesRooms/quadraDoLauro.png';
import QuadraDoRefletorImage from './assets/imagesRooms/quadraDoRefletor.png';
import ZecaSoccerImage from './assets/imagesRooms/zecaSoccer.png';


export default{


    getRooms:()=> {

    //  COMO EU NÃO CRIEI UMA API QUE RETORNA AS SALAS DISPONÍVEIS, EU VOU SIMULAR O QUE A API RETORNARIA CASO EU CHAMASSE
    //ESSA FUNÇÃO, POR ENQUANTO...

    const rooms = {
        "data":[
            {"id": 1, "name": 'Cendesul Society', "stars": 4.7, "avatar": CendesulImage},
            {"id": 2, "name": 'Quadra do Refletor', "stars": 3.7, "avatar": QuadraDoRefletorImage},
            {"id": 3, "name": 'Arena Candeias', "stars": 4.5, "avatar": ArenaCandeiasImage},
            {"id": 3, "name": 'Quadra do Lauro', "stars": 3.4, "avatar": QuadraDoLauroImage},
            {"id": 3, "name": 'Zeca Soccer', "stars": 4.5, "avatar": ZecaSoccerImage},

        ],
        "loc":"Recife"


    }
   
    return rooms;
   
    },

checkToken:async (token)=> {

    const req = await fetch(`${BASE_API}/auth/refresh`,
    {
        method: 'POST', headers:{
           Accept: 'application/json',
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
    });
     const json = await req.json();
     return json;
    
    },


signIn: async (email, password) => {
const req = await fetch(`${BASE_API}/auth/login`,
{
    method: 'POST', headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
});
 const json = await req.json();
 return json;

},

signUp: async (name, email, password) => {
    
    const req = await fetch(`${BASE_API}/user`,
{
    method: 'POST', headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
});
 const json = await req.json();
 return json;

},
};

