let map;

function initMap() {
    const myLatLng = { lat: 21.81428552567272, lng: -102.76898188728283 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: myLatLng,
    });
    const image =
        "./universidad.png";  //CREAMOS LA CONSTANTE CON LA RUTA DE LA IMAGEN
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "UTC!",
        icon: {        // AGREGAMOS EL OBJETO ICON CON URL (IMG) Y EN TAMANIO
            url: image,
            scaledSize: new google.maps.Size(40, 40)
        },
        animation: google.maps.Animation.BOUNCE,  //ESTA ES LA ANIMACION

    });
    //Crearemos la barra de busqueda (searchbox)
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);

    //Evento de buscar resultados a base de inputs de usuario
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    }
    );
    //agregamos a un arreglo los marcadores que nos de el resultado
    let markers = [];

    //escuchamos el evento al seleccionar el lugar de el arreglo de resultados
    searchBox.addListener("places_changed",
        () => {
            const places = searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            //eliminamos los marcadores anteriores
            markers.forEach((marker) => marker.setMap(null));
            markers = [];
            //Ajustamos los limites del mapa para mostrar el lugar seleccionado
            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("lugar incorrecto o sin geometria");
                    return;
                }
                //aqui agregamos los marcadores nuevos pARA CADA BUSQUEDA
                
                // Crear un marcador para cada lugar
                const marker = new google.maps.Marker({
                    map,
                    icon: {
                        url: image, // Mantener el ícono personalizado
                        scaledSize: new google.maps.Size(40, 40),

                    },
                    title: place.name,
                    position: place.geometry.location,
                    animation: google.maps.Animation.DROP,
                    zoom: 16,
                });

                markers.push(marker);

                //Verrificamos si existe vista, y aderimos la locacion
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);

                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        }
    )




}

initMap();
/* let map;
async function initMap() {
  const position = { lat: 21.814326449341447, lng: -102.76976863232528 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
  });

  const image = "./universidad.png" 
  new google.maps.Marker({
    position: position,
    map,
    title: "UTC",
    icon: { 
      url: image,
      scaledSize: new google.maps.Size(40,40),
    },
    animation: google.maps.Animation.BOUNCE, 
  })

  const input = document.getElementById('pac-input');
  const searchBox = new google.maps.places.SearchBox(input);

  
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

 
  let markers = [];


  searchBox.addListener("places_changed",
    () => {
      const places = searchBox.getPlaces();
      if (places.length === 0 {
        return;
      }
     
      markers.forEach((marker) => marker.setMap(null));
      marker = [];
      
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Lugar incorrecto o sin geometria");
          return;
        }
        new google.maps.Marker({
          position: position,
          map,
          title: "UTC",
          icon: { 
            url: image,
            scaledSize: new google.maps.Size(40,40),
          },
          animation: google.maps.Animation.BOUNCE, 
        })
        
        if (places.geometry.viewport){
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    }); 
}

initMap();  */
/* let map;

function initMap(){
  const myLatLng = { lat: 21.814326449341447, lng: -102.76976863232528};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });
  const image = "C:/Users/utcalvillo/ProyectoApis.github.io/universidad.png";
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "UTC",
    icon: {
      url: image,
      scaledSize: new google.maps.Size(40, 40)
    },
    animation: google.maps.Animation.BOUNCE,
  });
}

initMap(); */
// Initialize and add the map