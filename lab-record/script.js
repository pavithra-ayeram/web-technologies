// Lab Record Code Loader + Highlighter

document.addEventListener("DOMContentLoaded", async () => {
  const codeBlocks = document.querySelectorAll("pre code[data-src]");

  for (const block of codeBlocks) {
    const filePath = block.getAttribute("data-src");

    try {
      // Fetch the file content (works locally in modern browsers)
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);

      const text = await response.text();

      // Set code content safely
      block.textContent = text;

      // Highlight syntax
      hljs.highlightElement(block);

    } catch (err) {
      console.error("Error loading code:", err);
      block.textContent = `/* Error loading file: ${filePath} */\n${err}`;
    }
  }
});
