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

let doc = new _Document("Untitled Document");

function save() {
  doc.editTitle($("#title").value);
  doc.editContent($("#content").innerHTML);
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
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span style="color: ${$("#tcolor").value}">${s}</span>`);
}

function switchFont() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span style="font-family: ${$("#font").value}">${s}</span>`);
}

function switchFontSize() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span style="font-size: ${parseInt($("#fsize").value)}px;">${s}</span>`)
}

// Other functions
function toggleMode(params) {
  if($("#togglemode").value == "edit") {
    $("#content").setAttribute("contenteditable", "true");
  }
  else {
    $("#content").removeAttribute("contenteditable");
  }
}

// Keyboard shortcuts
document.onkeyup = (e) => {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
    alert(`Word count:\nWords: ${doc.content.split(" ").length}\nCharacters: ${doc.content.length}`);
  }
};
