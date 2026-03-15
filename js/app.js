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

window.updateDashboardScores = function(scores) {
  const relevanceEl = document.getElementById("relevance-text");
  const awarenessEl = document.getElementById("awareness-text");
  const considerationEl = document.getElementById("consideration-text");
  const trustEl = document.getElementById("trust-text");
  const brandIndexEl = document.getElementById("bar-score-text");

  if (relevanceEl && scores.relevance != null) {
    relevanceEl.innerText = scores.relevance;
  }

  if (awarenessEl && scores.awareness != null) {
    awarenessEl.innerText = scores.awareness;
  }

  if (considerationEl && scores.consideration != null) {
    considerationEl.innerText = scores.consideration;
  }

  if (trustEl && scores.trust != null) {
    trustEl.innerText = scores.trust;
  }

  if (brandIndexEl && scores.brandIndex != null) {
    brandIndexEl.innerText = scores.brandIndex;
  }
};