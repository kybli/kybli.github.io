$(document).ready(function () {
        
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    });


    var tw = document.getElementById('typewriter');

    var typewriter = new Typewriter(tw, {
        cursor: "_",
        devMode: true
    });
    

    $("#about").hover(function () {
        console.log("hovering: about");
        typewriter.typeString('about')
            .start();
    },
    function() {
        console.log("unhover: about");
        typewriter.deleteAll()
            .start();
    });

    $("#projects").hover(function () {
        console.log("hovering: projects");
        typewriter.typeString('<span style = "color: #ffffff; background-color: #000000; margin-left: -5px; padding-left: 5px; padding-right: 5px; padding-bottom: 2px;">projects</span>')
            .start();
    },
    function() {
        console.log("unhover: projects");
        typewriter.deleteAll()
            .start();
    });

    $("#dream").hover(function () {
        console.log("hovering: dream");
        $("#typewriter").css({"color" : "#6a3eff"});
        typewriter.typeString('<span style = "-webkit-text-fill-color: transparent; -moz-text-fill-color: transparent; background-image: linear-gradient(to right,#6442ff,#9012fe 100%); -webkit-background-clip: text; -moz-background-clip: text;">dream</span>')
            .start();
    },
    function() {
        console.log("unhover: dream");
        typewriter.deleteAll()
            .start();
        
        setTimeout(function(){
            $("#typewriter").css({"color" : "#000000"});
        }, 600);
    });
    
    $("#contact").hover(function () {
        console.log("hovering: contact");
        typewriter.typeString('contact')
            .start();
    },
    function() {
        console.log("unhover: contact");
        typewriter.deleteAll()
            .start();
    });


    //copy with get in touch button
    
    var clipboard = new ClipboardJS('#contact');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });


});