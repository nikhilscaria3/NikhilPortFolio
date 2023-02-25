$(document).ready(function () {
  $("#form1").validate({
    rules: {
      email: {
        required: true,
        minlength: 4
      }

    }

  })

})
