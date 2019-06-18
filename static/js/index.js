$(function () {

    // $.fn.DataTable.ext.pager.numbers_length = 3;


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
    }).DataTable({"pageLength": 10, "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]], "pagingType": "full"});

    $("button.conjugationModalTrigger").click(function(){
        var target = $(this).data("target");
        $("#" + target).modal("show");
    });

    $("#nounsTable").on("draw.dt", function(){
        removeStackableFromPagination();
    }).DataTable({
        "pageLength": 10, 
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]], 
        "pagingType": "full",
        "aoColumns": [{
            "sType": "noun",
            "bSortable": true
        },{
            "sType": "noun",
            "bSortable": true
        },{
            "sType": "noun",
            "bSortable": true
        }]
    });

    
    removeStackableFromPagination();


    jQuery.fn.dataTableExt.oSort["noun-desc"] = function (x, y) {
     
        return stripFirstWord(x) < stripFirstWord(y);
    };
     
    jQuery.fn.dataTableExt.oSort["noun-asc"] = function (x, y) {
            return stripFirstWord(x) > stripFirstWord(y);
    }
    
});

function stripFirstWord(sentence){
    var arrayOfStrings = sentence.split(" ");
    arrayOfStrings = arrayOfStrings.filter(function(entry) { return entry.trim() != ''; });
    arrayOfStrings.shift();
    return arrayOfStrings.join(" ");
}

