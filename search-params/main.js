(() => {
  const courses = [
    {
      slug: "@work-1",
      title: "@Work 1",
      description: "Werkplekleren",
    },
    {
      slug: "programming-2",
      title: "Programming 2",
      description: "Programmeren maar dan 2",
    },
    {
      slug: "ui-design",
      title: "UI Design",
      description: "UI Design met Evelien en Dieter",
    },
  ];

  const app = {
    init() {
      // don't put everything in init method, create more functions
      const search = window.location.search;
      const params = new URLSearchParams(search);

      if (params.has("course")) {
        const slug = params.get("course");

        const currentCourse = courses.find((course) => {
          return course.slug === slug;
        });

        const $title = document.querySelector("#title");
        const $description = document.querySelector("#description");

        if (currentCourse) {
          $title.innerHTML = currentCourse.title;
          $description.innerHTML = currentCourse.description;
        } else {
          $title.innerHTML = "Course niet gevonden";
        }
      } else {
        window.alert("Gelieve een course mee te geven!");
      }
    },
  };

  app.init();
})();
