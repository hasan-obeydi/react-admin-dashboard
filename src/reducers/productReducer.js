import {
  TITLE,
  IS_PUBLISHED,
  ENTITY,
  PRICE,
  DESCRIPTION,
} from "../actions/product";

const productReducer = (item, action) => {
  switch (action.type) {
    case TITLE: {
      return {
        ...item,
        title: action.payload,
      };
    }
    case IS_PUBLISHED: {
      return {
        ...item,
        isPublished: action.payload,
      };
    }
    case ENTITY: {
      return {
        ...item,
        entity: action.payload,
      };
    }
    case PRICE: {
      return {
        ...item,
        price: action.payload,
      };
    }
    case DESCRIPTION: {
      return {
        ...item,
        description: action.payload,
      };
    }
    default: {
      return item;
    }
  }
};

export default productReducer;
