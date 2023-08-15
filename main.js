const form = document.travelForm;

form.addEventListener("submit", () => {
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.location.value;
    const diet = [];
    for (i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value);
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + diet)
});