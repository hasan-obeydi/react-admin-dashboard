export async function getUsers() {
  const response = await fetch("https://react-js-cms.iran.liara.run/api/users");
  const data = await response.json();
  return data;
}
export async function deleteUser(id) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/users/${id}`,
    {
      method: "DELETE",
    },
  );
  return response;
}

export async function EditUser(id, newUser) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        age: Number(newUser.age),
        city: newUser.city,
      }),
    },
  );
  return response;
}
export async function addUser(newUser) {
  const response = await fetch(
    `https://react-js-cms.iran.liara.run/api/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        age: Number(newUser.age),
        city: newUser.city,
      }),
    },
  );
  return response;
}
