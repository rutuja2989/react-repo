import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await fetch("https://64d91395e947d30a2609e3eb.mockapi.io/crud", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error; // Re-throw the error to be properly handled by Redux Toolkit
  }
});


 export const showUser=createAsyncThunk("showUser",async({rejectWithValue})=>{
const response=await fetch("https://64d91395e947d30a2609e3eb.mockapi.io/crud");

try{
    const result=await response.json();
    return result;
}
catch(error){
 return rejectWithValue(error)
}
})



export const userDetails = createSlice({
  name: 'userDetail',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous error when starting a new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        state.error = null; // Clear any previous error
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous error when starting a new request
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users=action.payload;
        state.error = null; // Clear any previous error
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userDetails.reducer;
