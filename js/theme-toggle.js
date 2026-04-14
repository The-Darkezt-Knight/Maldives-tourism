(() => {
  const storageKey = "tourism-theme-preference";
  const body = document.body;
  const toggleCheckbox = document.getElementById("check-5");

  if (!body || !toggleCheckbox) {
    return;
  }

  const setMode = (mode) => {
    const isNight = mode === "night";
    body.classList.toggle("night-mode", isNight);
    toggleCheckbox.checked = isNight;
    toggleCheckbox.setAttribute("aria-checked", String(isNight));
  };

  const readStoredMode = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const saveMode = (mode) => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch {
      // Ignore storage write failures.
    }
  };

  const storedMode = readStoredMode();
  if (storedMode === "night" || storedMode === "day") {
    setMode(storedMode);
  } else {
    setMode("day");
  }

  toggleCheckbox.addEventListener("change", () => {
    const nextMode = toggleCheckbox.checked ? "night" : "day";
    setMode(nextMode);
    saveMode(nextMode);
  });
})();
