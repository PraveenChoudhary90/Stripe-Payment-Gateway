import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtocart:(state, actions)=>{
             const cartData= state.cart.filter(key=>key.id==actions.payload.id);
            if (cartData.length>=1)
            {
                alert("Product Aleready Added!!!");
            }
            else 
            {
                state.cart.push(actions.payload);
            } 

        },
         qntyIncrease:(state, actions)=>{
              for (var i=0; i<state.cart.length; i++)
              {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
              }
        },
        qntyDecrease:(state, actions)=>{
              for (var i=0; i<state.cart.length; i++)
              {
                if (state.cart[i].id==actions.payload.id)
                {
                    if (state.cart[i].qnty<=1)
                    {
                        alert("Quantity not less than 1 ");
                    }
                    else 
                    {
                        state.cart[i].qnty--;
                    }
                    
                }
              }
        },

        productRemove:(state, actions)=>{
            state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
        },
          cartEmpty:(state)=>{
              state.cart=[];
        }
    }

})

export const {addtocart , qntyIncrease, qntyDecrease, productRemove,cartEmpty} = cartSlice.actions;
export default cartSlice.reducer;