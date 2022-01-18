(() => {
  const day = {
    init() {
      this.cacheElements();
      this.generateDayHTML();
    },
    cacheElements() {
      this.$title = document.querySelector("#title");
    },
    generateDayHTML() {
      const search = window.location.search;
      const params = new URLSearchParams(search);

      if (params.has("day")) {
        const day = params.get("day");

        // filteren obv day

        this.$title.innerHTML = day;
      } else {
        this.$title.innerHTML = "No day given";
      }
    },
  };

  day.init();
})();
