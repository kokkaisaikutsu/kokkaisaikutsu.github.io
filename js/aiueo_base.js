$("#$$member_unicode$$_collapsible-header").click(function(){
    $('#$$member_unicode$$_collapsible-body').empty().append(
        "<div class='row'>" +
        " <div class='col s12 m12 l12 xl8'>" +
        "  <a href='giin/$$member_unicode$$.html'>" +
        "   <img src='giin/$$wordcloud_img$$.png' class='responsive-img'>" +
        "  </a>" +
        " </div>" +
        " <div class='col s12 m12 l12 xl4'>" +
        "  <div class='row indigo lighten-5 valign-wrapper margin-1 padding-5'>" +
        "   <div class='col s1 m1 l1'><i class='material-icons'>weekend</i></div>" +
        "   <div class='col s5 m4 l4 left-align'>役職</div>" +
        "   <div class='col s6 m7 l7 left-align'>$$position$$</div>" +
        "  </div>" +
        " </div>" +
        "</div>"
    )
    // $.ajax("giin/$$member_unicode$$.html", {
    //     timeout : 1000, // 1000 ms
    //     datatype:'html'
    // }).then(function(data){
    //     var out_html = $($.parseHTML(data));//parse
    //     $('#$$member_unicode$$_collapsible-body').empty().append(
    //         "<div class='row'>" +
    //         "<div class='col s12 m12 l9'>" +
    //         "<a href='giin/$$member_unicode$$.html'>" +
    //         "<img src='giin/$$wordcloud_img$$.png' class='responsive-img'>" +
    //         "</a>" +
    //         "</div></div>"
    //         // "<div class='col s12 m12 l3'>" +
    //         // out_html.find("#giin-word-list").html() +
    //         // "</div>"
    //     )
    // },function(jqXHR, textStatus) {
    //     if(textStatus!=="success") {
    //         var txt = "<p>textStatus:"+ textStatus + "</p>" +
    //             "<p>status:"+ jqXHR.status + "</p>" +
    //             "<p>responseText : </p><div>" + jqXHR.responseText +
    //             "</div>";
    //         $('#page').html(txt);
    //     }
    // })
})

