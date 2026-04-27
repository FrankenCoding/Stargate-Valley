export const formatNumber = (value: number): string => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(2)}K`;
  return value.toFixed(value < 10 ? 2 : 0);
};

export const formatRate = (value: number): string => `${formatNumber(value)}/s`;

export const formatPercent = (value: number): string => `${(value * 100).toFixed(1)}%`;
