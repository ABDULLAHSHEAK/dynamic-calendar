
  function createCalendar(year, month) {
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed

   const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
   ];

   const date = new Date(year, month - 1); // Month is 0-indexed
   const daysInMonth = new Date(year, month, 0).getDate();
   const firstDayIndex = date.getDay();

   const calendarDiv = document.getElementById('calendar');
   calendarDiv.innerHTML = '';

   // Create the header
   const header = document.createElement('div');
   header.classList.add('header');
   header.textContent = `${monthNames[month - 1]} ${year}`;
   calendarDiv.appendChild(header);

   // Create table structure for the days
   const table = document.createElement('table');
   const tbody = document.createElement('tbody');
   let day = 1;

   // Create rows and cells for days
   for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
     const cell = document.createElement('td');
     if (i === 0 && j < firstDayIndex) {
      // Fill empty cells before the start of the month
      const textNode = document.createTextNode('');
      cell.appendChild(textNode);
     } else if (day > daysInMonth) {
      break;
     } else {
      const textNode = document.createTextNode(day);
      cell.appendChild(textNode);
      if (year === currentYear && month === currentMonth && day === currentDate.getDate()) {
       cell.classList.add('highlight');
      }
      day++;
     }
     row.appendChild(cell);
    }
    tbody.appendChild(row);
   }
   table.appendChild(tbody);
   calendarDiv.appendChild(table);
  }

  // Usage:
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed

  createCalendar(currentYear, currentMonth);