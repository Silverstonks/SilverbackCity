const initialState = {
  loading: false,
  error: '',
  modalShow: true,
  modalStep: 1,
  emailNewsletter: '',
  errorEmailNewsletter: false,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_RANKINGS':
      return {
        ...state,
        userRankings: action.payload,
      };
    case 'UPDATE_MODAL_STATE':
      return {
        ...state,
        modalShow: action.payload,
      };
    case 'UPDATE_MODAL_STEP':
      return {
        ...state,
        modalStep: action.payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        modalShow: action.payload.modalShow,
        modalStep: action.payload.modalStep,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        modalShow: true,
        modalStep: 1,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'SUBSCRIBE_NEWSLETTER':
      return {
        ...state,
        emailNewsletter: action.payload,
        errorEmailNewsletter: false,
      };
    case 'SUBSCRIBE_NEWSLETTER_ERROR': {
      return {
        ...state,
        emailNewsletter: '',
        errorEmailNewsletter: true,
      };
    }
    default:
      return state;
  }
}
