function vaildateCost(cost) {
  const n1 = cost.toString();
  const a = n1.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return a;
}

export default vaildateCost;
