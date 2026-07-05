import TableBody from "../../components/Common/Table/components/TabelBody";
import TableHead from "../../components/Common/Table/components/TableHead";
import TableHeadCell from "../../components/Common/Table/components/TableHeadCell";
import TableRow from "../../components/Common/Table/components/TableRow";
import Table from "../../components/Common/Table/Table";
import TableCell from "../../components/Common/Table/components/TableCell";
import {
  productsTableHeadRow,
  DEFAULT_PRODUCTS_IMAGE,
} from "../../data/products";
import clsx from "clsx";
import EditItemDetails from "../../components/Common/EditItem/EditItemDetails";
import ChangeVisibilityItem from "../../components/Common/EditItem/ChangeVisibilityItem";
import RemoveItem from "../../components/Common/EditItem/RemoveItem";

const ProductTableView = ({
  products,
  paginatedProducts,
  setPaginatedProducts,
  loading,
}) => {
  return (
    <Table
      header={{ title: "لیست محصولات" }}
      loading={loading}
      pagination={{
        items: products,
        setPaginatedItems: setPaginatedProducts,
        itemsPerPage: 10,
      }}
    >
      <TableHead>
        {productsTableHeadRow.map((cell) => (
          <TableHeadCell key={cell}>{cell}</TableHeadCell>
        ))}
      </TableHead>
      {loading ? (
        <p className="p-3">در حال اتصال...</p>
      ) : (
        <TableBody>
          {paginatedProducts.map((product, index) => (
            <TableRow key={product._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <img
                  src={product.image || DEFAULT_PRODUCTS_IMAGE}
                  alt={product.title}
                  className="w-18 h-12 object-cover rounded"
                />
              </TableCell>
              <TableCell>
                <span
                  className={clsx(
                    product.isPublished ? "succes-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </span>
              </TableCell>
              <TableCell>
                {product.price.toLocaleString("fa-IR")} <span>تومان</span>
              </TableCell>
              <TableCell>{product.entity}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <RemoveItem itemTitle={product.title} itemType="محصول" />
                  <ChangeVisibilityItem
                    isPublished={product.isPublished}
                    itemTitle={product.title}
                    itemType="محصول"
                  />
                  <EditItemDetails {...product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default ProductTableView;
