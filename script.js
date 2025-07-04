let results = [];

function addResult(char) {
  results.push(char);
  document.getElementById('inputSequence').value = results.join(',');
}

function reset() {
  results = [];
  document.getElementById('inputSequence').value = '';
  document.getElementById('prediction-content').innerHTML = '请先输入局结果';
}

function generate() {
  if (results.length === 0) return;
  const prediction = calculatePrediction(results);
  document.getElementById('prediction-content').innerHTML = `
    <p>👉 <strong>预测结果：</strong> ${prediction.next}</p>
    <p>📈 <strong>信心指数：</strong> <span style="color:${prediction.color};font-weight:bold">${prediction.confidence}</span></p>
    <p>💰 <strong>建议下注金额：</strong> ${prediction.amount}</p>
    <p>🔍 <strong>结构类型：</strong> ${prediction.structure}</p>
    <p>🎯 <strong>系统建议：</strong> ${prediction.tip}</p>
  `;
}
