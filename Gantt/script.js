import { GanttChart } from "./components/ganttChart/ganttChart.js";

document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    { id: 1, name: "Task 1" },
  ];

  const taskDurations = [
    {
      id: "1",
      start: new Date("2022/1/2"),
      end: new Date("2022/1/8"),
      task: 1,
    },
  ];

  const ganttCharts = document.querySelectorAll("[role=gantt-chart]");
  ganttCharts.forEach((gantChart) => {
    new GanttChart(gantChart, tasks, taskDurations);
  });
});
