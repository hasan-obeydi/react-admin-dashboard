export async function getProducts() {
  const response = await fetch(
    "https://react-js-cms.iran.liara.run/api/products",
  );
  const data = await response.json();
  return data;
}
export async function deleteProduct(id) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "DELETE",
    },
  );
  return response;
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
  return response;
}
export async function EditProduct(id, newProduct) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newProduct.title,
        isPublished: newProduct.isPublished,
        entity: Number(newProduct.entity),
        price: Number(newProduct.price),
        description: newProduct.description,
      }),
    },
  );
  return response;
}
export async function addProduct(newProduct) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newProduct.title,
        isPublished: newProduct.isPublished,
        entity: Number(newProduct.entity),
        price: Number(newProduct.price),
        description: newProduct.description,
      }),
    },
  );
  return response;
}
