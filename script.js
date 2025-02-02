document.getElementById("reportForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const response = await fetch("http://localhost:5000/api/report", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            alert("Report submitted successfully!");
            event.target.reset();
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        console.error("Error submitting report:", error);
    }
});
