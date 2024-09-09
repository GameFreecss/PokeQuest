
import { handleFileUpload } from "./handles.js"

document.addEventListener('DOMContentLoaded', () => {

    const newSaveInput = document.getElementById('upload');

    newSaveInput.addEventListener('change', (e) => handleFileUpload(e)); 
});
