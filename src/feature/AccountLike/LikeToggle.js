import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { like, dislike } from "./LikeSlice";
import { useDispatch, useSelector } from "react-redux";
const ToggleLike = () => {
    const value = useSelector((state)=>state.like.status)
    const dispatch = useDispatch()
    return (
        <>
            <div style={{fontSize:'50px',dispaly:'flex', gap:'25px'}}>
                <AiOutlineLike onClick={()=>dispatch(like())} style={value === 'like' ? {color:'blue'} : ''}  />
                <AiOutlineDislike onClick={()=>dispatch(dislike())} style={value === 'dislike' ? {color:'red'} : ''} />
            </div>
        </>
    )
}

export default ToggleLike;