document.getElementById('summer').onclick = summerChange;
document.getElementById('winter').onclick = winterChange;
document.getElementById('rainy').onclick = rainyChange;

  function summerChange(source) {
    document.querySelector('video').src = 'videos/pexels-james-cheney-2935032-3840x2160-30fps.mp4'
  }
  function winterChange(source) {
    document.querySelector('video').src = 'videos/pexels-ricky-esquivel-3280158-1920x1080-24fps.mp4'
  }
  function rainyChange(source) {
    document.querySelector('video').src = 'videos/pexels-sayan-malakar-3813820-1920x1080-24fps.mp4'
  }
  