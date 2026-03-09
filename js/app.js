window.generateAI = async function(prompt) {

  try {

    const response = await fetch("https://api.ubiqitum.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt
      })
    });

    if (!response.ok) {
      throw new Error("API request failed: " + response.status);
    }

    const data = await response.json();

    console.log("AI response:", data);

    return data.response || data.result || data;

  } catch (error) {

    console.error("AI error:", error);
    return "AI request failed.";co

  }

};