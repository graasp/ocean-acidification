export const mapPointsToCoordinates = (
  points: number[],
  xSign: number,
  height: number,
): number[] =>
  points.map((point, index) => (index % 2 === 0 ? xSign : 1) * point * height);
