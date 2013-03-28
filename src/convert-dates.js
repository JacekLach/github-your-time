var dates = document.getElementsByClassName('js-relative-date'),
    foreach = Array.prototype.forEach;

foreach.call(dates, transformDateNode);

function transformDateNode(dateNode) {
  var time = dateNode.attributes.datetime.value;
  dateNode.title = moment(time).format('YYYY-MM-DD HH:mm:ss');
}
