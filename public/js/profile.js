// Validate user input and send login request
const handleBioSubmit = async (event) => {
  event.preventDefault();
  try {
    const bio = document.querySelector("#user-bio-text").value;

    const response = await fetch("/api/users", {
      method: "UPDATE",
      body: JSON.stringify({ bio }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Error saving user bio.");
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".bio-form").addEventListener("submit", handleBioSubmit);
