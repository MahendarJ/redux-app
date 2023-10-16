import { createSlice } from "@reduxjs/toolkit";


const LikeSlice = createSlice({
    name:'like',
    initialState:{
        status:''
    },
    reducers:{
        like: (state) => {
            if(state.status===''){
                state.status='like'
            }
            else if(state.status==='like'){
                state.status=''
            }
            else{
                state.status='like'
            }
        },
        dislike: (state) => {
            if(state.status===''){
                state.status='dislike'
            }
            else if(state.status==='dislike'){
                state.status=''
            }
            else{
                state.status='dislike'
            }
        }
    }
})

export const {like,dislike} = LikeSlice.actions
export default LikeSlice.reducer