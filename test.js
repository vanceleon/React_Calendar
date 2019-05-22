let days = [];
let day = startDate;
let formattedDate = "";
while (day <= endDate) {
  for (let i = 0; i < 7; i++) {
    formattedDate = dateFns.format(day, dateFormat);
    const cloneDay = day;
    days.push(
      <div
        className={`col cell ${
          !dateFns.isSameMonth(day, monthStart)
            ? "disabled"
            : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
        }`}
        key={day}
        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
      >
        <span className="number">{formattedDate}</span>
        <span className="bg">{formattedDate}</span>
      </div>
    );
    day = dateFns.addDays(day, 1);
  }
  rows.push(
    <div className="row" key={day}>
      {days}
    </div>
  );
  days = [];
}