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
      const results =
        Array.from(pages)?.filter((page) =>
          page.name.toLowerCase().includes(formData.query.toLowerCase())&&
          page.academic_year === formData.academic_year&&
          page.category === formData.category&&
          page.formation === formData.formation&&
          page.spinneret === formData.spinneret&&
          page.language === formData.language&&
          page.type_of_training === formData.type_of_training&&
          page.semester === formData.semester
        ) || [];
      console.log('results', results);
      if (results.length > 0) {
        const markup = results.map((result) => searchResult(result));
        tbody.innerHTML = markup.join("");
      }
    });
  })();
});
