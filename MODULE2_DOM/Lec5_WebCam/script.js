let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photos");
let recordedData;
let mediaRecorder;
let recordingState = false;
let constraints = {video:true};

(async function(){

    let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    videoPlayer.srcObject = mediaStream;    
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.onstop = function(e){

    }
    mediaRecorder.onstart = function(e){
        
    }
    mediaRecorder.ondataavailable = function(e){
        recordedData=e.data;
        saveVideoToFs();
    }

    recordButton.addEventListener("click",function(){
        if(recordingState){
            mediaRecorder.stop();
            recordButton.innerHTML ="record";
        }else{
            mediaRecorder.start();
            recordButton.innerHTML ="recording";
        }
        recordingState= !recordingState;
    });

    photoButton.addEventListener("click", capturePhoto);

})();

//saving the video recorded to file system
function saveVideoToFs(){
    let videoURL = URL.createObjectURL(recordedData);
    let aTag = document.createElement("a");
    aTag.download = "v1.mp4";
    aTag.href = videoURL;

    aTag.click();
}

function capturePhoto(){
    let canvas = document.createElement("canvas");
    canvas.height = videoPlayer.videoHeight;
    canvas.width = videoPlayer.videoWidth;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(videoPlayer,0,0);
    let imgUrl = canvas.toDataURL("image/jpg");

    let aTag = document.createElement("a");
    aTag.download = "pic.jpg";
    aTag.href = imgUrl;
    aTag.click();
}