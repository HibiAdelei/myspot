const newSpotHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value.trim();
  const longitude = document.getElementById('longitude').value;
  const latitude = document.getElementById('latitude').value;
  const description = document.getElementById('description').value;

  // Get tags into an array
  const selectedTags = document.getElementById('tags').selectedOptions;
  const tags = Array.from(selectedTags).map(({ value }) => value);

  // Validate form
  if (!title) {
    window.alert('Title cannot be empty.');
    return;
  }
  if (!latitude || !longitude) {
    window.alert('Please click on the map to place a Spot.');
  }

  // Create a fetch request to post a new spot
  const newSpot = await fetch('/api/spot', {
    method: 'POST',
    body: JSON.stringify({
      title,
      latitude,
      longitude,
      description,
      tags,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  // Redirect to newly created spot
  const newSpotJson = await newSpot.json();
  window.location.href = `/spot/${newSpotJson.id}`;
};

document.querySelector('#spot-form').addEventListener('submit', newSpotHandler);
