import Pagination from "../../components/Common/Pagination/Pagination";
import ProducGridCard from "./components/ProductGridCard";

const ProductGridView = ({
  paginationProducts,
  loading,
  deleteHandler,
  currentPage,
  setCurrentPage,
  productsPerPage,
  setProductsPerPage,
  productsCount,
  changeVisbilityHandler,
  editHandler,
}) => {
  return (
    <div>
      {loading ? (
        <p className="pt-4 px-3 border-t mt-6 border-color dark:border-gray-700">
          در حال اتصال...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8 gap-4 sm:gap-3">
          {paginationProducts.map((product) => (
            <ProducGridCard
              deleteHandler={deleteHandler}
              changeVisbilityHandler={changeVisbilityHandler}
              editHandler={editHandler}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={productsPerPage}
        setItemsPerPage={setProductsPerPage}
        itemCount={productsCount}
      />
    </div>
  );
};

export default ProductGridView;
