// 1. Select the necessary elements from the HTML
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const analyzeBtn = document.querySelector('.btn-analyze');
const uploadText = document.querySelector('.upload-text');

// 2. Handle the "Click to Upload" functionality
analyzeBtn.addEventListener('click', () => {
    // If no file is selected, open the file picker
        if (!fileInput.files.length) {
                fileInput.click();
                    } else {
                            startAnalysis(fileInput.files[0]);
                                }
                                });

                                // 3. Handle Drag & Drop Visual Effects
                                ['dragenter', 'dragover'].forEach(eventName => {
                                    dropZone.addEventListener(eventName, (e) => {
                                            e.preventDefault();
                                                    dropZone.style.borderColor = "#2ecc71"; // Turn green when hovering
                                                            dropZone.style.backgroundColor = "rgba(46, 204, 113, 0.05)";
                                                                }, false);
                                                                });

                                                                ['dragleave', 'drop'].forEach(eventName => {
                                                                    dropZone.addEventListener(eventName, (e) => {
                                                                            e.preventDefault();
                                                                                    dropZone.style.borderColor = "#1e293b"; // Return to original color
                                                                                            dropZone.style.backgroundColor = "transparent";
                                                                                                }, false);
                                                                                                });

                                                                                                // 4. Handle the actual File Drop
                                                                                                dropZone.addEventListener('drop', (e) => {
                                                                                                    const droppedFiles = e.dataTransfer.files;
                                                                                                        if (droppedFiles.length > 0) {
                                                                                                                fileInput.files = droppedFiles; // Assign dropped file to the hidden input
                                                                                                                        handleFileSelect(droppedFiles[0]);
                                                                                                                            }
                                                                                                                            });

                                                                                                                            // 5. Handle File Selection via the "Open" dialog
                                                                                                                            fileInput.addEventListener('change', (e) => {
                                                                                                                                if (e.target.files.length > 0) {
                                                                                                                                        handleFileSelect(e.target.files[0]);
                                                                                                                                            }
                                                                                                                                            });

                                                                                                                                            // 6. Update UI when a file is ready
                                                                                                                                            function handleFileSelect(file) {
                                                                                                                                                uploadText.innerHTML = `<strong>Selected:</strong> ${file.name}`;
                                                                                                                                                    analyzeBtn.innerText = "Start AI Analysis";
                                                                                                                                                        analyzeBtn.style.backgroundColor = "#2ecc71";
                                                                                                                                                        }

                                                                                                                                                        // 7. Simulate the AI Analysis process
                                                                                                                                                        function startAnalysis(file) {
                                                                                                                                                            analyzeBtn.disabled = true;
                                                                                                                                                                analyzeBtn.innerText = "Analyzing Movement...";
                                                                                                                                                                    uploadText.innerText = "Processing technical data points...";

                                                                                                                                                                        // This simulates a 3-second delay for the "AI" to work
                                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                                    alert("Analysis Complete for " + file.name + "!\nScouting report generated.");
                                                                                                                                                                                            resetUI();
                                                                                                                                                                                                }, 3000);
                                                                                                                                                                                                }

                                                                                                                                                                                                function resetUI() {
                                                                                                                                                                                                    analyzeBtn.disabled = false;
                                                                                                                                                                                                        analyzeBtn.innerText = "Start AI Analysis";
                                                                                                                                                                                                            analyzeBtn.style.backgroundColor = "white";
                                                                                                                                                                                                                uploadText.innerText = "Drag & drop training clips here";
                                                                                                                                                                                                                    fileInput.value = ""; 
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    