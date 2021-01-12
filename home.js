$(document).ready(function () {
        
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    });

    var contactClicked = false;

    var tw = document.getElementById('typewriter');

    var typewriter = new Typewriter(tw, {
        cursor: "_",
        devMode: true,
        delay: 50,
    });
    

    $("#about").hover(function () {
        console.log("hovering: about");

        if(!contactClicked)
        {
            typewriter.typeString('about')
                .start();
        }
    },
    function() {
        console.log("unhover: about");
        
        if(!contactClicked)
        {
            typewriter.deleteAll()
                .start();
        }
    });

    $(".nav-link-typewriter").click(function () {
        console.log("clicked: navbar-link");

        typewriter.deleteAll().start();

        setTimeout(function(){
            $("#typewriter").css({"color" : "#000000"});
        }, 600);
    });

    $("#projects").hover(function () {
        console.log("hovering: projects");

        if(!contactClicked)
        {
            typewriter.typeString('<span style = "color: #ffffff; background-color: #000000; margin-left: -5px; padding-left: 5px; padding-right: 5px; padding-bottom: 2px;">projects</span>')
                .start();
        }
    },
    function() {
        console.log("unhover: projects");
        
        if(!contactClicked)
        {
            typewriter.deleteAll()
                .start();
        }
    });

    $("#dream").hover(function () {
        console.log("hovering: dream");

        if(!contactClicked)
        {
            $("#typewriter").css({"color" : "#6a3eff"});
            typewriter.typeString('<span style = "-webkit-text-fill-color: transparent; -moz-text-fill-color: transparent; background-image: linear-gradient(to right,#6442ff,#9012fe 100%); -webkit-background-clip: text; -moz-background-clip: text; margin-left: -3px;">dream</span>')
                .start();
        }
    },
    function() {
        console.log("unhover: dream");
        
        if(!contactClicked)
        {
            typewriter.deleteAll()
            .start();
        
            setTimeout(function(){
                $("#typewriter").css({"color" : "#000000"});
            }, 600);
        }
        
    });
    
    $("#contact").hover(function () {
        console.log("hovering: contact");

        if(!contactClicked)
        {
            typewriter.typeString('<span style = "margin-left: -3px;">contact</span>')
                .start();
        }
    },
    function() {
        console.log("unhover: contact");

        if(!contactClicked)
        {
            typewriter.deleteAll()
                .start();
        }
    });


    //copy with get in touch button

    var clipboard = new ClipboardJS('#contact');
    

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();

        if (!contactClicked){
            typewriter.changeDelay(20).deleteAll(20)
            .start();
        
            typewriter.typeString('<span style = "background-color: #fff200; margin-left: -145px; padding-left: 5px; padding-right: 5px; padding-bottom: 2px; font-size: 20px;">my email has been copied to your clipboard</span>')
                .changeDelay(50).start();

            contactClicked = true;
            $(".by-kyle-li").css({"opacity":"0"});
            $(".button").css({"display":"block"});

            setTimeout(function(){
                $(".button").css({"opacity":"1", "margin-top":"-4px"});
            }, 900);
        }
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);

        if (!contactClicked){
            typewriter.changeDelay(20).deleteAll()
            .start();
            
            typewriter.typeString('<span style = "background-color: #fff200; margin-left: -90px; padding-left: 5px; padding-right: 5px; padding-bottom: 2px; font-size: 20px;">my email is kyleli2@illinois.edu</span>')
                .start();

            contactClicked = true;
            $(".by-kyle-li").css({"opacity":"0"});
            $(".button").css({"display":"block"});

            setTimeout(function(){
                $(".button").css({"opacity":"1", "margin-top":"-4px"});
            }, 900);
        }
    });




    document.querySelectorAll('.button').forEach(button => {

        let getVar = variable => getComputedStyle(button).getPropertyValue(variable);
    
        button.addEventListener('click', e => {
    
            if(!button.classList.contains('active')) {
    
                button.classList.add('active');
    
                gsap.to(button, {
                    keyframes: [{
                        '--left-wing-first-x': 50,
                        '--left-wing-first-y': 100,
                        '--right-wing-second-x': 50,
                        '--right-wing-second-y': 100,
                        duration: .2,
                        onComplete() {
                            gsap.set(button, {
                                '--left-wing-first-y': 0,
                                '--left-wing-second-x': 40,
                                '--left-wing-second-y': 100,
                                '--left-wing-third-x': 0,
                                '--left-wing-third-y': 100,
                                '--left-body-third-x': 40,
                                '--right-wing-first-x': 50,
                                '--right-wing-first-y': 0,
                                '--right-wing-second-x': 60,
                                '--right-wing-second-y': 100,
                                '--right-wing-third-x': 100,
                                '--right-wing-third-y': 100,
                                '--right-body-third-x': 60
                            })
                        }
                    }, {
                        '--left-wing-third-x': 20,
                        '--left-wing-third-y': 90,
                        '--left-wing-second-y': 90,
                        '--left-body-third-y': 90,
                        '--right-wing-third-x': 80,
                        '--right-wing-third-y': 90,
                        '--right-body-third-y': 90,
                        '--right-wing-second-y': 90,
                        duration: .2
                    }, {
                        '--rotate': 50,
                        '--left-wing-third-y': 95,
                        '--left-wing-third-x': 27,
                        '--right-body-third-x': 45,
                        '--right-wing-second-x': 45,
                        '--right-wing-third-x': 60,
                        '--right-wing-third-y': 83,
                        duration: .25
                    }, {
                        '--rotate': 55,
                        '--plane-x': -8,
                        '--plane-y': 24,
                        duration: .2
                    }, {
                        '--rotate': 40,
                        '--plane-x': 45,
                        '--plane-y': -180,
                        '--plane-opacity': 0,
                        duration: .3,
                        onComplete() {
                            setTimeout(() => {
                                button.removeAttribute('style');
                                gsap.fromTo(button, {
                                    opacity: 0,
                                    y: -8
                                }, {
                                    opacity: 1,
                                    y: 0,
                                    clearProps: true,
                                    duration: .3,
                                    onComplete() {
                                        button.classList.remove('active');
                                        contactClicked = false;
                                        $(".by-kyle-li").css({"opacity":"1"});
                                    }
                                    
                                })
                            }, 1900)

                            typewriter.deleteAll(40)
                                .start();
                        }
                    }]
                })
    
                gsap.to(button, {
                    keyframes: [{
                        '--text-opacity': 0,
                        '--border-radius': 0,
                        '--left-wing-background': getVar('--primary-darkest'),
                        '--right-wing-background': getVar('--primary-darkest'),
                        duration: .1
                    }, {
                        '--left-wing-background': getVar('--primary'),
                        '--right-wing-background': getVar('--primary'),
                        duration: .1
                    }, {
                        '--left-body-background': getVar('--primary-dark'),
                        '--right-body-background': getVar('--primary-darkest'),
                        duration: .4
                    }, {
                        '--success-opacity': 1,
                        '--success-scale': 1,
                        duration: .25,
                        delay: .25
                    }]
                })
    
            }
    
        })
    
    });
});