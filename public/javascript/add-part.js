async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="part-title"]').value;
  const stock = document.querySelector('input[name="part-stock"]').value;

  const response = await fetch(`/api/parts`, {
    method: "POST",
    body: JSON.stringify({
      title,
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
  .querySelector(".new-part-form")
  .addEventListener("submit", newFormHandler);
