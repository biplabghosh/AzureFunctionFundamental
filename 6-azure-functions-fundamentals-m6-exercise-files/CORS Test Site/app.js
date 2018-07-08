$(function() {
    $('#getCustomers').click(function() {
        let url = "https://pluralsightfuncs.azurewebsites.net/api/customers";
        $.getJSON(url, function(data) {
            var list = $("<ul/>")
            for (var n = 0; n < data.length; n++) {
                $("<li>"+ data[n].name +"</li>").appendTo(list);
            }
            list.appendTo("body");
        });
    });
});