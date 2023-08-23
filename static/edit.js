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
  doc.editTitle(document.getElementById("title").value);
  doc.editContent(document.getElementById("content").value);
}
