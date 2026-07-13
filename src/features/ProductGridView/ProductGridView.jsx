import Pagination from "../../components/Common/Pagination/Pagination";
import ProducGridCard from "./components/ProductGridCard";

const ProductGridView = ({
  products,
  paginatedProducts,
  setPaginatedProducts,
  loading,
  deleteHandler,
  changeVisbilityHandler,
  editHandler,
}) => {
  return (
    <div>
      {loading ? (
        <p className="py-4">در حال اتصال...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8 gap-4 sm:gap-3">
          {paginatedProducts.map((product) => (
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
        items={products}
        setPaginatedItems={setPaginatedProducts}
        itemsPerPage={12}
      />
    </div>
  );
};

export default ProductGridView;
