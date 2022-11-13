export default function Counter() {
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let startDay = 29;
  let startMonth = 9;
  let startYear = 2022;
  let years, months, days;
  let daysPrevMonth;
  switch (currentMonth) {
    case 1:
      daysPrevMonth = 31;
      break;
    case 2:
      daysPrevMonth = 31;
      break;
    case 3:
      daysPrevMonth = 28;
      break;
    case 4:
      daysPrevMonth = 31;
      break;
    case 5:
      daysPrevMonth = 30;
      break;
    case 6:
      daysPrevMonth = 31;
      break;
    case 7:
      daysPrevMonth = 30;
      break;
    case 8:
      daysPrevMonth = 31;
      break;
    case 9:
      daysPrevMonth = 31;
      break;
    case 10:
      daysPrevMonth = 30;
      break;
    case 11:
      daysPrevMonth = 31;
      break;
    case 12:
      daysPrevMonth = 30;
      break;
    default:
      daysPrevMonth = 0;
      break;
  }
  if (currentMonth > startMonth) {
    years = currentYear - startYear;
    if (currentDay > startDay) {
      months = currentMonth - startMonth;
      days = currentDay - startDay;
    } else if (currentDay < startDay) {
      months = currentMonth - (startMonth + 1);
      days = currentDay + (daysPrevMonth - startDay);
    } else {
      months = currentMonth - startMonth;
      days = 0;
    }
  } else if (currentMonth < startMonth) {
    years = currentYear - (startYear - 1);
    if (currentDay > startDay) {
      months = 12 - (startMonth - currentMonth);
      days = currentDay - startDay;
    } else if (currentDay < startDay) {
      months = currentMonth - (startMonth + 1);
      days = currentDay + (daysPrevMonth - startDay);
    } else {
      months = currentMonth - startMonth;
      days = 0;
    }
  } else {
    months = 0;
    if (currentDay > startDay) {
      years = currentYear - startYear;
      days = currentDay - startDay;
    } else if (currentDay < startDay) {
      years = currentYear - (startYear - 1);
      days = currentDay + (daysPrevMonth - startDay);
    } else {
      years = currentYear - startYear;
      days = 0;
    }
  }
  return (
    <div className="text-white">
      <div className="text-6xl text-center flex w-full items-center justify-center">
        <div className="w-24 mx-1 p-2 bg-white rounded-lg text-black">
          <div className="font-mono leading-none">{years}</div>
          <div className="font-mono uppercase text-sm leading-none">Years</div>
        </div>
        <div className="w-24 mx-1 p-2 bg-white rounded-lg text-black">
          <div className="font-mono leading-none">{months}</div>
          <div className="font-mono uppercase text-sm leading-none">Months</div>
        </div>
        <div className="w-24 mx-1 p-2 bg-white rounded-lg text-black">
          <div className="font-mono leading-none">{days}</div>
          <div className="font-mono uppercase text-sm leading-none">Days</div>
        </div>
      </div>
    </div>
  );
}
