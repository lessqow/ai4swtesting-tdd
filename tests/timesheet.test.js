const Timesheet = require('../src/timesheet');

test('submitting a timesheet with a project name and hours returns true', () => {
  const timesheet = new Timesheet();

  expect(timesheet.submitTimesheet('Project 1', 8)).toBe(true);
});

test('timesheets that are added can be retrieved as a list', () => {
  const timesheet = new Timesheet();

  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 4.5);
  timesheet.submitTimesheet('Project 3', 3);

  expect(timesheet.getTimesheets()).toEqual([8, 4.5, 3]);
});

test('the total hours worked on one project can be calculated', () => {
  const timesheet = new Timesheet();

  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 4.5);

  expect(timesheet.getTotalTimesheetHours('Project 1')).toBe(24);
});