function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#contacts").submit(function(event) {
    event.preventDefault();

    var inputFirst = $("input#first").val();
    var inputLast = $("input#last").val();

    var newContact = new Contact(inputFirst, inputLast);

    $("ul#output").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#first").val("");
    $("input#last").val("");

    $("#output").last().click(function() {
      $(".show-contact").show();
      $(".show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

  });
  });
});
