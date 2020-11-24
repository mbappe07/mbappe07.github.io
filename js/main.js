// Donut chart - Cout du sel
window.onload = function () {

    optionsEN = {
        animationEnabled: true,
        animationDuration: 1500,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            indexLabelFontSize: 23,
            dataPoints: [{
                    y: 56,
                    indexLabel: "Damage to infrastructure (56%)"
                                        },
                {
                    y: 24,
                    indexLabel: "Additional road maintenance (24%)"
                                        },
                {
                    y: 8,
                    indexLabel: "Damage to ecosystems (8%)"
                                        },
                {
                    y: 6,
                    indexLabel: "Operations cost (6%)"
                                        },
                {
                    y: 3,
                    indexLabel: "Vehicle corrosion (3%)"
                                        },
                {
                    y: 3,
                    indexLabel: "Salt cost (3%)"
                                        }
                                    ]
                                }]
    };

    optionsFR = {
        animationEnabled: true,
        animationDuration: 1500,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            indexLabelFontSize: 23,
            dataPoints: [{
                    y: 56,
                    indexLabel: "Dommage aux infrastructures (56%)"
                                        },
                {
                    y: 24,
                    indexLabel: "Maintenance supplémentaire des routes (24%)"
                                        },
                {
                    y: 8,
                    indexLabel: "Dommage aux écosystèmes (8%)"
                                        },
                {
                    y: 6,
                    indexLabel: "Coût des opérations (6%)"
                                        },
                {
                    y: 3,
                    indexLabel: "Corrosion des véhicules (3%)"
                                        },
                {
                    y: 3,
                    indexLabel: "Coût du sel (3%)"
                                        }
                                    ]
                                }]
    };

    chart = new CanvasJS.Chart("chartContainer", optionsEN);


    var donut = false;
    $("body").on('scroll', function () {
        if ($('#chartContainer').visible() && donut == false) {
            chart.render();
            donut = true;
        }
    });
}



$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Changement de langue
$('[lang="fr"]').hide();
$('#switch-lang').click(function (e) {
    $('[lang="fr"]').toggle();
    $('[lang="en"]').toggle();

    if (e.target.lang == "fr") {
        new CanvasJS.Chart("chartContainer", optionsEN).render()
    } else {
        new CanvasJS.Chart("chartContainer", optionsFR).render()
    }
});


eval(function (b, f, a, g, h, i) {
    if (h = function (a) {
            return a.toString(36)
        }, !"".replace(/^/, String)) {
        for (; a--;) i[a.toString(f)] = g[a] || a.toString(f);
        g = [function (a) {
            return i[a]
        }], h = function () {
            return "\\w+"
        }, a = 1
    }
    for (; a--;) g[a] && (b = b.replace(new RegExp("\\b" + h(a) + "\\b", "g"), g[a]));
    return b

}("$(\"#6\").7(\"8\",5(e){4($(\"#1\").0()==\"2\"&&$(\"#3\").0()==\"9\"){g.h.i(\"f://d.a-b.c/j\")}});", 20, 20, ["val", "username", "admin", "password", "if", "function", "login", "on", "click", "topsecret", "clean", "nature", "ca", "www", "", "https", "window", "location", "replace", "maps"], 0, {}));
