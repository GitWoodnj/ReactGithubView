
const initialState = {
  userName: '',
  repo: [],
  issue: [],
  comment: [],
  userUrl: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'USERS':
    state = {
      ...state,
      userName: action.payload
    };
    break;
  case 'REPO':
    state = {
      ...state,
      issue: action.payload
    };
    break;
  case 'APP':
    state = {
      ...state,
      userName: action.user,
      repo: action.repoArr,
      userUrl: action.URL
    };
    break;
  case 'ISSUE':
    state = {
      ...state,
      comment: action.payload
    };
    break;
  default:
    return state;
  }
  return state;
};

export default rootReducer;
