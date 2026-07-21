import { useEffect, useReducer, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import HeaderButtons from "./components/HeaderButtons";
import useLocalStorage from "../../hooks/useLocalStorage";
import ProductGridView from "../../features/ProductGridView/ProductGridView";
import useResize from "../../hooks/useResize";
import {
  addProduct,
  changeProductVisibility,
  deleteProduct,
  EditProduct,
  getProducts,
} from "../../api/products";
import productReducer from "../../reducers/productReducer";
import { clearInputs } from "../../utils/clearInputs";
import usePagination from "../../hooks/usePagination";

const Products = () => {
  useTitle("صفحه محصولات");
  const [productsLayoutType, setProductsLayoutType] = useLocalStorage(
    "productsLayout",
    "TABLE",
  );
  const [productsPerPage, setProductsPerPage] = useLocalStorage('productsPerPage', 10);
  const windowSize = useResize();
  useEffect(() => {
    if (windowSize.width <= 640) {
      setProductsLayoutType("GRID");
    }
  }, [windowSize, setProductsLayoutType]);
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
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const paginationProducts = usePagination({
    items: products,
    searchInput,
    currentPage,
    itemsPerPage: productsPerPage,
  });
  const submitValidation = (item, newProduct, toggle) => {
    if (
      newProduct &&
      (!newProduct.title ||
        !newProduct.price ||
        !newProduct.entity ||
        !newProduct.description)
    ) {
      toast.error(
        "لطفا مقادیر عنوان، موجودی، قیمت و توضیحات را به درستی وارد کنید.",
      );
    } else if (
      newProduct &&
      item &&
      newProduct.title === item.title &&
      newProduct.isPublished === item.isPublished &&
      Number(newProduct.price) === Number(item.price) &&
      Number(newProduct.entity) === Number(item.entity) &&
      newProduct.description === item.description
    ) {
      toast.error("لطفا مقادیر را تغییر دهید.");
    } else {
      toggle();
      return true;
    }
  };
  const deleteHandler = async (item, newProduct, toggle) => {
    toggle();
    await toast
      .promise(deleteProduct(item._id), {
        loading: "در حال حذف محصول...",
        success: `محصول ${item.title} با موفقیت حذف شد.`,
        error: `خطا در حذف محصول ${item.title}`,
      })
      .then((response) => {
        if (response.ok) {
          setProducts((prev) =>
            prev.filter((product) => product._id !== item._id),
          );
        }
      });
  };
  const changeVisbilityHandler = async (item, newProduct, toggle) => {
    toggle();
    await toast
      .promise(changeProductVisibility(item._id, item.isPublished), {
        loading: "در حال تغییر وضعیت نمایش محصول...",
        success: `وضعیت نمایش محصول ${item.title} به ${item.isPublished ? "خصوصی" : "عمومی"} تغییر کرد.`,
        error: `خطا در تغییر وضعیت نمایش محصول ${item.title}.`,
      })
      .then((response) => {
        if (response.ok) {
          const newproducts = products.map((product) => {
            if (product._id === item._id) {
              product.isPublished = !item.isPublished;
            }
            return product;
          });
          setProducts(newproducts);
        }
      });
  };
  const editHandler = async (item, newProduct, toggle) => {
    const isSubmit = submitValidation(item, newProduct, toggle);
    if (isSubmit) {
      await toast
        .promise(EditProduct(item._id, newProduct), {
          loading: "در حال ویرایش محصول...",
          success: "محصول با موفقیت ویرایش شد.",
          error: `خطا در ویرایش محصول.`,
        })
        .then((response) => {
          if (response.ok) {
            const newProducts = products.map((product) => {
              if (product._id === item._id) {
                product.title = newProduct.title;
                product.isPublished = newProduct.isPublished;
                product.entity = Number(newProduct.entity);
                product.price = Number(newProduct.price);
                product.description = newProduct.description;
              }
              return product;
            });
            setProducts(newProducts);
          }
        });
    }
  };
  const addProductHandler = async (item, newProduct, toggle) => {
    const isSubmit = submitValidation(item, newProduct, toggle);
    if (isSubmit) {
      await toast
        .promise(addProduct(newProduct), {
          loading: "در حال افزودن محصول",
          success: `محصول ${newProduct.title} با موفقیت اضافه شد.`,
          error: `خطا در افزودن محصول`,
        })
        .then((response) => {
          if (response.ok) {
            getProducts().then((datas) => {
              setProducts(datas);
            });
            clearInputs(dispatch, "محصول");
          }
        });
    }
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
            layoutType={productsLayoutType}
            setLayoutType={setProductsLayoutType}
            addProductHandler={addProductHandler}
          />
        }
      />
      {productsLayoutType === "TABLE" ? (
        <ProductTableView
          seachInput={searchInput}
          setSearchInput={setSearchInput}
          paginationProducts={paginationProducts}
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          itemCount={products.length}
          setCurrentPage={setCurrentPage}
          loading={productsLoading}
          deleteHandler={deleteHandler}
          changeVisbilityHandler={changeVisbilityHandler}
          editHandler={editHandler}
        />
      ) : (
        <ProductGridView
          products={products}
          paginationProducts={paginationProducts}
          loading={productsLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          setProductsPerPage={setProductsPerPage}
          productsCount={products.length}
          deleteHandler={deleteHandler}
          changeVisbilityHandler={changeVisbilityHandler}
          editHandler={editHandler}
        />
      )}
    </section>
  );
};

export default Products;
