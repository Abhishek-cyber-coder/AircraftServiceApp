import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  submitButtonDisabled: boolean;
  searchForm: FormGroup | undefined;
  selectAircraft: any;
  selectDate: any;
  selectSatSun: any;
  selectedDateInput: string;
  dateInputSearch: Date = new Date('2023-01-01');
  eventsArr: { title: string; date: string; color: string }[] = [];
  tempArray: String[] = [];
  weekendValue: boolean = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [],
    weekends: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      selectAircraft: new FormControl('', { nonNullable: true }),
      selectDate: new FormControl(null),
      selectCheckbox: new FormControl(false, { nonNullable: true }),
    });
  }

  async searchInputs() {
    // console.log('this.todayDate()',this.selectedDate());
    // console.log(this.searchForm.value);
    // console.log(this.searchForm.value.selectAircraft);
    // console.log(this.searchForm.value.selectDate);
    if (!this.searchForm || !this.searchForm.value) {
      return;
    }

    if (this.searchForm.value.selectAircraft) {
      this.searchForm.value.selectAircraft =
        this.searchForm.value.selectAircraft != ''
          ? this.searchForm.value.selectAircraft
          : null;
    }

    if (this.searchForm.value.selectDate) {
      this.searchForm.value.selectDate =
        this.searchForm.value.selectDate != null
          ? this.searchForm.value.selectDate
          : null;
    }

    this.dateInputSearch = this.searchForm.value.selectDate;
    console.log(this.searchForm.value.selectAircraft);
    console.log(this.searchForm.value.selectDate);
    console.log(this.searchForm.value.selectCheckbox);
    // await this.searchForm.value.selectCheckbox ?
    (await this.searchForm.value.selectCheckbox)
      ? this.addEvent()
      : this.addEventWithoutWeekends();
  }

  clearInputs() {
    this.searchForm?.reset();
    this.eventsArr = [];
    this.calendarOptions.events = [];
    this.calendarOptions.weekends = true;
    this.tempArray = [];
  }

  addEvent() {
    this.calendarOptions.weekends = true;
    const tempList = [7, 14, 28, 56, 112, 224];
    const colour = ['orange', 'yellow', 'green', 'blue', 'pink', 'grey'];

    var n = 0,
      count,
      cnt;
    while (n < tempList.length) {
      (count = 1), (cnt = 0);
      while (cnt < 731 - tempList[n]) {
        console.log('inner', cnt);
        if (tempList[n] == 7) {
          this.eventsArr.push({
            title: 'Available',
            date: this.addDays(this.dateInputSearch, tempList[n] * count + n),
            color: colour[n],
          });
          this.tempArray.push(
            this.addDays(this.dateInputSearch, tempList[n] * count + n)
          );
        } else if (tempList[n] == 14) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 28) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 56) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 112) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 224) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithoutWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        }
        count += 1;
        cnt += tempList[n];
      }
      n += 1;
    }
    this.calendarOptions.events = this.eventsArr;
  }

  addEventWithoutWeekends() {
    this.calendarOptions.weekends = true;
    const tempList = [7, 14, 28, 56, 112, 224];
    const colour = ['orange', 'yellow', 'green', 'blue', 'pink', 'grey'];

    var n = 0,
      count,
      cnt,
      skipWeekends;
    while (n < tempList.length) {
      (count = 1), (cnt = 0);
      while (cnt < 731 - tempList[n] - tempList[n] / 7) {
        if (tempList[n] == 7) {
          skipWeekends = this.skipWeekends(
            this.addDays(this.dateInputSearch, tempList[n] * count + n)
          );
          this.eventsArr.push({
            title: 'Available',
            date: this.addDays(
              this.dateInputSearch,
              tempList[n] * count + n + skipWeekends
            ),
            color: colour[n],
          });
          this.tempArray.push(
            this.addDays(
              this.dateInputSearch,
              tempList[n] * count + n + skipWeekends
            )
          );
        } else if (tempList[n] == 14) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 28) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 56) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 112) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        } else if (tempList[n] == 224) {
          var tempDate = '';
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
          tempDate = this.checkSelectedEventsWithWeekends(
            tempList[n],
            count,
            n
          );
          this.eventsArr.push({
            title: 'Available',
            date: tempDate,
            color: colour[n],
          });
          this.tempArray.push(tempDate);
        }
        count += 1;
        cnt += tempList[n];
      }
      n += 1;
    }
    this.calendarOptions.events = this.eventsArr;
  }

  checkSelectedEventsWithoutWeekends(tempListN, count, n) {
    var tempDate = '',
      tempVar = 0;
    tempDate = this.addDays(this.dateInputSearch, tempListN * count + n);
    while (true) {
      if (this.tempArray.includes(tempDate)) {
        tempVar += 1;
        tempDate = this.addDays(
          this.dateInputSearch,
          tempListN * count + n + tempVar
        );
      } else {
        break;
      }
    }
    return tempDate;
  }

  checkSelectedEventsWithWeekends(tempListN, count, n) {
    var sWeekends = 0,
      tempDate = '',
      tempVar = 0;
    tempDate = this.addDays(this.dateInputSearch, tempListN * count + n);
    while (true) {
      if (this.tempArray.includes(tempDate)) {
        tempVar += 1;
        tempDate = this.addDays(
          this.dateInputSearch,
          tempListN * count + n + tempVar + sWeekends
        );
      } else if (this.skipWeekends(tempDate) != 0) {
        sWeekends += this.skipWeekends(tempDate);
        tempDate = this.addDays(
          this.dateInputSearch,
          tempListN * count + n + tempVar + sWeekends
        );
      } else {
        break;
      }
    }
    return tempDate;
  }

  selectedDate(sDate) {
    var selectedDate = new Date(sDate);
    var dd = selectedDate.getDate();
    var mm = selectedDate.getMonth() + 1;
    var yyyy = selectedDate.getFullYear();
    var dds = dd < 10 ? '0' + dd : String(dd);
    var mms = mm < 10 ? '0' + mm : String(mm);
    this.selectedDateInput = yyyy + '-' + mms + '-' + dds;
    return this.selectedDateInput;
  }

  skipWeekends(date) {
    var d = new Date(date);
    var isWeekend = 0;
    isWeekend = d.getDay() == 0 ? 1 : isWeekend;
    isWeekend = d.getDay() == 6 ? 2 : isWeekend;
    return isWeekend;
  }

  addDays = (date: Date, days: number): any => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return this.selectedDate(result);
  };
}
