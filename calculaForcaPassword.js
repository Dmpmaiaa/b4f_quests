function calculaForcaDaPassword(s) {
    const verifications = [
  (s) => s.length >= 8,
  (s) => /[A-Z]/g.test(s),
  (s) => /[1-9]/g.test(s),
]

return s.length > 0 ? verifications.filter(v => v(s)).length : 'Por favor introduza uma password válida.'
}