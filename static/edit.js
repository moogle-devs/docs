function $(q) {
  return document.querySelector(q);
}

class _Document { // The underscore is required because `Document` is reserved by JS
  constructor(title) {
    this.title = title;
    this.content = "";
  }
  editTitle(title) {
    this.title = title;
  }
  editContent(content) {
    this.content = content;
  }
}

let doc = new _Document("Untitled document");

function save() {
  doc.editTitle($("#title").value);
  doc.editContent($("#content").value);
}

// Formatting functions
function bold() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<b>${s}</b>`);
}

function italic() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<em>${s}</em>`);
}

function underline() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span class="underline">${s}</span>`);
}

function switchColor() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span style="color: ${$("#tcolor").value}">${s}</span>`)
}
