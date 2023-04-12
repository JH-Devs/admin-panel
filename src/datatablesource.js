// users
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Jméno', width: 130 },
    { field: 'lastName', headerName: 'Příjmení', width: 130 },
    {
        field:'img',
        headerName:'Obrázek', 
        width:150, 
        renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
            </div>
        );
    }
},

    {
        field: 'address',
        headerName: 'Adresa',
        width: 250,
      },
      {
        field: 'phone',
        headerName: 'Telefon',
        width: 150,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 150,
      },
      {
        field: 'status',
        headerName: 'Stav',
        width: 150,
        renderCell:(params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
      },
      {
        field: 'role',
        headerName: 'Role',
        width: 150,
        renderCell:(params) => {
            return (
                <div className={`cellWithRole ${params.row.role}`}>{params.row.role}</div>
            )
        }
      },
];

// temporary data 
export const userRows = [
    {
        id:1, 
        firstName: 'Karel',
        lastName:'Nový',
        img:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Zákazník',
    },
    {
        id:2, 
        firstName: 'Maria',
        lastName:'Nová',
        img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Zákazník',
    },
    {
        id:3, 
        firstName: 'Vojta',
        lastName:'Nový',
        img:'https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg?auto=compress&cs=tinysrgb&w=1600',
        status: 'neaktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Host',
    },
    {
        id:4, 
        firstName: 'Jan',
        lastName:'Nový',
        img:'https://images.pexels.com/photos/16187929/pexels-photo-16187929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'neaktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Host',
    },
    {
        id:5, 
        firstName: 'Jana',
        lastName:'Nová',
        img:'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Host',
    },
    {
        id:6, 
        firstName: 'Katka',
        lastName:'Nová',
        img:'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Host',
    },
    {
        id:7, 
        firstName: 'Nina',
        lastName:'Nová',
        img:'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Zákazník',
    },
    {
        id:8, 
        firstName: 'Pepa',
        lastName:'Nový',
        img:'https://images.pexels.com/photos/1315910/pexels-photo-1315910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Zákazník',
    },
    {
        id:9, 
        firstName: 'Adam',
        lastName:'Nový',
        img:'https://images.pexels.com/photos/16153000/pexels-photo-16153000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'aktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Zákazník',
    },
    {
        id:10, 
        firstName: 'Jůlie',
        lastName:'Nová',
        img:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'neaktivní',
        email:'email@email.cz',
        phone:'111 111 111',
        address:'Adresa 1, 111 11 Město',
        role:'Host',
    },
];
// products
export const productColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field:'img',
        headerName:'Obrázek', 
        width:150, 
        renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
            </div>
        );
    }
},
    { field: 'title', headerName: 'Název', width: 650 },
    {
        field: 'stock',
        headerName: 'Skladem',
        width: 250,
        renderCell:(params) => {
            return (
                <div className={`cellWithStock ${params.row.stock}`}>{params.row.stock}</div>
            )
        }
      },
    { field: 'price', headerName: 'Cena', width: 150 },
];
export const productRows = [
    {
        id:1, 
        img:'https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg',
        title:'Apple AirTag',
        stock: 'skladem',
        price:'899 Kč',

    },
    {
        id:2, 
        img:'https://m.media-amazon.com/images/I/716dqDsJhBL.__AC_SY445_SX342_QL70_ML2_.jpg',
        title:'Chytré hodinky Apple Watch SE (2. generace)',
        stock: 'skladem',
        price:'7 000 Kč',

    },
    {
        id:3, 
        img:'https://m.media-amazon.com/images/I/61SiCfuiufL._AC_SX679_.jpg',
        title:'Lubluelu Akumulátorový vysavač',
        stock: 'vyprodáno',
        price:'3 255 Kč',

    },
    {
        id:4, 
        img:'https://m.media-amazon.com/images/I/71V+hf-PXML._AC_SX679_.jpg',
        title:'MINIS FORUM NAD9 Mini PC 32GB RAM 512GB',
        stock: 'vyprodáno',
        price:'20 700 Kč',

    },
    {
        id:5, 
        img:'https://m.media-amazon.com/images/I/61La8PAa42L._AC_SX679_.jpg',
        title:'Apple 2023 Mac Mini stolní počítač M2 čip s 8jádrovým CPU ',
        stock: 'u dodavatele',
        price:'15 800 Kč',

    },
    {
        id:6, 
        img:'https://m.media-amazon.com/images/I/71wLm2x6vKL._AC_SY450_.jpg',
        title:'WiFi chytrá zásuvka GNCC s kontrolou spotřeby energie, dálkové ovládání ',
        stock: 'u dodavatele',
        price:'875 Kč',

    },
    {
        id:7, 
        img:'https://m.media-amazon.com/images/I/517xu8CkNfL._SY450_.jpg',
        title:'Blink Mini – kompaktní, chytrá bezpečnostní kamera typu plug-in určená do interiérů',
        stock: 'skladem',
        price:'1 775 Kč',

    },
    {
        id:8, 
        img:'https://m.media-amazon.com/images/I/61C5J3+1BvL._AC_SX679_.jpg',
        title:'Horkovzdušná fritéza COSORI Smart WiFi 5,5 l',
        stock: 'skladem',
        price:'3 000 Kč',

    },
    {
        id:9, 
        img:'https://m.media-amazon.com/images/I/61BQ79LXR5L._AC_SY450_.jpg',
        title:'ORNO OR-ZS-850 Elektronický dveřní zámek Bluetooth Smart IP44 otevírání přes PIN ',
        stock: 'skladem',
        price:'2 150 Kč',

    },
    {
        id:10, 
        img:'https://m.media-amazon.com/images/I/41XgSuuhDgS._AC_SX450_.jpg',
        title:'Pepeo Ganuwa s LED osvětlením včetně dálkového ovládání',
        stock: 'skladem',
        price:'6 325 Kč',

    },
    {
        id:11, 
        img:'https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg',
        title:'Apple AirTag',
        stock: 'skladem',
        price:'899 Kč',

    },
    {
        id:12, 
        img:'https://m.media-amazon.com/images/I/716dqDsJhBL.__AC_SY445_SX342_QL70_ML2_.jpg',
        title:'Chytré hodinky Apple Watch SE (2. generace)',
        stock: 'skladem',
        price:'7 000 Kč',

    },
    {
        id:13, 
        img:'https://m.media-amazon.com/images/I/61SiCfuiufL._AC_SX679_.jpg',
        title:'Lubluelu Akumulátorový vysavač',
        stock: 'vyprodáno',
        price:'3 255 Kč',

    },
    {
        id:14, 
        img:'https://m.media-amazon.com/images/I/71V+hf-PXML._AC_SX679_.jpg',
        title:'MINIS FORUM NAD9 Mini PC 32GB RAM 512GB',
        stock: 'vyprodáno',
        price:'20 700 Kč',

    },
    {
        id:15, 
        img:'https://m.media-amazon.com/images/I/61La8PAa42L._AC_SX679_.jpg',
        title:'Apple 2023 Mac Mini stolní počítač M2 čip s 8jádrovým CPU ',
        stock: 'u dodavatele',
        price:'15 800 Kč',

    },
    {
        id:16, 
        img:'https://m.media-amazon.com/images/I/71wLm2x6vKL._AC_SY450_.jpg',
        title:'WiFi chytrá zásuvka GNCC s kontrolou spotřeby energie, dálkové ovládání ',
        stock: 'skladem u dodavatele',
        price:'875 Kč',

    },
    {
        id:17, 
        img:'https://m.media-amazon.com/images/I/517xu8CkNfL._SY450_.jpg',
        title:'Blink Mini – kompaktní, chytrá bezpečnostní kamera typu plug-in určená do interiérů',
        stock: 'skladem',
        price:'1 775 Kč',

    },
    {
        id:18, 
        img:'https://m.media-amazon.com/images/I/61C5J3+1BvL._AC_SX679_.jpg',
        title:'Horkovzdušná fritéza COSORI Smart WiFi 5,5 l',
        stock: 'skladem',
        price:'3 000 Kč',

    },
    {
        id:19, 
        img:'https://m.media-amazon.com/images/I/61BQ79LXR5L._AC_SY450_.jpg',
        title:'ORNO OR-ZS-850 Elektronický dveřní zámek Bluetooth Smart IP44 otevírání přes PIN ',
        stock: 'skladem',
        price:'2 150 Kč',

    },
    {
        id:20, 
        img:'https://m.media-amazon.com/images/I/41XgSuuhDgS._AC_SX450_.jpg',
        title:'Pepeo Ganuwa s LED osvětlením včetně dálkového ovládání',
        stock: 'skladem',
        price:'6 325 Kč',

    },
    {
        id:21, 
        img:'https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg',
        title:'Apple AirTag',
        stock: 'skladem',
        price:'899 Kč',

    },
    {
        id:22, 
        img:'https://m.media-amazon.com/images/I/716dqDsJhBL.__AC_SY445_SX342_QL70_ML2_.jpg',
        title:'Chytré hodinky Apple Watch SE (2. generace)',
        stock: 'skladem',
        price:'7 000 Kč',

    },
    {
        id:23, 
        img:'https://m.media-amazon.com/images/I/61SiCfuiufL._AC_SX679_.jpg',
        title:'Lubluelu Akumulátorový vysavač',
        stock: 'vyprodáno',
        price:'3 255 Kč',

    },
    {
        id:24, 
        img:'https://m.media-amazon.com/images/I/71V+hf-PXML._AC_SX679_.jpg',
        title:'MINIS FORUM NAD9 Mini PC 32GB RAM 512GB',
        stock: 'vyprodáno',
        price:'20 700 Kč',

    },
    {
        id:25, 
        img:'https://m.media-amazon.com/images/I/61La8PAa42L._AC_SX679_.jpg',
        title:'Apple 2023 Mac Mini stolní počítač M2 čip s 8jádrovým CPU ',
        stock: 'u dodavatele',
        price:'15 800 Kč',

    },
    {
        id:26, 
        img:'https://m.media-amazon.com/images/I/71wLm2x6vKL._AC_SY450_.jpg',
        title:'WiFi chytrá zásuvka GNCC s kontrolou spotřeby energie, dálkové ovládání ',
        stock: 'u dodavatele',
        price:'875 Kč',

    },
    {
        id:27, 
        img:'https://m.media-amazon.com/images/I/517xu8CkNfL._SY450_.jpg',
        title:'Blink Mini – kompaktní, chytrá bezpečnostní kamera typu plug-in určená do interiérů',
        stock: 'skladem',
        price:'1 775 Kč',

    },
    {
        id:28, 
        img:'https://m.media-amazon.com/images/I/61C5J3+1BvL._AC_SX679_.jpg',
        title:'Horkovzdušná fritéza COSORI Smart WiFi 5,5 l',
        stock: 'skladem',
        price:'3 000 Kč',

    },
    {
        id:29, 
        img:'https://m.media-amazon.com/images/I/61BQ79LXR5L._AC_SY450_.jpg',
        title:'ORNO OR-ZS-850 Elektronický dveřní zámek Bluetooth Smart IP44 otevírání přes PIN ',
        stock: 'skladem',
        price:'2 150 Kč',

    },
    {
        id:30, 
        img:'https://m.media-amazon.com/images/I/41XgSuuhDgS._AC_SX450_.jpg',
        title:'Pepeo Ganuwa s LED osvětlením včetně dálkového ovládání',
        stock: 'skladem',
        price:'6 325 Kč',

    },
];

