class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let start = '<thead><tr>';
    let end = '</tr></thead>';
    data.forEach((d) => {
      start += `<th>${d}</th>`;
    });

    return start + end;
  }

  createBody(data) {
    let start = '<tbody>';
    let end = '</tbody>';

    data.forEach((d) => {
      start += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;
    });

    return start + end;
  }

  render(content) {
    let table = "<table class='table table-hover text-center'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + '</table>';
    content.innerHTML = table;
  }
}

const table = new Table({
  columns: ['Name', 'Age', 'Email'],
  data: [
    ['dafah fabian syah', '24', 'davarobiansyah@gmail.com'],
    ['dafahfabiansyah', '17', 'tkj20-dafahfabiansyah@bns.sch.id'],
  ],
});
const app = document.getElementById('app');
table.render(app);
