export async function generateAI(prompt) {
  const response = await fetch("https://api.ubiqitum.com/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "API_KEY_GOES_HERE"
    },
    body: JSON.stringify({
      model: "qwen2.5:14b",
      prompt: prompt,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;
}