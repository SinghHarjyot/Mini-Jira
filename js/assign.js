import config from './config.js';

document.addEventListener('DOMContentLoaded', async () => {
  const bugs = await fetchBugs();
  const employees = await fetchEmployees();
  renderAssignTable(bugs, employees);
});

async function fetchBugs() {
  return [
    { id: "B1", title: "Login page error" },
    { id: "B2", title: "Dashboard slow load" },
    { id: "B3", title: "Button not clickable" }
  ];
}

async function fetchEmployees() {
  return [
    { id: "E1", name: "Alice" },
    { id: "E2", name: "Bob" },
    { id: "E3", name: "Charlie" }
  ];
}

function renderAssignTable(bugs, employees) {
  const tbody = document.querySelector('#bugAssignTable tbody');
  tbody.innerHTML = bugs.map(bug => `
    <tr>
      <td>${bug.id}</td>
      <td>${bug.title}</td>
      <td>
        <select id="emp-${bug.id}" class="form-select">
          ${employees.map(e => `<option value="${e.id}">${e.name}</option>`).join('')}
        </select>
      </td>
      <td><button class="btn btn-success btn-sm" onclick="assign('${bug.id}')">Assign</button></td>
    </tr>
  `).join('');
}

window.assign = async (bugId) => {
  const empId = document.getElementById(`emp-${bugId}`).value;
  console.log(`Assigned Employee ${empId} to Bug ${bugId}`);
  alert(`✅ Employee ${empId} assigned to ${bugId}`);
};
