let example = [
  {
    birthDate: {
      year: '1991',
      month: '04',
      day: '23'
    },
    faculty: "Экономики",
    surname: "Иванов",
    name: "Иван",
    middleName: "Иванович",
    firstYear: 2008
  },
  {
    birthDate: {
      year: '1990',
      month: '08',
      day: '28'
    },
    faculty: "Финансов",
    surname: "Сидоров",
    name: "Андрей",
    middleName: "Петрович",
    firstYear: 2007
  },
  {
    birthDate: {
      year: '1990',
      month: '08',
      day: '22'
    },
    faculty: "Биологии",
    surname: "Иванов",
    name: "Петр",
    middleName: "Андреевич",
    firstYear: 2007
  },
  {
    birthDate: {
      year: '1993',
      month: '05',
      day: '10'
    },
    faculty: "Менеджмента",
    surname: "Александров",
    name: "Василий",
    middleName: "Сергеевич",
    firstYear: 2009
  },
  {
    birthDate: {
      year: '1989',
      month: '12',
      day: '31'
    },
    faculty: "Юридический",
    surname: "Богданов",
    name: "Артем",
    middleName: "Андреевич",
    firstYear: 2005
  }
];

function studentFilter() {
  let filteredStudents = students
    .filter(filterByName)
    .filter(filterByFaculty)
    .filter(filterByFirstYear)
    .filter(filterByLastYear);
  addStudents(filteredStudents, studTable);
}

function filterByName(obj) {
  let input = searchNameInput;
  if (input.value.length === 0) {
    return obj;
  } else {
    let filterVal = input.value.toLowerCase()
      .split(' ').join('');
    obj.fullName = function () {
      let fullName = obj.surname + obj.name + obj.middlename;
      return fullName.toLowerCase();
    }
    if (obj.fullName()
      .includes(filterVal)) {
      delete obj.fullName;
      return obj;
    }
  }
}

function filterByFaculty(obj) {
  let input = searchFacultyInput;
  if (input.value.length === 0) {
    return obj;
  } else {
    let filterVal = input.value.toLowerCase()
      .split(' ').join('');
    let faculty = obj.faculty.toLowerCase();
    if (faculty
      .includes(filterVal)) {
      return obj;
    }
  }
}

function filterByFirstYear(obj) {
  let input = searchFirstYearInput;
  if (input.value.length === 0) {
    return obj;
  } else {
    let filterVal = parseInt(input.value);
    let firstYear = obj.firstYear;
    if (filterVal == firstYear) {
      return obj;
    }
  }
}

function filterByLastYear(obj) {
  let input = searchLastYearInput;
  if (input.value.length === 0) {
    return obj;
  } else {
    let filterVal = parseInt(input.value);
    let firstYear = obj.firstYear;
    if (filterVal == (firstYear + 4)) {
      return obj;
    }
  }
}

function sortByName(arr) {
  arr.sort((a, b) => (a.surname + a.name + a.middleName) > (b.surname + b.name + b.middleName) ? 1 : -1)
  for (let i = 0; i < arr.length; i++) {
    studTable.lastChild.remove();
  }
  localStorage.removeItem('students');
  localStorage.setItem('students', JSON.stringify(arr))
  addStudents(students, studTable);
}

function sortByFaculty(arr) {
  arr.sort((a, b) => a.faculty > b.faculty ? 1 : -1)
  for (let i = 0; i < arr.length; i++) {
    studTable.lastChild.remove();
  }
  localStorage.removeItem('students');
  localStorage.setItem('students', JSON.stringify(arr))
  addStudents(students, studTable);
}

function sortByAge(arr) {
  arr.sort((a, b) => parseInt(a.birthDate.year + a.birthDate.month + a.birthDate.day) < parseInt(b.birthDate.year + b.birthDate.month + b.birthDate.day) ? 1 : -1)
  for (let i = 0; i < arr.length; i++) {
    studTable.lastChild.remove();
  }
  localStorage.removeItem('students');
  localStorage.setItem('students', JSON.stringify(arr))
  addStudents(students, studTable);
}

function sortByYears(arr) {
  arr.sort((a, b) => a.firstYear > b.firstYear ? 1 : -1)
  for (let i = 0; i < arr.length; i++) {
    studTable.lastChild.remove();
  }
  localStorage.removeItem('students');
  localStorage.setItem('students', JSON.stringify(arr))
  addStudents(students, studTable);
}

function getItemsFromLocalStorage(key) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(example))
  }
  return JSON.parse(localStorage.getItem(key));
}

let students = getItemsFromLocalStorage('students');
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let studTable = document.querySelector('.table');
let form = document.querySelector('.new-student-form');
let surnameInput = form.querySelector('#surname');
let nameInput = form.querySelector('#name');
let middlenameInput = form.querySelector('#middlename');
let facInput = form.querySelector('#faculty');
let birthInput = form.querySelector('#birthDate');
let yearsInput = form.querySelector('#studieYears');

