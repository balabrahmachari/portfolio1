 document.getElementById('downloadButton').addEventListener('click', function() {
    // Create a fake anchor element
    var anchor = document.createElement('a');
    anchor.href = 'https://drive.google.com/file/d/12nqHdYRvARmBZ2VpUITHFMEbWEcyiw3G/view?usp=drive_link';
    anchor.download = 'resume2.pdf'; 
    anchor.click(); // Simulate a click on the anchor element to trigger download
});