const initialStateForm = {
  isOpen: false,
};

export default function formReducer(state = initialStateForm, action) {
  switch (action.type) {
    case "form/setIsOpen":
      return { ...state, isOpen: action.payload };
    case "form/toggleIsOpen":
      return { ...state, isOpen: !state.isOpen };
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
