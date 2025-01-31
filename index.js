document.querySelector(".icon-arrow").addEventListener("click", function () {

    const day = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;


    const errorDay = document.querySelector(".error-day");
    const errorMonth = document.querySelector(".error-month");
    const errorYear = document.querySelector(".error-year");

    
    const outputDay = document.querySelector(".output-day");
    const outputMonth = document.querySelector(".output-month");
    const outputYear = document.querySelector(".output-year");


    errorDay.style.display = "none";
    errorMonth.style.display = "none";
    errorYear.style.display = "none";


    let isValid = true;

    if (!day || isNaN(day) || day < 1 || day > 31) {
        errorDay.style.display = "block";
        errorDay.textContent = " Must be avalid day";
        isValid = false;
    }

    
    
    if (!month || isNaN(month) || month < 1 || month > 12) {
        errorMonth.style.display = "block";
        errorMonth.textContent = " Must be avalid year";
        isValid = false;
    }
    if (!year || isNaN(year) || year.length !== 4 || year > new Date().getFullYear()) {
        errorYear.style.display = "block";
        errorYear.textContent = " Must be avalid year";
        isValid = false;
    }

    if (!isValid) return;

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }


    document.querySelector(".output-year").textContent = ageYears;
    document.querySelector(".output-month").textContent = ageMonths;
    document.querySelector(".output-day").textContent = ageDays;
});
