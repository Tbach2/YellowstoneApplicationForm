$(document).ready(function () {
    $("#progress1").hide();
    $("#progress2").hide();
    $("#progress3").hide();
    $("#experienceEdu-tab").hide();
    $("#generalInfo-tab").hide();
    $("#confirmation-tab").hide();
})
$("#workEligibilityRadioNo").on('click', function () {
    $("#workEligibilityCollapse").collapse('show');
    $("#experienceEduDivider1").hide();
})
$("#workEligibilityRadioYes").on('click', function () {
    $("#workEligibilityCollapse").collapse('hide');
    $("#experienceEduDivider1").show();
})
$("#previousEmployeeRadioYes").on('click', function () {
    $("#previousEmployeeCollapse").collapse('show');
    $("#generalInfoDivider1").hide();
})
$("#previousEmployeeRadioNo").on('click', function () {
    $("#previousEmployeeCollapse").collapse('hide');
    $("#generalInfoDivider1").show();
})
$("#relationParkRadioYes").on('click', function () {
    $("#relationParkCollapse1").collapse('show');
    $("#generalInfoDivider2").hide();
    $("#relationParkPlus1").show();
})
$("#relationParkRadioNo").on('click', function () {
    $("#relationParkCollapse1").collapse('hide');
    $("#relationParkCollapse2").collapse('hide');
    $("#relationParkCollapse3").collapse('hide');
    $("#generalInfoDivider2").show();
})
$("#relationParkPlus1").on('click', function () {
    $("#relationParkCollapse2").collapse('show');
    $("#relationParkPlus1").hide();
})
$("#relationParkPlus2").on('click', function () {
    $("#relationParkCollapse3").collapse('show');
    $("#relationParkPlus2").hide();
    $("#relationParkMinus2").hide();
})
$("#relationParkMinus2").on('click', function () {
    $("#relationParkCollapse2").collapse('hide');
    $("#relationParkPlus1").show();
})
$("#relationParkMinus3").on('click', function () {
    $("#relationParkCollapse3").collapse('hide');
    $("#relationParkPlus2").show();
    $("#relationParkMinus2").show();
})
$("#relationCompanyRadioYes").on('click', function () {
    $("#relationCompanyCollapse1").collapse('show');
    $("#generalInfoDivider3").hide();
    $("#relationCompanyPlus1").show();
})
$("#relationCompanyRadioNo").on('click', function () {
    $("#relationCompanyCollapse1").collapse('hide');
    $("#relationCompanyCollapse2").collapse('hide');
    $("#relationCompanyCollapse3").collapse('hide');
    $("#generalInfoDivider3").show();
})
$("#relationCompanyPlus1").on('click', function () {
    $("#relationCompanyCollapse2").collapse('show');
    $("#relationCompanyPlus1").hide();
})
$("#relationCompanyPlus2").on('click', function () {
    $("#relationCompanyCollapse3").collapse('show');
    $("#relationCompanyPlus2").hide();
    $("#relationCompanyMinus2").hide();
})
$("#relationCompanyMinus2").on('click', function () {
    $("#relationCompanyCollapse2").collapse('hide');
    $("#relationCompanyPlus1").show();
})
$("#relationCompanyMinus3").on('click', function () {
    $("#relationCompanyCollapse3").collapse('hide');
    $("#relationCompanyPlus2").show();
    $("#relationCompanyMinus2").show();
})
$("#housingRadioYes").on('click', function () {
    $("#housingCollapse").collapse('show');
    $("#generalInfoDivider4").hide();
})
$("#housingRadioNo").on('click', function () {
    $("#housingCollapse").collapse('hide');
    $("#generalInfoDivider4").show();
})
$("#housingRadioRvTrailer").on('click', function () {
    $("#rvTrailerCollapse").collapse('show');
})
$("#housingRadioDorm").on('click', function () {
    $("#rvTrailerCollapse").collapse('hide');
})
$("#nextBtn1").on('click', function () {
    $("#personalInfo-tab").hide();
    $("#experienceEdu-tab").show();
    $("#progress1").show();
    $('.nav-tabs a[href="#experienceEdu"]').tab('show');
    $('.nav-tabs a[href="#personalInfo"]').tab('hide');
})
$("#nextBtn2").on('click', function () {
    $("#generalInfo-tab").show();
    $("#experienceEdu-tab").hide();
    $("#progress2").show();
    $('.nav-tabs a[href="#generalInfo"]').tab('show');
    $('.nav-tabs a[href="#experienceEdu"]').tab('hide');
})
$("#nextBtn3").on('click', function () {
    $("#confirmation-tab").show();
    $("#generalInfo-tab").hide();
    $("#progress3").show();
    $('.nav-tabs a[href="#confirmation"]').tab('show');
    $('.nav-tabs a[href="#generalInfo"]').tab('hide');
})
$("#backBtn2").on('click', function () {
    $("#personalInfo-tab").show();
    $("#experienceEdu-tab").hide();
    $('.nav-tabs a[href="#personalInfo"]').tab('show');
    $('.nav-tabs a[href="#experienceEdu"]').tab('hide');
})
$("#backBtn3").on('click', function () {
    $("#experienceEdu-tab").show();
    $("#generalInfo-tab").hide();
    $('.nav-tabs a[href="#experienceEdu"]').tab('show');
    $('.nav-tabs a[href="#generalInfo"]').tab('hide');
})
$("#backBtn4").on('click', function () {
    $("#generalInfo-tab").show();
    $("#confirmation-tab").hide();
    $('.nav-tabs a[href="#generalInfo"]').tab('show');
    $('.nav-tabs a[href="#confirmation"]').tab('hide');
})
$("#submitBtn4").on('click', function () {
    alert("Your application was successfully");
})