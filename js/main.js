import { renderBugChart } from './dashboard.js';
import Auth from './cognito-auth.js';

document.addEventListener('DOMContentLoaded', async () => {
  const user = Auth.getUser();
  if (!user) {
    window.location.href = 'signin.html';
    return;
  }

  document.getElementById('userInfo').innerHTML = `Logged in as <b>${user}</b>`;

  const bugs = [
    { id: 'B1', title: 'Login error', status: 'Open' },
    { id: 'B2', title: 'CSS glitch', status: 'Closed' },
    { id: 'B3', title: 'Data not saving', status: 'Open' }
  ];

  renderBugTable(bugs);
  renderBugChart(bugs);
});

function renderBugTable(bugs) {
  const tbody = document.querySelector('#bugTable tbody');
  tbody.innerHTML = bugs.map(b => `
    <tr><td>${b.id}</td><td>${b.title}</td><td>${b.status}</td></tr>
  `).join('');
}
