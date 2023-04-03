import { GET_PRODUCTO } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch(type) {
    case GET_PRODUCTO:
      return {
        ...state,
        producto: payload
      }
  }
}