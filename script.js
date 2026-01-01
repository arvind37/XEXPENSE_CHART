fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const chart = document.getElementById("spending-chart");

    const todayIndex = new Date().getDay() - 1; // mon = 0

    data.forEach((item, index) => {
      const barWrapper = document.createElement("div");

      const bar = document.createElement("div");
      bar.className = "spending-chart__bar";
      bar.dataset.label = item.day;
      bar.dataset.amount = `$${item.amount}`;

      if (index === todayIndex) {
        bar.classList.add("active");
      }

      bar.style.height = `${item.amount * 3}px`;

      const label = document.createElement("div");
      label.className = "spending-chart__label";
      label.textContent = item.day;

      barWrapper.appendChild(bar);
      barWrapper.appendChild(label);

      chart.appendChild(barWrapper);
    });
  });
