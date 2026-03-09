window.generateAI = async function(prompt) {

  const response = await fetch("https://api.ubiqitum.com/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "ubiq_live_sk_R4tY8kLp2VnX7qZc1FmD9sHa6Bw3JgKe0UxTrNvW"
    },
    body: JSON.stringify({
      model: "qwen2.5:14b",
      prompt: prompt,
      stream: false
    })
  });

  const data = await response.json();
  return data.response;

};