$(document).ready(function(){

    $("#formulaire").validate({
        rules: {
            "user[nom]": {
                required: true,
                minlength: 2,
                maxlength: 23
            },
            "user[prenom]": {
                required: true,
                minlength: 2,
                maxlength: 23
            },
            "user[email]": {
                required: true,
                minlength: 2,
                maxlength: 23,
                email: true
            },
            "user[url]": {
                required: true,
                minlength: 2,
                maxlength: 33,
                url: true
            },
            "user[comment]": {
                required: true,
                minlength: 2,
                maxlength: 250
            }
        },
        messages: {
            "user[nom]": {
                required: "Le nom est requis.",
                minlength: jQuery.format("Votre nom doit faire au moins ({0}) caractères!"),
                maxlength: jQuery.format("Votre nom ne doit pas dépasser ({0}) caractères!")
            },
            "user[prenom]": {
                required: "Le prenom est requis.",
                minlength: jQuery.format("Votre prénom doit faire au moins ({0}) caractères!"),
                maxlength: jQuery.format("Votre prénom ne doit pas dépasser ({0}) caractères!")
            },
            "user[email]": {
                required: "L'email est requis.",
                minlength: jQuery.format("Votre email doit faire au moins ({0}) caractères!"),
                maxlength: jQuery.format("Votre email ne doit pas dépasser ({0}) caractères!"),
                email: jQuery.format("Veuillez entrer un email valide!")
            },
            "user[url]": {
                required: "L'url est requis.",
                minlength: jQuery.format("Votre url doit faire au moins ({0}) caractères!"),
                maxlength: jQuery.format("Votre url ne doit pas dépasser ({0}) caractères!"),
                url: jQuery.format("Veuillez entrer un url valide!")
            },
            "user[comment]": {
                required: "La description est requise.",
                minlength: jQuery.format("Votre description doit faire au moins ({0}) caractères!"),
                maxlength: jQuery.format("Votre description ne doit pas dépasser ({0}) caractères!")
            }
        }
    })

    $('#sujet').change(function() {
        if ($('#sujet').val() == 01) {
            $('.description').show();
            $('.commande').hide();
        } else if ($('#sujet').val() == 02) {
            $('.commande').show();
            $('.description').hide();
        }
    })
})
;
