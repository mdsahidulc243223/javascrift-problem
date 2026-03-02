// destructring muloto aktra arry ba object er poti ta element k alada alada variable e return kore
// age normally poti ta value pawar jonno amdr k index likhe kora lagto
// ex-
const array=[3,6,5,4,7]
const first=array[0];
console.log(first);


// but akhn ata alada alada kora lagbe na destructring use kore ak line e kore pela jai
// ex-
const array1=[3,6,5,4,7];
const [a,b,c]=array1;
console.log(a);
console.log(b);
console.log(c);
//  object er khatre o kora jai
// ex-
const product={
    price:600,
    name:'pant',
    place:'chittagong'
}
// normal way
console.log(product.price); 
// using destructring
const{price,name,place}=product;
console.log(name,place);
// variable er name rename o kora jai
const {price:newPrice,place:address}=product;
console.log(address);
//  default value o rakha jai
const {newprice,catagory='first'}=product;
console.log(catagory);
// nested destructring o kora jai
const product={
    price:600,
    name:'pant',
    place:'chittagong',
    address:{
        location:'ctg',
        zip:400
    }
}
let {address:{location,zip}}=product;
console.log(location);
console.log(zip);