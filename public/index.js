const url = "http://localhost:2000/images";

getData();
async function getData() {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors"
  });
  const data = await response.json();
  for (i = 0; i < data.length; i++) {
    const create = document.createElement("img");
    create.src = `${data[i].url_thumb}`;
    const access = document.querySelector(".main");
    access.append(create);
  }
}
