function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillStyle) {
  canvasContext.fillStyle = fillStyle;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawText(text, textX, textY, fillStyle, textAlign, textBaseline) {
  canvasContext.fillStyle = fillStyle;
  canvasContext.textAlign = textAlign;
  canvasContext.textBaseline = textBaseline;
  canvasContext.fillText(text, textX, textY);
}
