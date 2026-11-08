class Timesheet {
    timesheets = new Map();
  
    submitTimesheet(projectName, duration) {
      this.timesheets.set(projectName, duration);
      return true;
    }
  
    getTimesheets() {
      return [...this.timesheets.values()];
    }
    getTotalTimesheetHours(projectName) {
        return this.timesheets.get(projectName);
      }
  }
  
  module.exports = Timesheet;