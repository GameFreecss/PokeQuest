
export const handleFileUpload = (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) return;

    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {

        const arrayBuffer = e.target.result;
        const uint8Array = new Uint8Array(arrayBuffer);

        handleNewProfile();
    }

    reader.onerror = () => console.error('[ERROR] A problem has occurred while reading file.');
}

const handleNewProfile = () => {

    console.log('new profile.');
}