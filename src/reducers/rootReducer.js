
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
    return {
      ...state,
      userName: action.payload
    };
  case 'REPO':
    return {
      ...state,
      issue: action.payload
    };
  case 'APP':
    return {
      ...state,
      userName: action.userName,
      repo: action.repo,
      userUrl: action.userUrl
    };
  case 'ISSUE':
    return {
      ...state,
      comment: action.payload
    };
  default:
    return state;
  }
};

export default rootReducer;
