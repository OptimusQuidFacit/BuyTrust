import PriceDetails from "@/components/seller/PriceDetails"
import { timeStamp } from "console"
const date= new Date()

export const products=[
    {
        id:"232425819",
        name: "Iphone 16",
        price: 900000,
        image: [],
        description: "A Water resistant high end smartphone from the apple line",
        stock:2,
        category:["Electronics", "Phones"]
    },
    {
        id:"0932099",
        name: "1 bag of Cashew Nuts",
        price: 200000,
        image: [],
        description: "Tasty Cashew Nuts just for you",
        stock:3,
        category:["Food"]
    },
    {
        id:"736272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"672272",
        name: "A bag of Rice",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"2453272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"754872",
        name: "A bag of Beans",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"7382979",
        name: "A basket of onions",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"734572",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"086272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"986272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"546272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
    {
        id:"936272",
        name: "A bag of cement",
        price: 100000,
        image: [],
        description: "Durable cement for durable buildings",
        stock:4,
        category:["Building"]
    },
]


export const Orders=[
    {
        id:"#1415252",
        buyerId:"#2562",
        sellerId:"#1325252",
        product:{name:"Apple wrist watch", price:"500000"},
        quantity:1,
        totalAmount:500000,
        status:"pending",
        paymentStatus:"escrowed",
        isConfirmed:false,
        timeStamp:new Date(2025,10,22)
    },
    {
        id:"#3637589",
        buyerId:"#13141",
        sellerId:"#1q6q621",
        product:{name:"Samsung Tablet", price:"600000"},
        quantity:2,
        totalAmount:1200000,
        status:"delivered",
        paymentStatus:"released",
        isConfirmed:false,
        timeStamp:new Date(2025,8,24)
    },
    {
        id:"#7236463",
        buyerId:"#252342",
        sellerId:"#27181",
        product:{name:"Bag of rice", price:"60000"},
        quantity:10,
        totalAmount:600000,
        status:"shipped",
        paymentStatus:"escrowed",
        isConfirmed:false,
        timeStamp: new Date(2025,7,21)
    },

]


export const payments =[
    {
        transactionId:"3141562",
        order:{
            product:{
                name:"A bag of beans",
                price: 12000
            }
        },
        status:"released",
        amount:48000
    },
    {
        transactionId:"546272",
        order:{
            product:{
                name:"Bottle of Honey",
                price: 4000
            }
        },
        status:"escrowed",
        amount:4000
    }
]