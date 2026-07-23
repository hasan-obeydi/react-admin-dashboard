import clsx from "clsx";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";

import { DEFAULT_PRODUCTS_IMAGE } from "../../../data/products";
import RemoveItem from "../../../components/Common/EditItem/RemoveItem";
import EditProductDetails from "../../../components/Common/EditItem/EditProductDetails";
import Modal from "../../../components/Common/Modal/Modal";

const ProductGridCard = ({
  deleteHandler,
  changeVisbilityHandler,
  editHandler,
  product,
}) => {
  const Trigger = () => {
    return (
      <div
        className={clsx(
          product.isPublished ? "succes-badge" : "danger-badge",
          "badge flex items-center gap-1",
        )}
      >
        {product.isPublished ? (
          <>
            <MdVisibility />
            <span>منتشر شده</span>
          </>
        ) : (
          <>
            <MdVisibilityOff />
            <span>مخفی شده</span>
          </>
        )}
      </div>
    );
  };
  return (
    <article className="bg-white dark:bg-dark-primary rounded-lg p-4 hover:shadow-sm  border border-color dark:border-gray-700 flex flex-col justify-between">
      <header>
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-full object-cover hover:scale-120 duration-300"
            src={DEFAULT_PRODUCTS_IMAGE}
            alt={product.title}
          />
        </div>
        <div className="mt-3">
          <h4>{product.title}</h4>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-10">
            {product.description}
          </p>
        </div>
      </header>
      <footer className="mt-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Modal
            item={product}
            onSubmit={changeVisbilityHandler}
            title="تغییر وضعیت نمایش"
            Trigger={Trigger}
          >
            <div className="flex-center">
              <p>
                آیا از{" "}
                <span
                  className={clsx(
                    product.isPublished ? "text-red-500" : "text-green-500",
                  )}
                >
                  {product.isPublished ? "خصوصی" : "عمومی"}
                </span>{" "}
                کردن {"محصول"}{" "}
                <span className="font-bold">{product.title}</span> اطمینان
                دارید؟
              </p>
            </div>
          </Modal>
          <div className="flex gap-1">
            <AiOutlineShopping className="text-sm" />
            <span className="text-xs">تعداد : {product.entity}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between flex-wrap">
          <div>
            <span className="font-bold text-sm">
              {product.price.toLocaleString("fa-IR")}
            </span>{" "}
            <span className="text-xs">تومان</span>
          </div>
          <div className="flex gap-2 sm:gap-0">
            <RemoveItem
              deleteHandler={deleteHandler}
              item={product}
              itemType="محصول"
            />
            <EditProductDetails
              editHandler={editHandler}
              item={product}
              itemType="محصول"
            />
          </div>
        </div>
      </footer>
    </article>
  );
};

export default ProductGridCard;
