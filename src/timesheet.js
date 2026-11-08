class Timesheet {
    #timesheets = new Map();
  
    normalizeProjectName(projectName) {
      if (
        typeof projectName !== 'string' ||
        projectName.trim() === ''
      ) {
        throw new TypeError('Project name must be a non-empty string');
      }
  
      return projectName.trim();
    }
  
    submitTimesheet(projectName, duration) {
      const name = this.normalizeProjectName(projectName);
  
      if (typeof duration !== 'number' || !Number.isFinite(duration)) {
        throw new TypeError('Duration must be a finite number');
      }
  
      if (duration <= 0) {
        throw new RangeError('Duration must be greater than zero');
      }
  
      const currentTotal = this.#timesheets.get(name) ?? 0;
      const newTotal = currentTotal + duration;
  
      if (!Number.isFinite(newTotal)) {
        throw new RangeError('Total hours exceed the numeric range');
      }
  
      this.#timesheets.set(name, newTotal);
      return true;
    }
  
    getTimesheets() {
      return [...this.#timesheets.values()];
    }
  
    getTotalTimesheetHours(projectName) {
      const name = this.normalizeProjectName(projectName);
      return this.#timesheets.get(name) ?? 0;
    }
  }
  
  module.exports = Timesheet;