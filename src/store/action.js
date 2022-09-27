export default function AddToFavourite(data){
    return{
        type:'SET_Favourite',
        payload: data
    }

}
export function RemoveFavourite(data){
    return{
        type:'REMOVE_Favourite',
        payload: data
    }

}
export function SETlang(data){
    return{
        type:'LANG',
        payload: data
    }

}