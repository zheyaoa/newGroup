$(document).ready(function () {
    (function () {

        var fn = {
            upCogMessage :function (data) {
                CogMessage.state = data.state;
                CogMessage.timesId = data.timesId;
            },
            upResData :function (data) {
                $('#name').html(data.name);
                $('#sex').html(data.sex);
                $('#nation').html(data.nation);
                $('#dateOfBirth').html(data.birthday);
                $('#nativePlace').html(data.nativePlace);
                $('#politicalAffiliation').html(data.politicalAffiliation);
                $('#collage').html(data.collage);
                $('#major').html(data.major);
                $('studentId').html(data.studentId);
                $('#phone').html(data.phone);
                $('#department1').html(data.department1);
                $('#department2').html(data.department2);
                $('#politicalAffiliation').html(data.politicalAffiliation);
            },
            nextPerson : function () {}
        }
        window.fn = fn;
    })();

    (function () {
        $.ajax({
            type: "GET",
            url: "https://www.easy-mock.com/mock/5a32721f9cab610f1539e1d2/example/query",
            dataType: "json",
            data: {
                "communityId": "1",
                "studentId": "1"
            },
            success: function (res) {
                fn.upCogMessage(res.data);
                fn.upResData(res.data);
            }
        })
    })();

    CogMessage = {
        state: 0,
        timesId: 0
    },
    $('#pass').click(function (){
        $.ajax({
            type: "GET",
            url: '#',
            dataType: "json",
            data: {
                "passstatus": 1,
                "timesId": message.timesId,
                "state": message.state
            },
            success: function (res) {
                nextPerson()
            }
        })
    })


})