


	function handleClicks(){
		//this function is used when analyze it button is clicked
		$('form').submit(function(event) {
			// I have to use .val() method to get value of the text
			
			event.preventDefault();
			var text = $('#user-text').val();
			var words = tokenizetext(text);
			var totalwordCount = words.length;
			console.log(totalwordCount);
			var unique = uniqueWordCount(words);
			console.log(unique);
			var avgLen = averageWordLength(words);
			console.log(avgLen);
			var avgSenLen = averageSentenceLength(text);
			console.log(avgSenLen);

			
			$(.js-text-report).removeClass('hidden');
		  	$(.js-text-report).find('.js-word-count').text("Word count:/n" totalwordCount);
		  	$(.js-text-report).find('.js-unique-word-count').text("Unique word count:/n"unique);
		  	$(.js-text-report).find('.js-average-word-length').text("Average word length:/n"avgLen);
		  	$(.js-text-report).find('js-average-sentence-length').text("Average sentence length:/n"avgSenLen);

		});
	}
	// function wordCount(wordText){
	// 	// this is a function to get the words count
	// 	var words = wordText.split(" ");
	// 	return words.length;
	// }
	function uniqueWordCount(words){
		//This function gets the unique words count.
		// words = ['the','brown','car','hit','the','red','car'];
		var uniqueWords = {};
		var count = 0;
		for (var i = 0; i < words.length; i++) {
			// words[0] = 'the', words[1] = 'brown'
			// uniqueWords[words[i]]
	  		if(words[i] in uniqueWords){
	  			uniqueWords[words[i]]++;
	  		} else {
	  			uniqueWords[words[i]] = 1;
	  			count++;
	  		}
	  	}
	  	console.log(uniqueWords);
	  	return count;

	}
	function averageWordLength(words){
		var total = 0;
	  	for (var i = 0; i < words.length; i++){
	    	total += words[i].length;
	  	}
	  var avgLen = total / words.length;
	  return avgLen;
	}

	function averageSentenceLength(text){
		var sentences = text.split(/[.?!]/);
		var total = 0;
	  	for (var i = 0; i < sentences.length; i++){
	    	total += sentences[i].length;
	  	}
	  	var avgLen = total / sentences.length;
	  	return avgLen;
	}

	function tokenizetext(text){
		return text.toLowerCase().split(/\W+/); // Regular expressions
	}

	$(document).ready(handleClicks);