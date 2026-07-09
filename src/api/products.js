export async function deleteProduct(id) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "DELETE",
    },
  );
  return response.ok;
}
