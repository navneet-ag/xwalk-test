export default async function decorate(fieldDiv, fieldJson) {
  console.log("SCRIBBLE SIGNATURE DIV: ", fieldDiv);
  console.log("SCRIBBLE SIGNATURE JSON: ", fieldJson);

  // Create the canvas for scribble signature
  const canvas = document.createElement("canvas");
  canvas.className = "scribble-signature-canvas";
  canvas.width = 300; // Default width
  canvas.height = 150; // Default height

  // Append canvas to the fieldDiv
  fieldDiv.appendChild(canvas);

  // Add a clear button
  const clearButton = document.createElement("button");
  clearButton.className = "scribble-signature-clear";
  clearButton.textContent = "Clear";
  fieldDiv.appendChild(clearButton);

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  let isDrawing = false;

  // Drawing functionality
  canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();
  });

  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath();
  });

  canvas.addEventListener("mouseleave", () => {
    isDrawing = false;
  });

  // Clear button functionality
  clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  return fieldDiv;
}
