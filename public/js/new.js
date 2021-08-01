const newSpotHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const latitude = document.querySelector('input[name="latitude"]').value;
    const longitude = document.querySelector('input[name="longitude"]').value;
    const description = document.querySelector('textarea[name="desc"]').value;
    const tags = document.querySelector('option[name="spots"]').value;
    console.log(title);
    console.log(latitude);
    console.log(longitude);
    console.log(description);
    console.log(tags);

    await fetch('/api/spots', {
        method: 'POST',
        body: JSON.stringify({
            title,
            latitude,
            longitude,
            description,
            tags
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/spot');
};

document
    .querySelector('.spot-form')
    .addEventListener('save', newSpotHandler);


