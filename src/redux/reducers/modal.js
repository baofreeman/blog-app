import { INIT_STATE } from "../../constant";
import { showModal, hideModal, getType } from "../actions";

const modalReducer = (state = INIT_STATE.modal, action) => {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };

    case getType(hideModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
