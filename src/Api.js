
const BASE_API = 'https://api.b7web.com.br/devbarber/api';

import ArenaCandeiasImage from './assets/imagesRooms/arenaCandeias.png';
import CendesulImage from './assets/imagesRooms/cendesul.png';
import QuadraDoLauroImage from './assets/imagesRooms/quadraDoLauro.png';
import QuadraDoRefletorImage from './assets/imagesRooms/quadraDoRefletor.png';
import ZecaSoccerImage from './assets/imagesRooms/zecaSoccer.png';


export default{


    getDetails:(i) =>{


      console.log("Id é: " + i);
        const rooms = {
            "1":[

                {"id": 1, "name": '@peter47', "vacations": 3, "Hour": "15:30"},
                {"id": 2, "name": '@Vitinho', "vacations": 0, "Hour": "17:30"},
                {"id": 3, "name": '@Manu247', "vacations": 5, "Hour": "14:00"},
                {"id": 3, "name": '@Jotinha', "vacations": 0, "Hour": "18:30"},
                {"id": 3, "name": '@Estevam', "vacations": 7, "Hour": "15:30"},
    
            ],
            "2":[

                {"id": 1, "name": '@ManoDavi', "vacations": 3, "Hour": "13:30"},
                {"id": 2, "name": '@Bielzinho', "vacations": 0, "Hour": "18:30"},
                {"id": 3, "name": '@Fernando', "vacations": 0, "Hour": "18:00"},
                {"id": 3, "name": '@Luiz', "vacations": 0, "Hour": "19:30"},
                {"id": 3, "name": '@Ateustan', "vacations": 0, "Hour": "14:30"},
    
            ],
            "3":[

                {"id": 1, "name": '@Leleh', "vacations": 2, "Hour": "14:30"},
                {"id": 2, "name": '@Feitosa', "vacations": 0, "Hour": "16:30"},
                {"id": 3, "name": '@Lucas', "vacations": 0, "Hour": "19:00"},
                {"id": 3, "name": '@Gabriel', "vacations": 1, "Hour": "13:30"},
                {"id": 3, "name": '@Gustavo', "vacations": 9, "Hour": "13:30"},
    
            ],
            "4":[

                {"id": 1, "name": '@Eloisa', "vacations": 0, "Hour": "13:30"},
                {"id": 2, "name": '@Bielzinho', "vacations": 0, "Hour": "15:30"},
                {"id": 3, "name": '@MALVADO', "vacations": 3, "Hour": "17:00"},
                {"id": 3, "name": '@Gelado13', "vacations": 3, "Hour": "18:30"},
                {"id": 3, "name": '@NeymarJr', "vacations": 5, "Hour": "19:30"},
    
            ],
            "5":[

                {"id": 1, "name": '@Bruno', "vacations": 2, "Hour": "11:30"},
                {"id": 2, "name": '@Boleiro', "vacations": 0, "Hour": "12:30"},
                {"id": 3, "name": '@Kaike', "vacations": 3, "Hour": "14:00"},
                {"id": 3, "name": '@Italo', "vacations": 0, "Hour": "18:30"},
                {"id": 3, "name": '@Moreno', "vacations": 9, "Hour": "15:30"},
    
            ]
    
    
        }

        
        return rooms[i];
       


    },



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

