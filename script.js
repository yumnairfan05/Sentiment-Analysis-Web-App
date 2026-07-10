async function predictSentiment() {

    const text = document.getElementById("textInput").value;

    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    document.getElementById("result").innerHTML = "Predicting...";

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        const data = await response.json();

        document.getElementById("result").innerHTML =
            "Prediction: " + data.prediction;

    } catch (error) {

        console.log(error);

        document.getElementById("result").innerHTML =
            "Error connecting to the backend.";

    }

}