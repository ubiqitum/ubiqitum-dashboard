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

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "API request failed: " + response.status);
    }

    console.log("AI response:", data);

    return data.response || data.result || data;
  } catch (error) {
    console.error("AI error:", error);
    return "AI request failed.";
  }
};