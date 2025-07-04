function calculatePrediction(results) {
  const last = results[results.length - 1];
  const confidence = Math.floor(Math.random() * 21) + 80; // 80-100%
  const color = confidence >= 90 ? 'red' : (confidence >= 85 ? 'orange' : 'gray');
  const next = last === 'B' ? 'P' : 'B';
  const amount = confidence >= 90 ? '$150-$300' : (confidence >= 85 ? '$50' : '$30');
  const structure = confidence >= 90 ? '三角结构+共振' : (confidence >= 85 ? '轻度共振' : '一般结构');
  const tip = confidence >= 90 ? '🔥 强信号！可重注' : (confidence >= 85 ? '建议中注跟进' : '结构不稳，谨慎下注');

  return {
    next,
    confidence: confidence + '%',
    color,
    amount,
    structure,
    tip
  };
}
