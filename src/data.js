import A1 from './assets/images/Product 1/A1.webp'
import A2 from './assets/images/Product 1/A2.webp'
import A3 from './assets/images/Product 1/A3.webp'
import A4 from './assets/images/Product 1/A4.webp'

import B1 from './assets/images/Product 2/B1.webp'
import B2 from './assets/images/Product 2/B2.webp'
import B3 from './assets/images/Product 2/B3.jfif'
import B4 from './assets/images/Product 2/B4.webp'

import C1 from './assets/images/product3/C1.webp'
import C2 from './assets/images/product3/C2.webp'
import C3 from './assets/images/product3/C3.webp'
import C4 from './assets/images/product3/C4.webp'

import D1 from './assets/images/product 4/D1.webp'
import D2 from './assets/images/product 4/D2.webp'
import D3 from './assets/images/product 4/D3.webp'
import D4 from './assets/images/product 4/D4.webp'

import E1 from './assets/images/product 5/E1.webp'
import E2 from './assets/images/product 5/E2.webp'
import E3 from './assets/images/product 5/E3.webp'
import E4 from './assets/images/product 5/E4.webp'

import F1 from './assets/images/product 6/F1.webp'
import F2 from './assets/images/product 6/F2.webp'
import F3 from './assets/images/product 6/F3.webp'
import F4 from './assets/images/product 6/F4.webp'

import J1 from './assets/images/product 10/J1.webp'
import J2 from './assets/images/product 10/J2.webp'
import J3 from './assets/images/product 10/J3.webp'
import J4 from './assets/images/product 10/J4.webp'

import K1 from './assets/images/Product 11/K1.webp'
import K2 from './assets/images/Product 11/K2.webp'
import K3 from './assets/images/Product 11/K3.webp'
import K4 from './assets/images/Product 11/K4.webp'

import L1 from './assets/images/Product 12/L1.webp'
import L2 from './assets/images/Product 12/L2.webp'
import L3 from './assets/images/Product 12/L3.webp'
import L4 from './assets/images/Product 12/L4.webp'

import M1 from './assets/images/Product 13/M1.webp'
import M2 from './assets/images/Product 13/M2.webp'
import M3 from './assets/images/Product 13/M3.webp'
import M4 from './assets/images/Product 13/M4.webp'

import N1 from './assets/images/Product 14/N1.webp'
import N2 from './assets/images/Product 14/N2.webp'
import N3 from './assets/images/Product 14/N3.webp'
import N4 from './assets/images/Product 14/N4.webp'

import O1 from './assets/images/Product 15/O1.webp'
import O2 from './assets/images/Product 15/O2.webp'
import O3 from './assets/images/Product 15/O3.webp'
import O4 from './assets/images/Product 15/O4.webp'





export const menShoesData = [
    {
        id:'A',
        name:'Air Max pulse',
        price:175,
        sizes: [39,40,41,42,43],    
        available:[10,12,14,14,15],
        images:[A1,A2,A3,A4],
        gender:'Men',
        colors:['brown'],
        date: new Date (2023,3,10).getTime()
        
    },
    {
        id:'B',
        name:'Dunk High Retro ',
        price:195,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[B1,B2,B3,B4],
        gender:'Men',
        colors:['black','gray'],
        date: new Date (2023,2,11).getTime()
        
    },
    {
        id:'C',
        name:'ZoomX Shoes',
        price:105,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[C1,C2,C3,C4],
        gender:'Men',
        colors:['gray','white'],
        date: new Date (2023,3,4).getTime()
        
    },
    {
        id:'D',
        name:'Zoom Fly 5',
        price:210,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[D1,D2,D3,D4],
        gender:'Men',
        colors:['gray'],
        date: new Date (2023,3,1).getTime()
        
    },
    {
        id:'E',
        name:'Jordan Retro 6',
        price:180,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[E1,E2,E3,E4],
        gender:'Men',
        colors:['white'],
        date: new Date (2023,1,10).getTime()
        
    },
    {
        id:'F',
        name:'Lebron NXXT Gen',
        price:275,
        sizes: [40,41,42,43],
        available:[11,13,19,11,8],
        images:[F1,F2,F3,F4],
        gender:'Men',
        colors:['black'],
        date: new Date (2023,3,2).getTime()
        
    },
    {
        id:'J',
        name:'Zoom infinity Tour',
        price:250,
        sizes: [39,40,42,43],
        available:[11,13,19,11,8],
        images:[J1,J2,J3,J4],
        gender:'Men',
        colors:['red','gray'],
        date: new Date (2023,2,20).getTime()
        
    },
    {
        id:'K',
        name:'Air Zoom Victory',
        price:230,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[K1,K2,K3,K4],
        gender:'Men',
        colors:['green','gray'],
        date: new Date (2023,3,20).getTime()
        
    },
    {
        id:'L',
        name:'Invincible 3',
        price:200,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[L1,L2,L3,L4],
        gender:'Men',
        colors:['yellow','white'],
        date: new Date (2023,1,29).getTime()
        
    },
    {
        id:'M',
        name:'Jordan Retro G NRG',
        price:220,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[M1,M2,M3,M4],
        gender:'Men',
        colors:['maroon','white'],
        date: new Date (2023,3,11).getTime()
        
    },
    {
        id:'N',
        name:'Jordan One Take 3',
        price:120,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[N1,N2,N3,N4],
        gender:'Men',
        colors:['pink'],
        date: new Date (2023,3,14).getTime()
        
    },
    {
        id:'O',
        name:'Jordan one Take 4',
        price:100,
        sizes: [39,40,41,42,43],
        available:[11,13,19,11,8],
        images:[O1,O2,O3,O4],
        gender:'Men',
        colors:['blue','white'],
        date: new Date (2023,3,15).getTime()
        
    }
] 

const flatArray = menShoesData.reduce((accumulator,shoe) => accumulator.concat(shoe.colors),[])

export const totalmenShoesColors = flatArray.filter((color,index) => flatArray.indexOf(color) === index).sort()

export const totalMenSizes = [39,40,41,42,43]
export const totalColors = ['Black','White','Yellow','Brown','Red','Blue','Green','Gray','Pink']
export const totalPrices = [[50,100],[100,150],[150,200],[200,250],[250,300]]
