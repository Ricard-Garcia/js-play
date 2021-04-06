if (grid.checked && time.checked) {
  showGameGrid(12, 1000, "repeat(3, 1fr)");
} else if (grid.checked && time1.checked) {
  showGameGrid(12, 800, "repeat(3, 1fr)");
} else if (grid.checked && time2.checked) {
  showGameGrid(12, 500, "repeat(3, 1fr)");
} else if (grid1.checked && time.checked) {
  showGameGrid(24, 1000, "repeat(5, 1fr)");
} else if (grid1.checked && time1.checked) {
  showGameGrid(24, 800, "repeat(5, 1fr)");
} else if (grid1.checked && time2.checked) {
  showGameGrid(24, 500, "repeat(5, 1fr)");
} else if (grid2.checked && time.checked) {
  showGameGrid(60, 1000, "repeat(5, 1fr)");
} else if (grid2.checked && time1.checked) {
  showGameGrid(60, 800, "repeat(5, 1fr)");
} else if (grid2.checked && time2.checked) {
  showGameGrid(60, 500, "repeat(5, 1fr)");
}
