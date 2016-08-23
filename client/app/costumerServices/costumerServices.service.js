'use strict';
class costumerServices{
  constructor(){
    
	}
  
  initLocalStorage(){
    let lsBrowser=window.localStorage.getItem("db_tradix");
    if(lsBrowser==null){
      let dats=[
            {
                "id":"1",
                "name":"Roberto Zapata",            
                "latitud": -15.3661616516,
                "longitud": -56.656516516,
                "vehicle":{
                    "type": "A",
                    "color": "azul",
                    "plate": "6452-GTR"
                },
                "gps":{
                    "brand":"deytech",
                    "model": "105j",
                    "date_start": "12/4/2016",
                    "date_end": "12/4/2017"
                }

            },
            {
                "id":"2",
                "name":"Arredondo Ovalle Javier Leonardo",            
                "latitud": -15.3661616516,
                "longitud": -56.656516516,
                "vehicle":{
                    "type": "M",
                    "color": "negro",
                    "plate": "6452-GTR"
                },
                "gps":{
                    "brand":"deytech",
                    "model": "105j",
                    "date_start": "12/4/2016",
                    "date_end": "12/4/2017"
                }

            },
            {
                "id":"3",
                "name":"Caballero Valle Prudenciano",            
                "latitud": -15.3661616516,
                "longitud": -56.656516516,
                "vehicle":{
                    "type": "M",
                    "color": "blanco",
                    "plate": "6452-GTR"
                },
                "gps":{
                    "brand":"deytech",
                    "model": "105j",
                    "date_start": "12/4/2016",
                    "date_end": "12/4/2017"
                }

            },
            {
                "id":"4",
                "name":"Escamilla Vásquez César",            
                "latitud": -15.3661616516,
                "longitud": -56.656516516,
                "vehicle":{
                    "type": "M",
                    "color": "rojo",
                    "plate": "6452-GTR"
                },
                "gps":{
                    "brand":"deytech",
                    "model": "105j",
                    "date_start": "12/4/2016",
                    "date_end": "12/4/2017"
                }

            }   

    ];

      localStorage.setItem("db_tradix",JSON.stringify(dats));
      console.log("localStorage started...");
    }else{
      console.log("localStorage not initializad by exists...");
    }
  }

  getListOfCostumers(){
    let dats= JSON.parse(localStorage.getItem("db_tradix"));
    return dats;
  }

}
angular.module('radarProjectApp.costumerServices',[])
  .service('costumerServices', costumerServices);
