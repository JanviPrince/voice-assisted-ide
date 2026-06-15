const apiKey = "AIzaSyCaeLi365JUEp_VdXe06X11-g52ERJgVxw"; // replace with your Gemini Pro key

async function testGemini() {
  try {
    const response = await fetch("https://api.gemini.com/v1/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: "Create a JavaScript function that adds two numbers",
        language: "javascript",
        max_tokens: 150
      })
    });

    const data = await response.json();
    console.log("Raw Gemini response:", data);

    // Try to print code if it exists
    console.log("Generated code:", data.code || data.output || JSON.stringify(data));
  } catch (err) {
    console.error("Error calling Gemini:", err);
  }
}

testGemini();
