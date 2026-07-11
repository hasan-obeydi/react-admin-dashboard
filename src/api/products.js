export async function deleteProduct(id) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "DELETE",
    },
  );
  return response.ok;
}
export async function changeProductVisibility(id, isPublished) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isPublished: !isPublished,
      }),
    },
  );
  return response.ok;
}
export async function EditProduct(id, newProduct) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    },
  );
  return response.ok;
}
export async function addProduct(newProduct) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    },
  );
  return response.ok;
}
