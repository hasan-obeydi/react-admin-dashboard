import LastProducts from "./components/LastProducts";
import LastUsers from "./components/LastUsers";

const QuickOverview = ({ products, productsLoading, users, usersLoading }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
      <LastProducts products={products} productsLoading={productsLoading} />
      <LastUsers users={users} usersLoading={usersLoading} />
    </div>
  );
};

export default QuickOverview;
