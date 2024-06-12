const initialStateForm = {
  isOpen: false,
  action: "",
  invoice: {},
};

export default function formReducer(state = initialStateForm, action) {
  switch (action.type) {
    case "form/setIsOpen":
      return { ...state, isOpen: action.payload };
    case "form/toggleIsOpen":
      return { ...state, isOpen: !state.isOpen };
    case "form/setAction":
      return { ...state, action: action.payload };
    case "form/addInvoice":
      return { ...state, invoice: action.payload };
    default:
      return state;
  }
}

export function setIsOpen(isOpen) {
  return { type: "form/setIsOpen", payload: isOpen };
}

export function toggleIsOpen() {
  return { type: "form/toggleIsOpen" };
}

export function setAction(actionType) {
  return { type: "form/setAction", payload: actionType };
}

export function addInvoice(invoice) {
  return { type: "form/addInvoice", payload: invoice };
}
