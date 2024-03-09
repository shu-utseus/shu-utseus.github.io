window.addEventListener("DOMContentLoaded", () => {
  // const nav = (() => {
  //   const nav = document.querySelector(".main-navigation");
  //   const navOpen = document.querySelector(".mobile-nav-open");
  //   const navClose = document.querySelector(".mobile-nav-close");
  //   navOpen.addEventListener("click", () => nav.classList.add("active"));
  //   navClose.addEventListener("click", () => nav.classList.remove("active"));
  // })();

  const search = (() => {
    const searchResult = (result) =>
      `<tr>
    <td><a href="${result.url}">${result.name}</a></td>
    <td>${result.language}</td>
    <td>${result.category}</td>
    <td>${result.formation}</td>
    <td>${result.spinneret}</td>
    <td>${result.academic_year}</td>
    <td>${result.type_of_training}</td>
    <td>${result.semester}</td>
    </tr>`;
    const searchForm = document.querySelector("#search-form");
    const submit = document.querySelector("#submit")
    const tbody = document.querySelector("#search-courses");
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      tbody.innerHTML = "";
      const inputs = searchForm .querySelectorAll("input, select");
      const formData = {};
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      console.log('f',formData);
      const pages = JSON.parse(SITE_DATA.pages);
      console.log(pages);
      const results = Array.from(pages)?.filter((page) => {
        const isQueryMatched = page.name.toLowerCase().includes(formData.query.toLowerCase());
        const isAcademicYearMatched = formData.academic_year === "All" || page.academic_year === formData.academic_year;
        const isCategoryMatched = formData.category === "All" || page.category === formData.category;
        const isFormationMatched = formData.formation === "All" || page.formation === formData.formation;
        const isSpinneretMatched = formData.spinneret === "All" || page.spinneret === formData.spinneret;
        const isLanguageMatched = formData.language === "All" || page.language === formData.language;
        const isTypeOfTrainingMatched = formData.type_of_training === "All" || page.type_of_training === formData.type_of_training;
        const isSemesterMatched = formData.semester === "All" || page.semester === formData.semester;
      
        return (
          isQueryMatched &&
          isAcademicYearMatched &&
          isCategoryMatched &&
          isFormationMatched &&
          isSpinneretMatched &&
          isLanguageMatched &&
          isTypeOfTrainingMatched &&
          isSemesterMatched
        );
      }) || [];
      console.log('results', results);
      if (results.length > 0) {
        const markup = results.map((result) => searchResult(result));
        tbody.innerHTML = markup.join("");
      }
    });
  })();
});
