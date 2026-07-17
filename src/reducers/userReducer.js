import {
  FIRSTNAME,
  LASTNAME,
  USERNAME,
  EMAIL,
  AGE,
  CITY,
} from "../actions/user";

const userReducer = (item, action) => {
  switch (action.type) {
    case FIRSTNAME: {
      return {
        ...item,
        firstname: action.payload,
      };
    }
    case LASTNAME: {
      return {
        ...item,
        lastname: action.payload,
      };
    }
    case USERNAME: {
      return {
        ...item,
        username: action.payload,
      };
    }
    case EMAIL: {
      return {
        ...item,
        email: action.payload,
      };
    }
    case AGE: {
      return {
        ...item,
        age: action.payload,
      };
    }
    case CITY: {
      return {
        ...item,
        city: action.payload,
      };
    }
    default: {
      return item;
    }
  }
};

export default userReducer;