// delivery
export const deliveryColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field:'img',
        headerName:'Obrázek', 
        width:450, 
        renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
            </div>
        );
    }
},
    { field: 'title', headerName: 'Název', width: 250 },
    { field: 'time', headerName: 'Dodací doba', width: 250 },
    { field: 'price', headerName: 'Cena', width: 250 },
];
export const deliveryRows = [
    {
        id:1, 
        img:'https://upload.wikimedia.org/wikipedia/commons/8/8e/Zasilkovna_Claim.png',
        title:'Zásilkovna',
        time: '2-3 dny',
        price:'69 Kč',

    },
    {
        id:2, 
        img:'https://blog.eshop-rychle.cz/wp-content/uploads/2021/03/Logo-balikovna-680x264.png',
        title:'Balíkovna',
        time: '2-3 dny',
        price:'59 Kč',

    },
    {
        id:3, 
        img:'https://www.retailys.cz/wp-content/uploads/2022/09/PPL-logo-1024x234.jpg',
        title:'Ppl',
        time: '1-2 dny',
        price:'65 Kč',

    },
    {
        id:4, 
        img:'https://gls-group.com/GROUP/media/images/GLS_Logo_2021_RGB_WhiteYellowDot_Descriptor_BlueBackground_M02_WIDE.png',
        title:'Gls',
        time: '1-2 dny',
        price:'99 Kč',

    },
    {
        id:5, 
        img:'https://www.rockawaycapital.com/wp-content/uploads/2020/11/weefbfbddo_na_bile_rgb_vyssi-1024x577.jpg',
        title:'WE-DO ',
        time: '2-3 dny',
        price:'119 Kč',

    },

];

