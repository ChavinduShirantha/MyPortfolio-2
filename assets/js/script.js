let contents = ["Software Engineering Student ", "Web Developer ", "Web Designer ", "Full Stack Developer "];

let charCount = 0;

let wordCount = 0;

setInterval(function () {
    animateText();
}, 400);

function animateText() {

    let content = contents[wordCount].substring(0, charCount) + "|";

    $("#content").text(content);

    charCount++;

    if (charCount === contents[wordCount].length) {

        charCount = 0;

        wordCount++;

        if (wordCount === contents.length) {

            wordCount = 0;

        }

    }

}

function aos_init() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

window.addEventListener('load', () => {
    aos_init();
});

(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

$(document).ready(function () {
    $("#homeBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#homeBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#aboutBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#aboutBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#contactBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#serviceBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#projectBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#projectBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#skillBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});

$("#skillBtn").click(function () {
    $("#homeBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#aboutBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#contactBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#serviceBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
    $("#skillBtn>a").css({
        "color": "#0dcaf0",
        "font-weight": 500,
        "scale": "110%",
    });
    $("#projectBtn>a").css({
        "color": "#ffffff",
        "font-weight": 400,
        "scale": "100%",
    });
});


jQuery(function ($) {
    // Show or hide the sticky footer button
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll-to-top").fadeIn(200);
        } else {
            $(".scroll-to-top").fadeOut(200);
        }
    });

    // Animate the scroll to top
    $(".scroll-to-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
        $("#homeBtn>a").css({
            "color": "#0dcaf0",
            "font-weight": 500,
            "scale": "110%",
        });
        $("#aboutBtn>a").css({
            "color": "#ffffff",
            "font-weight": 400,
            "scale": "100%",
        });
        $("#contactBtn>a").css({
            "color": "#ffffff",
            "font-weight": 400,
            "scale": "100%",
        });
        $("#serviceBtn>a").css({
            "color": "#ffffff",
            "font-weight": 400,
            "scale": "100%",
        });
        $("#projectBtn>a").css({
            "color": "#ffffff",
            "font-weight": 400,
            "scale": "100%",
        });
        $("#skillBtn>a").css({
            "color": "#ffffff",
            "font-weight": 400,
            "scale": "100%",
        });
    });
});

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")

    loader.style.display = 'none';
});

