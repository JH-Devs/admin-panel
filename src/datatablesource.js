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
]