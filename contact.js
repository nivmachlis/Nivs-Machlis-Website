function sendEMail() {

    //getting values from input fields

    var sender = Form.user_email.value;

    var password = Form.password.value;

    var receiver = "nivmachliss@gmail.com";

    var content = Form.user_name + " " + Form.user_message.value;


    //Sending email

    Email.send({

        Host: "smtp.gmail.com",

        Username: sender,

        Password: password,

        To: receiver,

        From: sender,

        Subject: "Email from Niv's Site",

        Body: content,

    }).then(function(message) {

        alert("Email sent successfully")

    });

}