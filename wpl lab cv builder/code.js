$("document").ready(function () {
    $("#d1").show()
    $("#d2").hide()
    $("#d3").hide()
    $("#d4").hide()
    $("#b1").show()
    var count = 0;
    $("#b1").click(function () {
        console.log("initial " + count)
        if (count == 0) {
            // $("#d1").show("slow")
            console.log("value enter")
            //data section
            var fname = $("#getFName").val();
            var address = $("#getAddress").val();
            var phone = $("#getPhone").val();
            var email = $("#getemail").val();
            $("#PutName").append(fname)
            $("#putAddress").append(address)
            $("#putPhoneNumber").append(phone)
            $("#email").append(email)
            console.log("something")
            console.log(fname, address, phone, email)
        }

        else if (count == 1) {

            //objective
            var objective = $("#getObjective").val();
            console.log(objective)
            $("#putObjective").append(objective)

        }

        //getting values from education section
        mSchool = $("#schoolName").val();
        mYear = $("#boardYear").val();
        mProgram = $("#bordProgram").val();
        iColName = $("#collageName").val();
        iYear = $("#collageYear").val();
        iProgram = $("#collageProgram").val();
        //putting values in cv

        $("#putSchName").append(mSchool)
        $("#putschYear").append(mYear)
        $("#putschPro").append(mProgram)
        $("#putColName").append(iColName)
        $("#putcolYear").append(iYear)
        $("#PutcolProName").append(iProgram)
        $("#schoolName").append(mSchool)
        $("#boardYear").append(mYear)
        $("#bordProgram").append(mProgram)
        $("#collageName").append(iColName)
        $("#collageYear").append(iYear)
        $("#collageProgram").append(iProgram)

        console.log("final " + count)

        if (count == 0) {
            $("#d1").hide("slow");
            $("#d2").show("slow");
            $("#makeHeading").hide("slow");
        }
        else if (count == 1) {
            $("#d2").hide("slow");
            $("#d3").show("slow");
        }
        else if (count == 2) {
            $("#d3").hide("slow");
            $("#d4").show("slow");
            $("#b1").hide()
        }
        else if (count == 1) {
            $("#d2").hide("slow");
            $("#d3").show("slow");
        }
        count++
    })
})