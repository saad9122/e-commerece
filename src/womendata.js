import WA1 from './assets/images/women/WP1/WA1.webp'
import WA2 from './assets/images/women/WP1/WA2.webp'
import WA3 from './assets/images/women/WP1/WA3.webp'
import WA4 from './assets/images/women/WP1/WA4.webp'

import WB1 from './assets/images/women/WP2/WB1.webp'
import WB2 from './assets/images/women/WP2/WB2.webp'
import WB3 from './assets/images/women/WP2/WB3.webp'
import WB4 from './assets/images/women/WP2/WB4.webp'

import WC1 from './assets/images/women/WP3/WC1.webp'
import WC2 from './assets/images/women/WP3/WC2.webp'
import WC3 from './assets/images/women/WP3/WC3.webp'
import WC4 from './assets/images/women/WP3/WC4.webp'

import WD1 from './assets/images/women/WP4/WD1.webp'
import WD2 from './assets/images/women/WP4/WD2.webp'
import WD3 from './assets/images/women/WP4/WD3.webp'
import WD4 from './assets/images/women/WP4/WD4.webp'

import WE1 from './assets/images/women/WP5/WE1.webp'
import WE2 from './assets/images/women/WP5/WE2.webp'
import WE3 from './assets/images/women/WP5/WE3.webp'
import WE4 from './assets/images/women/WP5/WE4.webp'

import WF1 from './assets/images/women/WP6/WF1.webp'
import WF2 from './assets/images/women/WP6/WF2.webp'
import WF3 from './assets/images/women/WP6/WF3.webp'
import WF4 from './assets/images/women/WP6/WF4.webp'

import WG1 from './assets/images/women/WP7/WG1.webp'
import WG2 from './assets/images/women/WP7/WG2.webp'
import WG3 from './assets/images/women/WP7/WG3.webp'
import WG4 from './assets/images/women/WP7/WG4.webp'

import WH1 from './assets/images/women/WP8/WH1.webp'
import WH2 from './assets/images/women/WP8/WH2.webp'
import WH3 from './assets/images/women/WP8/WH3.webp'
import WH4 from './assets/images/women/WP8/WH4.webp'


export const womenShoesData = [
    {
        id:'WA',
        name:'Nike Air Max 92 SE',
        price:260,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WA1,WA2,WA3,WA4],
        gender:'Women',
        colors:['gray','white'],
        date: new Date (2023,3,15).getTime()

    },
    {
        id:'WB',
        name:'Nike Air Max 97 SE',
        price:180,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WB1,WB2,WB3,WB4],
        gender:'Women',
        colors:['pink','white'],
        date: new Date (2023,3,15).getTime()
    },
    {
        id:'WC',
        name:'Nike Air Max 90 Futura',
        price:180,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WC1,WC2,WC3,WC4],
        gender:'Women',
        colors:['pink','white'],
        date: new Date (2023,4,10).getTime()
    },
    {
        id:'WD',
        name:'Nike Air Max 270',
        price:160,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WD1,WD2,WD3,WD4],
        gender:'Women',
        colors:['orange','white'],
        date: new Date (2023,4,1).getTime()
    },
    {
        id:'WE',
        name:'Nike Dunk High',
        price:160,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WE1,WE2,WE3,WE4],
        gender:'Women',
        colors:['blue','white'],
        date: new Date (2023,4,5).getTime()
    },
    {
        id:'WF',
        name:'Nike Air Vapour Max',
        price:210,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WF1,WF2,WF3,WF4],
        gender:'Women',
        colors:['pink'],
        date: new Date (2023,4,4).getTime()
    },
    {
        id:'WG',
        name:'Nike Court Legacy',
        price:160,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WG1,WG2,WG3,WG4],
        gender:'Women',
        colors:['white'],
        date: new Date (2023,3,15).getTime()
    },
    {
        id:'WH',
        name:'Nike Court Legacy',
        price:160,
        sizes: [37,38,39,40,41],
        available:[11,13,19,11,8],
        images:[WH1,WH2,WH2,WH4],
        gender:'Women',
        colors:['blue','white'],
        date: new Date (2023,3,10).getTime()
    }
]

export const totalWomenSizes = [37,38,39,40,41]
// export const totalColors = ['Orange','White','Yellow','Brown','Blue','Gray','Pink']
export const totalPrices = [[50,100],[100,150],[150,200],[200,250],[250,300]]



// export const totalWomenColors = womenShoesData.filter(shoe=> womenColors.every(color => shoe.colors.includes(color)))


const flatArray = womenShoesData.reduce((accumaltor,shoe) => {
    return accumaltor.concat(shoe.colors)
},[])

export const totalWomenColors = flatArray.filter((color,index) => flatArray.indexOf(color)===index)

