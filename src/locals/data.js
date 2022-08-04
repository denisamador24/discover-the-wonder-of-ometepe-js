const dataRestaurants = [
  {
    name: 'Mi rancho finca La Florida',
    schedule: '12md a 10pm',
    address: 'Del campo desportivo Los Ángeles km 7',
    geo: '',
    phone: '58193695',
    email: '',
    photos: [
      'mi-rancho',
      'mi-rancho1',
      'mi-rancho2',
      'mi-rancho4',
      'mi-rancho5',
      'mi-rancho6'
    ],
    description: {
      text: '',
      img: []
    }
  },
  {
    name: 'Comedor Melva',
    schedule: '8am a 10pm',
    address: 'Detras de la iglesia católica, comarca Esquipulas',
    geo: '',
    phone: '58011865',
    email: '',
    photos: [
      'comedor-melva',
      'comedor-melva1',
    ],
    description: {
      text: 'El comedor Melva ofrece desayuno y cena a precio accesible, calidad garantizada',
      img: []
    }
  },
  {
    name: 'Hostal Los Cocos',
    address: '',
    schedule: '7am a 9mp de Lunes a Domingos',
    geo: '',
    phone: '87446313',
    email: 'comedorloscoco5@gmail.com',
    photos: [
         'coco',
         'coco1',
         'coco2',
       ],
    description: {
      text: 'Servicio de hospedaje y restaurante',
      img: []
    }
  },
  {
    name: 'Hospedaje Central y Restaurante El Indio Viejo',
    schedule: '',
    address: '',
    geo: '',
    phone: '2569 4233',
    email: '',
    photos: [
        'indio',
        'indio1',
        'indio2',
        'indio3',
        'indio4'
      ],
    description: {
      text: '',
      img: [
        'indio-d2',
        'indio-d',
        'indio-d1'
      ]
    }
  },
];
const dataHotels = [
  {
    name: 'La Estancia',
    schedule: '8am a 10pm',
    address: '',
    geo: '',
    phone: '84118589',
    email: '',
    photos: [
      'estancia',
      'estancia1',
      'estancia2',
      'estancia3',
      'estancia4'
    ],
    description: {
      text: 'Estancia Ofrecen desayuno gratis Wi-Fi, aceptan mascotas, aire acondicionado,  lavandería, restaurantes, servicio de limpieza, recepción disponible 24 horas,los niños de 7 años de edad se hospedan gratis y piscina',
      img: []
    }
  },
  {
    name: 'La Punta Resort',
    schedule: '24hrs',
    address: '',
    geo: '',
    phone: '88193222',
    email: '',
    photos: [
      'punta-resort',
      'punta-resort1',
      'punta-resort2',
      'punta-resort3',
      'punta-resort4'
    ],
    description: {
      text: 'Hospedaje, desayuno y piscina',
      img: []
    }
  },
  {
    name: 'Hotel Charco Verde',
    schedule: '7am a 5pm',
    address: '',
    geo: "11° 28' 36.385° 38' 05.0", 
    phone: '8685 2231',
    email: '',
    photos: [
      'verde',
      'verde1'
    ],
    description: {
      text: 'Hotel y Restaurante Charco Verde. Somo un hotel donde estaras en completo contacto con la naturaleza, la mejor opción para tu descanso en pareja y familia,  durante tu estadía podrás visitar nuestras reserva ecológica Charco verde, mariposario y otros atractivos que ofrecemos',
      img: []
    }
  },
  {
    name: 'Xalli',
    schedule: '24hrs',
    address: 'De la playa San Fernando a 800mts al norte de Santo Domingo y 1 kilómetro al sur de Santa Cruz',
    geo: '',
    phone: '25694876',
    email: '',
    photos: [
      'xalli',
    ],
    description: {
      text: 'El Xalli ofrece solárium y vista al lago. Se proporciona Wi-fi gratuito en las zonas comunes y aparcamiento privado gratuito.\n'+
      'Las habitaciones del hote presentan una decoración individual. Todas las tarifas incluyen desayuno completo a la carta para dos personas',
      img: []
    }
  },
  {
    name: 'Buena vista',
    schedule: '7am a 11pm',
    address: 'Proximo al hotel Santo Domingo',
    geo: '',
    phone: '89482041',
    email: '',
    photos: [
       'buena-vista',
       'buena-vista1',
       'buena-vista2',
     ],
    description: {
      text: 'Servicio de hospedaje con desayuno incluído, precio $20',
      img: []
    }
  },
  {
    name: 'Nicaraús',
    schedule: '',
    address: 'Del hospital de moyogalpa, 100 metros al sur',
    geo: '',
    phone: '25694233',
    email: '',
    photos: [
      'nicarao',
      'nicarao1',
      'nicarao3',
      
    ],
    description: {
      text: '',
      img: [
        'nicarao-d'
      ]
    }
  },
  {
    name: 'Finca Santo Domingo',
    schedule: '7am a 7pm de lunes a domingos',
    address: 'Del hospital de moyogalpa, 100 metros al sur',
    geo: '',
    phone: '88224345',
    email: 'hotel_santo_domingo@gmail.com',
    photos: [
      'finca',
      'finca1',
      'finca2',
      'finca3',
      'finca4',
      'finca5',
      'finca6'
    ],
    description: {
      text: 'Hospedaje bar y restaurante \nLes ofrecemos: desayuno, almuerzo y cena',
      img: []
    }
  },
];

const dataBeach = [
  {
    name: 'Puesta del sol',
    schedule: '',
    address: '',
    geo: '',
    phone: '83502728',
    email: 'info@puestadesol.com',
    photos: [
      'sol',
      'sol1',
      'sol3',
      'sol4'
    ],
    description: {
      text: 'Puesta de sol Ofrecen algunos servicios parking gratis para niños y lavandería. Wi-Fi, aparcamiento gratuito, desayuno, playa,habitaciones para familia',
      img: []
    }
  },
  {
    name: 'Reserva natural Ojo de Agua',
    schedule: 'De Lunes a Domingos de 8am a 5pm',
    address: 'Altagracia, del quino 1.7km carretera a Santo Domingo',
    geo: '',
    phone: '58310130',
    email: 'cabrerayometepe@yahoo.com',
    photos: [
        'ojodeagua',
        'ojodeagua1',
        'ojodeagua2',
      ],
    description: {
      text: 'Ofrece desayuno, almuerzo, cocteles, bibidas naturales y todo tipo de licores; habitaciones',
      img: [
        'ojodeagua-d'
      ]
    }
  },
];
const dataBars = [];
const dataParks = [];
