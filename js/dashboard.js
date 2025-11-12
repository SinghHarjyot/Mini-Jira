import Chart from '../vendor/chart.min.js';

export function renderBugChart(bugs) {
  const open = bugs.filter(b => b.status === 'Open').length;
  const closed = bugs.filter(b => b.status === 'Closed').length;

  new Chart(document.getElementById('bugChart'), {
    type: 'pie',
    data: {
      labels: ['Open', 'Closed'],
      datasets: [{
        data: [open, closed],
        backgroundColor: ['#f39c12', '#2ecc71']
      }]
    }
  });
}
