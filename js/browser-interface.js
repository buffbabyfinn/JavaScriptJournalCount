var entryCount = require('./../js/entry-count.js').entryCount;
var moment = require('moment');

$(document).ready(function(){
  $('#journalEntries').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var date = moment().format("MMM Do YY");
    var count = entryCount(entry);

    $('#journalEntries').hide();
    $('#displayCount').prepend('Your entry has '+ count + ' words.');
    $('#displayEntries').prepend('<li>' + date + ', ' + title + ', ' + entry + '</li>');
    });
  });
