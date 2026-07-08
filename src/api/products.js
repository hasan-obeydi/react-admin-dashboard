export async function deleteProduct(id) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "DELETE",
    },
  );
  if (!response.ok) {
    throw new Error("Delete failed");
  }
  return response.json();
}
