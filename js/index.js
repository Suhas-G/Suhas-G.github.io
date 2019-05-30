$(function () {


    var waitForEl = function (selector, callback) {
        if (jQuery(selector).length) {
            callback();
        } else {
            setTimeout(function () {
                waitForEl(selector, callback);
            }, 100);
        }
    };

    var removeStackableFromPagination = function(){
        waitForEl(".dataTables_paginate .pagination", function(){
            $(".dataTables_paginate .pagination").removeClass("stackable");
            $(".dataTables_paginate .pagination").addClass("p-0");
        });
    }


    $('.ui.menuDropdown')
        .dropdown();
    $('.ui.accordion')
        .accordion();

    $("#verbsTable").on("draw.dt", function(){
        removeStackableFromPagination();
    }).DataTable({"pageLength": 10, "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]]});

    
    removeStackableFromPagination();
    
});

