import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: true,
    data:{results:[]},
    favouritList: JSON.parse(localStorage.getItem('favouritList')) || [],
    pageNo:null
}


export const FetchData= createAsyncThunk("data/FetchData", async (APIData)=>{
    try {
        const { data }= await axios.get(`https://rickandmortyapi.com/api/character/?${APIData}`)
        return data

    } catch (error) {
        console.log(error)
    }
})


const dataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        addToFavorite: (state,{payload}) => {
            localStorage.removeItem("favouritList")
            state.favouritList.push(payload)
            localStorage.setItem("favouritList",JSON.stringify(state.favouritList))
        },
        removeToFavorite: (state,{payload}) => {
            localStorage.removeItem("favouritList")
            let remove= state.favouritList.filter((i)=>i.id !== payload.id)
            state.favouritList= remove
            localStorage.setItem("favouritList",JSON.stringify(remove))
        }

    },
    extraReducers:{
        [FetchData.pending]: (state)=>{
            state.loading=true
        },
        [FetchData.fulfilled]:(state,{payload})=>{
            state.data=payload;
            state.loading=false;
        },
        [FetchData.rejected]:(state)=>{
            state.loading=false
        }
    }
});

export default dataSlice.reducer;

export const {addToFavorite,removeToFavorite,statusFilter } = dataSlice.actions
