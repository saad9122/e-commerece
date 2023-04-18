export const sortArrayOptions = {
    lowToHigh:'lowtoHigh',
    highToLow:'highToLow',
    oldest:'oldest',
    newest: 'newest'
}


export const handleSortArray = (arr,value) => {
    switch(value) {
        case 'lowToHigh'  : return arr.slice().sort((a,b) => a.price - b.price)
        case 'highToLow'  : return arr.slice().sort((a,b) => a.price - b.price).reverse()
        case 'newest'     : return arr.slice().sort((a,b) => a.date.getTime() - b.date.getTime()) 
        case 'featured'   : return arr.slice().sort((a,b) => a.date.getTime() - b.date.getTime()).reverse() 
        default : return arr
    }

}