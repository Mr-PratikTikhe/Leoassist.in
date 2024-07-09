// Get references to the input and div for displaying the uploaded file
const mediaUploadInput = document.getElementById('mediaUpload');
const uploadedFileDiv = document.getElementById('uploadedFile');

// Add event listener for file input change event
mediaUploadInput.addEventListener('change', function() {
    // Check if any file is selected
    if (mediaUploadInput.files.length > 0) {
        // Get the selected file
        const file = mediaUploadInput.files[0];
        
        // Create a FileReader to read the file content
        const reader = new FileReader();
        
        // Set up event listener for when file reading is complete
        reader.onload = function(event) {
            // Create a new image element to display the file
            const img = document.createElement('img');
            img.src = event.target.result;
            
            // Append the image to the uploaded file div
            uploadedFileDiv.innerHTML = '';
            uploadedFileDiv.appendChild(img);
        };
        
        // Read the file as a data URL (for images)
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, clear the uploaded file div
        uploadedFileDiv.innerHTML = '';
    }
})