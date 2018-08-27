// Action Creator function

export const addToCart = (item) => {


    //console.log(`agregando ${item}`)
    return {
        type: 'ADD_ITEM', 
        item
    }
}