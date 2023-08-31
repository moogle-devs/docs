function $(q) {
  return document.querySelector(q);
}

class _Document { // The underscore is required because `Document` is reserved by JS
  constructor(title) {
    this.title = title;
    this.content = "";
    this.variables = {};
  }
  editTitle(title) {
    this.title = title;
  }
  editContent(content) {
    this.content = content;
  }
  editVariable(name, value) {
    this.variables[name] = value;
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

function strikethrough() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span class="strikethrough">${s}</span>`)
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

function switchBackgroundColor() {
  let s = window.getSelection().toString();
  $("#content").innerHTML = $("#content").innerHTML.replace(s, `<span style="background-color: ${$('#bcolor').value};">${s}</span>`);
}

// Option dropdowns
function execToolsBar() {
  switch($("#tools-bar").value) {
    case "word-count":
      wordCount();
      break;
    case "variables":
      variables();
      break;
  }
  $("#tools-bar").value = "tools";
}

function execFormatBar() {
  switch($("#format-bar").value) {
    case "text":
      textOptions();
      break;
  }
  $("#format-bar").value = "format";
}

// Other functions
function toggleMode() {
  if($("#togglemode").value == "edit") {
    $("#content").setAttribute("contenteditable", "true");
  }
  else {
    $("#content").removeAttribute("contenteditable");
  }
}

function wordCount() {
  alert(`Word count:\nWords: ${doc.content.split(" ").length}\nCharacters: ${doc.content.length}`);
}

function variables() {
  let varDialog = prompt("Variables\nType 'create' to create a variable");
  if (varDialog.toLowerCase() === "create") {
    let varName = prompt("Variable Name:");
    if (varName != null) {
      let varValue = prompt("Variable Value:");
      if(varValue != null) {
        doc.editVariable(varName, varValue);
      }
    }
  }
}

function showHideMenu() {
  if($("#menu").hasAttribute("hidden")) {
    $("#menu").removeAttribute("hidden");
  }
  else {
    $("#menu").setAttribute("hidden", "true");
  }
}

function textOptions() {
  let TODialog = prompt("Type `bold`, `italic`, `underline`, or `strikethrough`:");
  if(TODialog != null) {
    switch(TODialog) {
      case "bold":
        bold();
        break;
      case "italic":
        italic();
        break;
      case "underline":
        underline();
        break;
      case "strikethrough":
        strikethrough();
        break;
      default:
        alert("You did not enter a valid option.");
        break;
    }
  }
}

// Keyboard shortcuts
document.addEventListener('keyup', (e) => {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 191) {
    alert("Keyboard shortcuts:\nWord count: [Ctrl][Shift][C]")
  } else if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
    wordCount();
  } else if (e.ctrlKey && e.shiftKey && e.keyCode == 70) {
    showHideMenu();
  } else if (e.altKey && e.shiftKey && (e.keyCode == 53 || e.keyCode == 101)) {
    strikethrough();
  }
});
