import {
  TITLE,
  IS_PUBLISHED,
  ENTITY,
  PRICE,
  DESCRIPTION,
} from "../actions/product";

const productsTableHeadRow = [
  "ردیف",
  "نام محصول",
  "تصویر",
  "وضعیت نمایش",
  "موجودی",
  "قیمت",
  "",
];

const productFields = [
  { label: "عنوان محصول", key: TITLE, inputType: "text" },
  { label: "وضعیت انتشار", key: IS_PUBLISHED, inputType: "select" },
  { label: "تعداد موجودی", key: ENTITY, inputType: "number" },
  { label: "قیمت محصول", key: PRICE, inputType: "number" },
  { label: "توضیحات محصول", key: DESCRIPTION, inputType: "textarea" },
];

const DEFAULT_PRODUCTS_IMAGE = "images/product-image.jpg";

export { productsTableHeadRow, DEFAULT_PRODUCTS_IMAGE, productFields };
