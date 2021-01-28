$(document).ready(function () {
  /* Валидация ---------------------------------------*/
  var x = {
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        // minlength: 18
      },
      checkbox: {
        required: true,
      },
      email: {
        required: true,
      },
    },
    errorPlacement: function (error, element) {},
  };
  $("#ctaForm").validate(x);
});

// $('[type="submit"]').on('click', function() {
$('input[type="checkbox"]').on("click change", function () {
  var thisInp = $(this);
  inputId = thisInp.attr("id");

  if (thisInp.prop("checked") == false) {
    thisInp.addClass("error");
  } else {
    thisInp.removeClass("error");
  }

  if ($("#" + inputId).hasClass("error") == true) {
    $("label[for=" + inputId + "]").addClass("label-error");
  }
  if ($("#" + inputId).hasClass("error") != true) {
    $("label[for=" + inputId + "]").removeClass("label-error");
  }
});

// mask for phone
$('input[type="tel"]').mask("9 (999) 999999?999");
$('input[type="tel"]').on("change focus click", function () {
  $(this)[0].setSelectionRange(0, 0);
});
