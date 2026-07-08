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
  { label: "عنوان محصول", key: "title", inputType: "text" },
  { label: "وضعیت انتشار", key: "isPublished", inputType: "select" },
  { label: "تعداد موجودی", key: "entity", inputType: "number" },
  { label: "قیمت محصول", key: "price", inputType: "number" },
  { label: "توضیحات محصول", key: "description", inputType: "textarea" },
];

const DEFAULT_PRODUCTS_IMAGE = "images/product-image.jpg";

export { productsTableHeadRow, DEFAULT_PRODUCTS_IMAGE, productFields };
