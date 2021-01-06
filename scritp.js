const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then paly
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        console.log('Something wrong here:', error);
    }
}



button.addEventListener('click', async () => {
    // DISABLE BUTTON
    button.disabled = true;

    // START PICTURE IN PICTURE

    await videoElement.requestPictureInPicture();

    // RESET BUTTON

    button.disabled = false;
});

// On Load
selectMediaStream();