const newSpotHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const latitude = document.querySelector('input[name="latitude"]').value;
    const longtitude = document.querySelector('input[name="longtitude"]').value;
    const description = document.querySelector('textarea[name="desc"]').value;
    const tags = document.querySelector('option[name="spots"]').value;

    await fetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify({
            title,
            latitude,
            longtitude,
            description,
            tags
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/spots');
};

document
    .querySelector('#saveBtn')
    .addEventListener('submit', newSpotHandler);