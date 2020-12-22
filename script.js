const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media streaming, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('No video', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Pickture in Picture
    await videoElement.requestPictureInPicture();
    // Rese Button
    button.disable = false;
});

// On Load
selectMediaStream();