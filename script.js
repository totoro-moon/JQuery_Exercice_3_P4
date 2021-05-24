$(document).ready(function () {
    $('#btn').click(function () {
        var regexLastName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
        var regexfirstName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖ][a-zàáâäãåąčćęèéêëėį']+([-][A-Z][a-z]+)?$/;
        var regexMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
        var regexPhoneNumber = /^(06|07)[0-9]{8}$/;
        if (regexLastName.test($('#lastName').val()) == false) {
            $('#lastName').css('border', '2px solid red');
        } else {
            $('#lastName').css('border', '2px solid green');
        }
        if (regexfirstName.test($('#firstName').val()) == false) {
            $('#firstName').css('border', '2px solid red');
        } else {
            $('#firstName').css('border', '2px solid green');
        }
        if (regexMail.test($('#mail').val()) == false) {
            $('#mail').css('border', '2px solid red');
        } else {
            $('#mail').css('border', '2px solid green');
        }
        if (regexPhoneNumber.test($('#phoneNumber').val()) == false) {
            $('#phoneNumber').css('border', '2px solid red');
        } else {
            $('#phoneNumber').css('border', '2px solid green');
        }
    });
});
