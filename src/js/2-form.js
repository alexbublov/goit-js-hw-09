const form = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: '',
};

const fillFormData = () => {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData = parsedData;

        Object.keys(parsedData).forEach(key => {
            form.elements[key].value = parsedData[key];
        })
    }
};
fillFormData();

form.addEventListener('input', ({ target: formFieldEl }) => {
    formData[formFieldEl.name] = formFieldEl.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (Object.values(formData).includes('')) {
        alert('Please fill in all fields before submitting the form.');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';

});