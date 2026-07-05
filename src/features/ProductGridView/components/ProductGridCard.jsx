import clsx from "clsx";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";

import { DEFAULT_PRODUCTS_IMAGE } from "../../../data/products";
import RemoveItem from "../../../components/Common/EditItem/RemoveItem";
import EditItemDetails from "../../../components/Common/EditItem/EditItemDetails";

const ProductGridCard = (product) => {
  return (
    <div className="bg-white dark:bg-dark-primary rounded-lg p-4 hover:shadow-sm transition-transform duration-300 hover:scale-103 border border-color dark:border-gray-700">
      <div className="rounded-lg overflow-hidden">
        <img
          className="w-full object-cover"
          src={DEFAULT_PRODUCTS_IMAGE}
          alt={product.title}
        />
      </div>
      <div className="mt-4">
        <h4>{product.title}</h4>
        <p className="text-sm text-gray-500 mt-1 h-10">{product.description}</p>
        <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
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
          <div className="flex gap-1">
            <AiOutlineShopping className="text-sm" />
            <span className="text-xs">تعداد : {product.entity}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between flex-wrap ">
          <div>
            <span className="font-bold text-sm">
              {product.price.toLocaleString("fa-IR")}
            </span>{" "}
            <span className="text-xs">تومان</span>
          </div>
          <div className="flex">
            <RemoveItem itemTitle={product.title} itemType="محصول" />
            {/* <ChangeVisibilityItem
              isPublished={product.isPublished}
              itemTitle={product.title}
              itemType="محصول"
            /> */}
            <EditItemDetails product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
