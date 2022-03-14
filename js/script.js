$(document).ready(function () {
  $(".icon").click(function () {
    $(this).find(".design-image").toggle();
    $(this).find(".hidden-p").toggle();
  });
  $(".column").hover(function () {
    $(this).find(".overlay-text").toggle();
  });
  $("form").submit(function (e) {
    e.preventDefault();
    let userName = $("#name").val();
    alert(
      userName +
        " We have received your message. Thank you fro reaching out to us. "
    );
  });
});
