
document.addEventListener('DOMContentLoaded', () => {

    const newSaveInput = document.getElementById('upload');

    newSaveInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
    
        reader.onload = () => console.log('File read ok.');

        reader.onerror = () => console.log('File read error.');        
    });  
});
