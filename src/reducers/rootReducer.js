
const initialState = {
  userName: '',
  repo: [],
  issues: {},
  comments: {},
  userUrl: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USERNAME':
    return {
      ...state,
      userName: action.value
    };
  case 'REPO_SELECTED':
    return {
      ...state,
      issues: {
        ...state.issues,
        [action.id]: action.data
      }
    };
  case 'SELECT_USER':
    return {
      ...state,
      userName: action.data[0].owner.login,
      repo: action.data,
      userUrl: action.data[0].owner.avatar_url
    };
  case 'ISSUE_SELECTED':
    return {
      ...state,
      comments: {
        ...state.comments,
        [action.id]: action.data
      }
    };
  default:
    return state;
  }
};

export default rootReducer;
