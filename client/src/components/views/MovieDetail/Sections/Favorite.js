import Axios from "axios";

import {Button} from 'antd';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Favorite(props){
    const movieId= props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber,setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    let variables ={
            userFrom,
            movieId,
            movieTitle,
            moviePost,
            movieRunTime
        }
    useEffect(() => {
        
        Axios.post('/api/favorite/favoriteNumber',variables)
            .then(response=>{
                if(response.data.success){
                setFavoriteNumber(response.data.favoriteNumber)
                }else{
                    alert('숫자 정보 획득 실패')
                }
            })
        Axios.post('/api/favorite/favorited',variables)
            .then(response=>{
                if(response.data.success){
                setFavorited(response.data.favorited)
                }else{
                    alert('정보 획득 실패')
                }
            })
    },[])

    const onClickFavorite = () => {
        if(Favorited){
            Axios.post('/api/favorite/removeFromFavorite',variables)
                .then(response=>{
                    if(response.data.success){
                    setFavoriteNumber(FavoriteNumber - 1)
                    setFavorited(!Favorited)
                }else{
                    alert('Favorite 리스트에서 지우기 실패')
                }
            })
        
        }else{
            Axios.post('/api/favorite/addToFavorite',variables)
                .then(response=>{
                    if(response.data.success){
                    setFavoriteNumber(FavoriteNumber + 1)
                    setFavorited(!Favorited)
                }else{
                    alert('Favorite 리스트에서 추가하기 실패')
                }
            })
        }
    }


    return(
        <div>
            <Button onClick={onClickFavorite}>{Favorited?"Not Favorite" : "Add to Favorite"} {FavoriteNumber}</Button>
               
        </div>
    )
}
export default Favorite