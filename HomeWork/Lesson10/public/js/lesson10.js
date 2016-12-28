$(document).ready(function(){
  $.ajax({
    url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.pravda.com.ua%2Frss%2F',
    type: 'GET',
    datatype: 'json',
    success: function (data) {

      // Output li into Title list
      // Create string of items
      var words = "";
      $.each(data.items, function(index, value){
        $("<li>")
          .append(value.title)
          .appendTo("#ul-titles");
        words = words+value.title+" ";
      });
      //words = words.toLowerCase();

      // Transform string of words to array
      var arrWords = words.split(/[^a-zа-яё'єії]+/gim);
      var l = --arrWords.length;
      arrWords.sort();

      // Create array unique words
      // and array count of there reduplication
      var unique = [arrWords[0]];
      var count = [1];
      var j = 1;
      for (var i = 1; i < l; i++){
        if (arrWords[i] == arrWords[i-1]){
          count[j-1]++;
        }
        else {
          unique[j] = arrWords[i];
          count[j] = 1;
          j++;
        }
      }

      // Top words that are repeated many times
      var max; // Max repeat count
      var index; // Index of word with max count
      for (i = 0; i < 5; i++){
        max = Math.max.apply(null,count);
        index = count.indexOf(max);
        $("<li>")
          .append(max+" times repeated: "+unique[index])
          .appendTo("#ul-count");
        count[index] = 0;
      }

      // Sort array Unique in length of words
      function compareWords(a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
      }

      unique.sort(compareWords);
      for (i = 0; i < 5; i++){
        $("<li>")
          .append(unique[i])
          .appendTo("#ul-short");
      }

      unique.reverse();
      for (i = 0; i < 5; i++){
        $("<li>")
          .append(unique[i])
          .appendTo("#ul-long");
      }

    },
    error: function (err) {
      alert('Something went wrong');
    }
  });
});
