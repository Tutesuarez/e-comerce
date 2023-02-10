let products=[
    {id: '1',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-01.png',nombre: 'Belt', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '2',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-02.png',nombre: 'Cap', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '3',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-03.png',nombre: 'Long-sleeves', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '4',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-04.png',nombre: 'Black-Shoes', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '5',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-05.png',nombre: 'Sunglasess', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '6',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-06.png',nombre: 'White T-shirt', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '7',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-07.png',nombre: 'Wallet', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '8',cantidad: 1,categoria: 'man',img: '/src/assets/img/pm-08.png',nombre: 'Watch', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '9',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-01.png',nombre: 'Perfume', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '10',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-02.png',nombre: 'Handbag', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '11',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-03.png',nombre: 'Lipsticks', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '12',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-04.png',nombre: 'Watches', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '13',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-05.png',nombre: 'Brushes', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '14',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-06.png',nombre: 'Sunglasess', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '15',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-07.png',nombre: 'Shoes', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '16',cantidad: 1,categoria: 'woman',img: '/src/assets/img/pr-08.png',nombre: 'Jyeweller', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '17',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-01.png',nombre: 'Body', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '18',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-02.png',nombre: 'Combinate', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '19',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-03.png',nombre: 'Dress', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '20',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-04.png',nombre: 'Combinate', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '21',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-05.png',nombre: 'Short', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '22',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-06.png',nombre: 'T-Shirt', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '23',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-07.png',nombre: 'Shoes', descripcion:'Aqui va una descripcion del producto',precio: 250 },
    {id: '24',cantidad: 1,categoria: 'kids',img: '/src/assets/img/pk-08.png',nombre: 'Sweater', descripcion:'Aqui va una descripcion del producto',precio: 250 }
];


export const mFetch=()=>new Promise((res,rej)=>{
    let status=true;
    if(status) {
        setTimeout(()=>{
            res(products);
        },1000)
    }else {
        rej('Error');
    }
})