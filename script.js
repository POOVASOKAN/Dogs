document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://dog.ceo/api/breeds/image/random";

  document.querySelector(".btn").addEventListener("click", function () {
    //! Fetch data from the Dog CEO's Dog API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        //! Display the dog image
        document.getElementById("dogImage").src = data.message;
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
});