// payments
export const paymentColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field:'img',
        headerName:'Obrázek', 
        width:400, 
        renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
            </div>
        );
    }
},
    { field: 'title', headerName: 'Název', width:450 },
    { field: 'price', headerName: 'Cena', width: 450 },
];
export const paymentRows = [
    {
        id:1, 
        img:'https://www.pngfind.com/pngs/m/31-317911_cash-png-cash-in-hand-icon-transparent-png.png',
        title:'Dobírka',
        price:'55 Kč',

    },
    {
        id:2, 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4VIEbJDnjn0O49SWLRm-zw5JiB1Cii9xUg&usqp=CAU',
        title:'Bankovní převod',
        price:'0 Kč',

    },
    {
        id:3, 
        img:'https://www.pngkey.com/png/full/281-2814450_online-payment-portal-online-payment-icon-png.png',
        title:'Online platba',
        price:'0 Kč',

    },
    {
        id:4, 
        img:'https://www.designportal.cz/obrazek/paypal_logo_02.png',
        title:'PayPal',
        price:'0 Kč',

    },
   
];

// categories
export const categoryColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field:'img',
        headerName:'Obrázek', 
        width:250, 
        renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar' />
            </div>
        );
    }
},
    { field: 'title', headerName: 'Název', width: 350 },
    { field: 'desc', headerName: 'Krátký popis', width: 550 },
];
export const categoryRows = [
    {
        id:1, 
        img:'https://m.media-amazon.com/images/I/61YBCzigmIL._AC_SX679_.jpg',
        title:'Televize',
        desc: 'Smart Tv, Lcd Tv, atd.',

    },
    {
        id:2, 
        img:'https://m.media-amazon.com/images/I/61uKXTdPubL._AC_SX679_.jpg',
        title:'Chytré telefony',
        desc: 'krátký popis',

    },
    {
        id:3, 
        img:'https://m.media-amazon.com/images/I/71HsumSEFdL._AC_SX679_.jpg',
        title:'Chytré hodinky',
        desc: 'krátký popis',

    },
    {
        id:4, 
        img:'https://m.media-amazon.com/images/I/71wLm2x6vKL.__AC_SX300_SY300_QL70_ML2_.jpg',
        title:'Smart Home',
        desc: 'krátký popis',

    },
    {
        id:5, 
        img:'https://m.media-amazon.com/images/I/816jMIw0mBL._AC_SX679_.jpg',
        title:'Příslušenství',
        desc: 'krátký popis',

    },

];
// documents
export const documentColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Název', width: 1300 },

];
export const documentRows = [
    {
        id:1, 
        title:'Obchodní podmínky',

    },
    {
        id:2, 
        title:'Gdpr',

    },
    {
        id:3, 
        title:'Reklamace',

    },
    {
        id:4, 
        title:'Reklamačná řád',

    },
    {
        id:5, 
        title:'Jak nakupovat',

    },

];
// orders
export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Uživatel', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Telefon', width: 100 },
    { field: 'address', headerName: 'Adresa', width: 230 },
    { field: 'total', headerName: 'Celková cena', width: 120 },
    {
        field: 'payment',
        headerName: 'Platba',
        width: 150,
        renderCell:(params) => {
            return (
                <div className={`cellWithPayment ${params.row.payment}`}>{params.row.payment}</div>
            )
        }
      },
    { field: 'date', headerName: 'Datum', width: 150 },
    {
        field: 'status',
        headerName: 'Stav',
        width: 250,
        renderCell:(params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
      },
];
export const orderRows = [
    {
        id:1, 
        user:'Jan Nový',
        email:'email@email.cz',
        phone: '123 456 789',
        address: 'Ulice 1, 111 11 Město',
        total:'15 352 Kč',
        payment:'dobírka',
        date: '1 Bře 23',
        status: 'vyřízeno',

    },
    {
        id:2, 
        user:'Jana Nová',
        email:'email@email.cz',
        phone: '123 456 789',
        address: 'Ulice 1, 111 11 Město',
        total:'1 555 Kč',
        payment:'bankovní převod',
        date: '10 Bře 23',
        status: 'zpracovává se',

    },
    {
        id:3, 
        user:'Katka Nová',
        email:'email@email.cz',
        phone: '123 456 789',
        address: 'Ulice 1, 111 11 Město',
        total:'13 555 Kč',
        payment:'online platba',
        date: '20 Bře 23',
        status: 'odesláno',

    },
    {
        id:4, 
        user:'Jana Nová',
        email:'email@email.cz',
        phone: '123 456 789',
        address: 'Ulice 1, 111 11 Město',
        total:'1 005 Kč',
        payment:'paypal',
        date: '25 Bře 23',
        status: 'odesláno',


    },
    {
        id:5, 
        user:'Jan Nový',
        email:'email@email.cz',
        phone: '123 456 789',
        address: 'Ulice 1, 111 11 Město',
        total:'11 555 Kč',
        payment:'bankovní převod',
        date: '30 Bře 23',
        status: 'storno',


    },

];