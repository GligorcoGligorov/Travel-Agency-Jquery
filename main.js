$(document).ready(function(){

    $("#hi").hover(function(){
        $(this).css("cursor", "pointer")
        $(this).css("scale", "1.1")
        $(this).css("background-color","rgb(255, 255, 255, 0.5)")

    })

    $("#hi").mouseleave(function () {
        $(this).css("cursor", "pointer")
        $(this).css("scale", "")
        $(this).css("background-color", "rgb(255, 255, 255, 0.3)")


    })

    $("#btn-start").hover(function () {
        $(this).css("cursor", "pointer")
        $(this).css("background", "orange")

    })

    $("#btn-start").mouseleave(function () {
        $(this).css("background", "")

    })

    $("#btn-start").click(function(){
        $("#main-hi").fadeOut("slow", function(){
            $(this).remove();
            $(".main").show()
        })
        
    })
    $(".places").hover(function(){
        $(this).css("cursor", "pointer")
        $(this).css("scale", "1.1")

    })

    $(".places").mouseleave(function () {
        $(this).css("cursor", "")
        $(this).css("scale", "")

    })

    let id = -1;
    $(".v-list .places").click(function(){
        $(".v-list").hide();
   
        id = $(this).attr("title");
        $("#place" + id).show()
        $("#place" + id).css("display", "flex");
        $(".buttons").show()
    })

    $(".buttons button").hover(function(){
        $(this).css("background", "orange")
        $(this).css("cursor", "pointer")

    })

    $(".buttons button").mouseleave(function () {
        $(this).css("background", "")
        $(this).css("cursor", "")

    })

    $("#btnBack").click(function(){
        $(".display").hide()
        $(".v-list").show();
        
        $(".buttons").hide();
    })

    $("#btnRight").click(function(){
        id++;

        if(id > 6){
            id = 1;
        }
        $(".display").hide();

        $("#place" + id).show();
        $("#place" + id).css("display", "flex");

    })

    $("#btnLeft").click(function () {
        id--;

        if (id < 1) {
            id = 6;
        }
        $(".display").hide();

        $("#place" + id).show();
        $("#place" + id).css("display", "flex");


    })

    $(".btnBook").hover(function () {
        $(this).css("cursor", "pointer")
        $(this).css("background", "orange")
        $(this).css("scale", "1.1")

    })

    $(".btnBook").mouseleave(function () {
        $(this).css("cursor", "")
        $(this).css("scale", "")
        $(this).css("background", "")


    })

    $(".btnBook").click(function(){
        $("#dialog").dialog("open");

    })
    $("#dialog").dialog({
        title: "BOOK YOUR TRIP",
        autoOpen: false,
        modal: true,
        show: "blind",
        hide: "explode",
        buttons: {
            Submit: function () {
                $("#dialog").dialog("close");
                add()
            }
        }
    })

    function add(){
        let ime = $("#ime").val()
        
        let ul = $("#list");
        ul.append("<li>"+ime+"</li>")


        $("#ime").val("")

    }

    $("#dialog2").dialog({
        title: "YOUR LIST",
        autoOpen: false,
        modal: true,
        show: "blind",
        hide: "explode",
        buttons: {
            Back: function () {
                $("#dialog2").dialog("close");
            }
        }
    })

    $("#btnList").click(function(){
        $("#dialog2").dialog("open");

    })

    




})