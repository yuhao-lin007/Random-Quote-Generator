 $(document).ready(function(){
		var quoteSource=[
		{
			quote: "A crisis is an opportunity riding the dangerous wind.",
			name:"Chinese Proverb"
	    },
            {
			quote: "If I am walking with two other men, each of them will serve as my teacher.",
			name:"Confucius"
	    },
            {
			quote: "If you are patient in one moment of anger, you will escape a hundred days of sorrow.",
			name:"Chinese Proverb"
	    },
            {
			quote: "Care about what other people think and you will always be their prisoner.",
			name:"Lao Tzu"
	    },
            {
			quote: "The journey of a thousand miles begins with one step.",
			name:"Lao Tzu"
	    },
            {
			quote: "It does not matter how slowly you go as long as you do not stop.",
			name:"Confucius"
	    },
            {
			quote: "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
			name:"Confucius"
	    },
           ];
	    
		$('#quoteButton').click(function(evt){
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			evt.preventDefault();
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
            var newQuoteGenius = quoteSource[randomNumber].name;
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
		quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');

        quoteContainer.fadeIn(timeAnimation);
      });  
			
		}
	
	});
      
            });
