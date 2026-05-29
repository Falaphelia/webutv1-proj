const currentIndices = {};

const projectData = {
    "plane": {
        alt: "Images showing different angles of a custom-built airplane in the game: Stormworks",
        files: [
            {
                src: "assets/creations/plane/show.avif",
                description: "This is one of my first functional planes, well still my first functional one..."
            },
            {
                src: "assets/creations/plane/flight.avif",
                description: "Gotta enjoy the view"
            },
            {
                src: "assets/creations/plane/cockpit.avif",
                description: "Yeah I love buttons, do you like buttons?"
            },
            {
                src: "assets/creations/plane/night.avif",
                description: "Sure is dark here! Maybe you can see something if you pay attention?"
            },
            {
                src: "assets/creations/plane/engine.mp3",
                description: "Hear the engine run! You can click here on the text to switch again!"
            }
        ]
    },

    "tracked-L1": {
        alt: "Showing my tracked search and rescue vehicle from different angles- including the cockpit!",
        files: [
            {
                src: "assets/creations/tracked-L1/show.avif",
                description: "My first tracked vehicle!"
            },
            {
                src: "assets/creations/tracked-L1/side.avif",
                description: "Surely it looks good, right? I'd say it's pretty fast for a tracked vehicle!"
            },
            {
                src: "assets/creations/tracked-L1/driver.avif",
                description: "Nice and simple cockpit... I learned something from the plane I think."
            },
            {
                src: "assets/creations/tracked-L1/running.mp4",
                description: "Look at it driving! You can click here on the text to switch again!"
            }
        ]
    },

    "career-boat": {
        alt: "A showcase of one of my first functioning vehicles, perhaps a bit outdated now though",
        files: [
            {
                src: "assets/creations/boat/show.avif",
                description: "My first boat build!"
            },
            {
                src: "assets/creations/boat/side.avif",
                description: "Simple and clean design."
            }
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
        const item = projectData[projectName].files[index];

        const file = item.src;
        const description = item.description;
        const alt = projectData[projectName].alt;

        const display = container.querySelector('.media-display');
        const descriptionBox = container.querySelector('.media-description');

        descriptionBox.textContent = description;

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
                <img src="${file}" alt="${alt}" width="100%">
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
