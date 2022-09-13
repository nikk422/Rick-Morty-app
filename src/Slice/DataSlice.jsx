import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: true,
    data:{results:[]},
    favouritList: [],
    byStatus: null,
    byGender: null,
    bySearch:''
}


export const FetchData= createAsyncThunk("data/FetchData", async (pageNo)=>{
    try {
        const { data }= await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNo}`)
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
            state.favouritList.push(payload)
        },
        removeToFavorite: (state,{payload}) => {
            let remove= state.favouritList.filter((i)=>i.id !== payload.id)
            state.favouritList= remove
        },
        statusFilter: (state,{payload}) => {
            state.byStatus= payload
        },
        genderFilter: (state,{payload}) => {
            state.byGender= payload
        },
        clearFilter: (state) => {
            state.byStatus=null
            state.byGender=null 
        },
        searchFilter:(state,{payload}) => {
            state.bySearch=payload;
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

export const {addToFavorite,removeToFavorite,statusFilter,genderFilter,clearFilter ,searchFilter } = dataSlice.actions
