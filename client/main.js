const form = document.getElementById("game-form");

async function fetchAndRenderGameForm() {
  const response = await fetch("http://localhost:7430/reviews");
  const userReviews = await response.json();
  console.log(userReviews);
  const reviewDiv = document.getElementById("review-info-container");
  reviewDiv.innerHTML = "";

  userReviews.forEach((msg) => {
    const userReviewsDiv = document.createElement("div");
    userReviewsDiv.id = "inputReviews";
    userReviewsDiv.innerHTML = ` Game Name: ${msg.game_name} <br> Rating: ${msg.rating}<br> Username: ${msg.username} <br> Review: ${msg.review} </p>`;
    reviewDiv.appendChild(userReviewsDiv);
  });
  function updateScroll() {
    let element = document.getElementById("review-info-container");
    element.scrollTop = element.scrollHeight;
  }
  updateScroll();
}
fetchAndRenderGameForm();

form.addEventListener("submit", submitButton);
async function submitButton(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  try {
    const response = await fetch("http://localhost:7430/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const data = await response.json();

    if (data.success) {
      console.log("DATA IS SAVED - ALL IS WELL");
      fetchAndRenderGameForm();
      form.reset();
      // console.log(formValues);
    } else {
      console.log("NOOO IT DIDN'T WORK!!!!!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