let searchForm = document.querySelector('.search-student-form');
let searchNameInput = searchForm.querySelector('#searchName');
let searchFacultyInput = searchForm.querySelector('#searchFaculty');
let searchFirstYearInput = searchForm.querySelector('#searchFirstYear');
let searchLastYearInput = searchForm.querySelector('#searchLastYear');

let fullNameHeading = studTable.querySelector('.full-name');
let facultyHeading = studTable.querySelector('.faculty');
let ageHeading = studTable.querySelector('.age');
let studieYearsHeading = studTable.querySelector('.studie-years');

let searchInputs = searchForm.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', studentFilter);
});

fullNameHeading.addEventListener('click', function (e) {
  sortByName(students);
});

facultyHeading.addEventListener('click', function (e) {
  sortByFaculty(students);
});

ageHeading.addEventListener('click', function (e) {
  sortByAge(students);
});

studieYearsHeading.addEventListener('click', function (e) {
  sortByYears(students);
});


form.querySelectorAll('.new-student-input').forEach(input =>
  input.addEventListener('input', function () {
    input.classList.remove('alert')
  }));
let addBtn = form.querySelector('.add-btn');

let getAge = function (curYear, birthYear) {
  let age = curYear - birthYear;
  let spell = function (e) {
    let lastDigit = age % 10;
    if (lastDigit === 1) {
      e = ' год';
    } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
      e = ' года';
    }
    else {
      e = ' лет';
    }
    return e;
  }
  let fullAge = ` (${age}` + `${spell()})`;
  return fullAge;
};

let getState = function (curYear, firstYear) {
  let lastYear = firstYear + 4;
  if (curYear > lastYear) {
    state = ' (закончил)'
  } else {
    state = ` (${curYear - firstYear}` + ` курс)`
    if (state.includes('0')) {
      state = ' (1 курс)'
    }
  }
  return state;
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let firstYear = parseInt(yearsInput.value);
  let birthDate = birthInput.value;
  let birthYear = parseInt(birthDate.substring(0, 4));

  if (surnameInput.value === '') {
    alert(`Поле "Фамилия" обязательно для заполнения`);
    surnameInput.classList.add('alert');
    return;
  };

  if (nameInput.value === '') {
    alert(`Поле "Имя" обязательно для заполнения`);
    nameInput.classList.add('alert');
    return;
  };

  if (middlenameInput.value === '') {
    alert(`Поле "Отчество" обязательно для заполнения`);
    middlenameInput.classList.add('alert');
    return;
  };

  if (facInput.value === '') {
    alert(`Поле "Факультет" обязательно для заполнения`);
    facInput.classList.add('alert');
    return;
  };

  if (birthYear < 1900 || birthYear > currentYear) {
    alert('Введите верное значение в поле даты рождения');
    birthInput.classList.add('alert');
    return;
  };

  if (firstYear > currentYear) {
    alert('Укажите верное значение года начала обучения');
    yearsInput.value = currentYear;
    yearsInput.classList.add('alert');
    return;
  };

  let birthDateObj = function (value) {
    let DateArr = value.split('-');
    let DateObj = {
      year: '',
      month: '',
      day: ''
    };
    DateObj.year = DateArr[0];
    DateObj.month = DateArr[1];
    DateObj.day = DateArr[2];
    return DateObj;
  }

  let newStudent = {
    surname: `${surnameInput.value}`,
    name: `${nameInput.value}`,
    middleName: `${middlenameInput.value}`,
    faculty: `${facInput.value}`,
    birthDate: birthDateObj(birthInput.value),
    firstYear: firstYear
  }
  students.push(newStudent);
  localStorage.setItem('students', JSON.stringify(students));
  addStudent(newStudent, studTable);

  nameInput.value = '';
  facInput.value = '';
  birthInput.value = '1990-01-01';
  yearsInput.value = 2018;
});

let addStudents = function (arr, table) {
  removeStudents(table)
  for (let i = 0; i < arr.length; i++) {
    addStudent(arr[i], table)
  };
};

let removeStudents = function (table) {
  table.querySelectorAll('.table-row')
    .forEach(element => {
      element.remove();
    })
};

let addStudent = function (student, table) {
  let tableRow = document.createElement('tr');
  tableRow.classList.add('table-row');
  let state = getState(currentYear, student.firstYear);
  tableRow.innerHTML =
    `<td>${student.surname + ' ' + student.name + ' ' + student.middleName}</td>
     <td>${student.faculty}</td>
     <td>${student.birthDate.day + ' - ' + student.birthDate.month + ' - ' + student.birthDate.year + ' ' + getAge(currentYear, student.birthDate.year)}</td>
     <td>${student.firstYear + '-' + (student.firstYear + 4) + ' ' + state}</td>`;
  table.appendChild(tableRow)
};

addStudents(students, studTable);

