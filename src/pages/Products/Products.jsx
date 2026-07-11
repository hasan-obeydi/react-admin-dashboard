import { useEffect, useReducer, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import HeaderButtons from "./components/HeaderButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import ProductGridView from "../../features/ProductGridView/ProductGridView";
import useResize from "../../hooks/useResize";
import {
  changeProductVisibility,
  deleteProduct,
  EditProduct,
} from "../../api/products";
import productReducer from "../../reducers/productReducer";
import { DEFAULT_PRODUCTS_IMAGE, productFields } from "../../data/products";

const Products = () => {
  useTitle("صفحه محصولات");
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE");
  const windowSize = useResize();
  useEffect(() => {
    if (windowSize.width <= 640) {
      setLayoutType("GRID");
    }
  }, [windowSize, setLayoutType]);
  const {
    data: products,
    setData: setProducts,
    // error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  const [newProduct, dispatch] = useReducer(productReducer, {
    title: "",
    isPublished: false,
    entity: "",
    price: "",
    description: "",
  });
  const deleteHandler = async (id, itemTitle) => {
    const isDelete = await deleteProduct(id);
    if (isDelete) {
      setProducts((prev) => prev.filter((product) => product._id !== id));
      toast.success(`محصول ${itemTitle} با موفقیت حذف شد.`);
    } else {
      toast.error(`محصول ${itemTitle} با موفقیت حذف نشد.`);
    }
  };
  const changeVisbilityHandler = async (id, itemTitle, isPublished) => {
    const isChange = await changeProductVisibility(id, isPublished);
    if (isChange) {
      const newproducts = products.map((product) => {
        if (product._id === id) {
          product.isPublished = !isPublished;
        }
        return product;
      });
      setProducts(newproducts);
      toast.success(
        `وضعیت نمایش محصول ${itemTitle} به ${isPublished ? "خصوصی" : "عمومی"} تغییر کرد.`,
      );
    } else {
      toast.error(`وضعیت نمایش محصول ${itemTitle} به درستی تغییر نکرد.`);
    }
  };
  const editHandler = async (id, itemTitle, isPublished, newProduct) => {
    const isEdit = await EditProduct(id, newProduct);
    if (isEdit) {
      const newProducts = products.map((product) => {
        if (product._id === id) {
          product.title = newProduct.title;
          product.isPublished =
            newProduct.isPublished === "true" ? true : false;
          product.entity = newProduct.entity;
          product.price = newProduct.price;
          product.description = newProduct.description;
        }
        return product;
      });
      setProducts(newProducts);
      toast.success("محصول با موفقیت ویرایش شد.");
    } else {
      toast.error(`خطا در ویرایش محصول.`);
    }
  };
  const addProductHandler = async (id, itemTitle, isPublished, newProduct) => {
    setProducts((prev) => [
      ...prev,
      {
        _id: crypto.randomUUID(),
        title: newProduct.title,
        image: DEFAULT_PRODUCTS_IMAGE,
        isPublished: newProduct.isPublished,
        entity: newProduct.entity,
        price: newProduct.price,
        description: newProduct.description,
      },
    ]);
    productFields.map((field) => {
      dispatch({ type: field.key, payload: "" });
    });
  };
  return (
    <section>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <SectionTitle
        title={"محصولات"}
        buttons={
          <HeaderButtons
            newProduct={newProduct}
            dispatch={dispatch}
            layoutType={layoutType}
            setLayoutType={setLayoutType}
            addProductHandler={addProductHandler}
          />
        }
      />
      {layoutType === "TABLE" ? (
        <ProductTableView
          products={products}
          paginatedProducts={paginatedProducts}
          setPaginatedProducts={setPaginatedProducts}
          loading={productsLoading}
          deleteHandler={deleteHandler}
          changeVisbilityHandler={changeVisbilityHandler}
          editHandler={editHandler}
        />
      ) : (
        <ProductGridView
          products={products}
          paginatedProducts={paginatedProducts}
          setPaginatedProducts={setPaginatedProducts}
          loading={productsLoading}
          deleteHandler={deleteHandler}
          changeVisbilityHandler={changeVisbilityHandler}
          editHandler={editHandler}
        />
      )}
    </section>
  );
};

export default Products;
