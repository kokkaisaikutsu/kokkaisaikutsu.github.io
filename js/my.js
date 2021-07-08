$(document).ready(function() {
    $('.collapsible').collapsible({
    });
});

$(".dropdown-trigger").dropdown({
    coverTrigger:false,
    constrainWidth:false
});

$(document).ready(function(){
    $('.tabs').tabs();
});

// $("#nav-50on-a").click(function(){
//     $.ajax("giin_a.html", {
//         timeout : 1000, // 1000 ms
//         datatype:'html'
//     }).then(function(data){
//         var out_html = $($.parseHTML(data));//parse
//         $('#page').empty().append(out_html.filter('#gaibu')[0].innerHTML);//insert
//     },function(jqXHR, textStatus) {
//         if(textStatus!=="success") {
//             var txt = "<p>textStatus:"+ textStatus + "</p>" +
//                 "<p>status:"+ jqXHR.status + "</p>" +
//                 "<p>responseText : </p><div>" + jqXHR.responseText +
//                 "</div>";
//             $('#page').html(txt);
//         }
//     })
// })
