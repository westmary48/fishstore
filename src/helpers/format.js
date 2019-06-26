const formatPrice = cents => (cents / 100).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default { formatPrice };
