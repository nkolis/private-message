const base_url = 'http://13.250.204.122:5000/messages';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          
          const message = form.querySelector("#message");
          const body = { message: message.value.trim()};
          addMessages(base_url, body);
          alert("Pesanmu terkirim :)");
          
        }
        form.classList.add('was-validated')
        
      }, false)
    })
})()

const addMessages = async (url, data = {}) => {

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return res.json();
}

