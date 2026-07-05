import LastProductCard from "./LastProductCard";
import LastSectionTitle from "./LastSectionTitle";

const LastProducts = ({ products, productsLoading }) => {
  return (
    <div className="col-span-3 bg-white dark:bg-dark-primary p-6 rounded-lg border border-color dark:border-gray-700">
      <LastSectionTitle title="آخرین محصولات" link="/products" />
      {productsLoading ? (
        <p className="text-black dark:text-white">در حال اتصال...</p>
      ) : (
        <div className="space-y-4">
          {[...products]
            .reverse()
            .slice(0, 4)
            .map((product) => (
              <LastProductCard key={product._id} {...product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default LastProducts;
