async function editFormHandler(event) {
  event.preventDefault();

  const stock = document.querySelector('input[name="part-stock"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/parts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      stock,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-part-form")
  .addEventListener("submit", editFormHandler);