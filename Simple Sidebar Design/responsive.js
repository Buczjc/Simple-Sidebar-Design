let sidebar = $(".sidebar-container");
let close_sidebar = $(".close-sb");
let open_sidebar = $(".fa-bars");

$(document).ready(function () {
  close_sidebar.click(function () {
    sidebar.hide();
    open_sidebar.show();
  });
  open_sidebar.click(function () {
    sidebar.show();
    open_sidebar.hide();
  });
});
