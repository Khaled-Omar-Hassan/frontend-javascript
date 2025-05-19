interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Khaled",
  lastName: "Omar",
  age: 22,
  location: "Cairo"
};

const student2: Student = {
  firstName: "Radwa",
  lastName: "Nasr",
  age: 19,
  location: "Giza"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");



studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
