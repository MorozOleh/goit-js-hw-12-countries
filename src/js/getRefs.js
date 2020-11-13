//this files are for refs of selectors;))
getRefs().body.innerHTML = '<div class="wrapper"><input type="text" class="form-control" name="query" /><div class="card"></div></div>'

export default function getRefs() {
  return {
    body: document.querySelector('body'),
    form: document.querySelector('.form-control'),
    card: document.querySelector('.card'),
  }
}



