const currentIndices = {};

const projectData = {
    "plane": {
        files: [
            "assets/creations/plane/show.avif",
            "assets/creations/plane/flight.avif",
            "assets/creations/plane/cockpit.avif",
            "assets/creations/plane/night.avif",
            "assets/creations/plane/engine.mp3"
        ],
        descriptions: [
            "This is one of my first functional planes, well still my first functional one...",
            "Gotta enjoy the view",
            "Yeah I love buttons, do you like buttons?",
            "Sure is dark here! Maybe you can see something if you pay attention?",
            "Hear the engine run!. You can click here on the text to switch again!"
        ]
    },

    "tracked-L1": {
        files: ["assets/creations/tracked-L1/show.avif",
            "assets/creations/tracked-L1/side.avif",
            "assets/creations/tracked-L1/driver.avif",
            "assets/creations/tracked-L1/running.mp4"],
        descriptions: [
            "My first tracked vehicle!",
            "Surely it looks good, right? I'd say it's pretty fast for a tracked vehicle!",
            "Nice and simple cockpit... I learned something from the plane I think.",
            "Look at it driving! You can click here on the text to switch again!"
        ]
    },

    "career-boat": {
        files: ["assets/creations/boat/show.avif",
            "assets/creations/boat/side.avif",],
        descriptions: [
            "My first tracked vehicle!",
            "Surely it looks good, right? I'd say it's pretty fast for a tracked vehicle!",
            "Nice and simple cockpit... I learned something from the plane I think.",
            "Look at it driving! You can click here on the text to switch again!"
        ]
    }
};

function media_switcher(side, projectName, containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container '${containerId}' not found.`);
        return;
    }

    currentIndices[containerId] = 0;

    container.innerHTML = `
        <div class="media-wrapper"
             style="display: flex; flex-direction: ${side === 'left' ? 'row' : 'row-reverse'}">

            <div class="media-display" style="flex: 1;"></div>

            <div class="media-description" style="flex: 1;"></div>

        </div>
    `;

    function updateView() {

        const index = currentIndices[containerId];

        const file = projectData[projectName].files[index];
        const description = projectData[projectName].descriptions[index];

        const display = container.querySelector('.media-display');
        const descriptionBox = container.querySelector('.media-description');

        descriptionBox.textContent = description;

        /* Make sure to render using correct html tag */
        if (file.endsWith('.mp4')) {

            display.innerHTML = `
                <video src="${file}" controls width="100%"></video>
            `;

        } else if (file.endsWith('.mp3')) {

            display.innerHTML = `
                <audio src="${file}" controls></audio>
            `;

        } else {

            display.innerHTML = `
                <img src="${file}" width="100%">
            `;
        }
    }

    container.addEventListener('click', () => {

        currentIndices[containerId] =
            (currentIndices[containerId] + 1) %
            projectData[projectName].files.length;

        updateView();
    });

    updateView();
}
