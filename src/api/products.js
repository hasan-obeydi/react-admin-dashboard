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
export async function EditProduct(id, newItem) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItem.title,
        isPublished: newItem.isPublished,
        entity: newItem.entity,
        price: newItem.price,
        description: newItem.description,
      }),
    },
  );
  return response.ok;
}
