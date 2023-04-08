var form = document.getElementById("form-id");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      window.open("https://pay.kiwify.com.br/387R7sh");
    }
  };
  var data = new FormData(form);
  xhr.send(new URLSearchParams(data).toString());
});