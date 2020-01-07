
$("#submit").on("click", function(event){

    var userInfo = {
        name: $("#first-name").val().trim(),
        scores: []
    };
        
    event.preventDefault();
    
    userInfo.scores.push(parseInt($('input[name=Q1]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q2]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q3]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q4]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q5]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q6]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q7]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q8]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q9]:checked', '#radio-buttons').val()));
    userInfo.scores.push(parseInt($('input[name=Q10]:checked', '#radio-buttons').val()));
    
    
    $.post("api/friends", userInfo, function(data){
    
        //clears fields
        $("#first-name").val("");
        $('input[name=Q1]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q2]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q3]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q4]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q5]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q6]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q7]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q8]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q9]:checked', '#radio-buttons').attr("checked", false);
        $('input[name=Q10]:checked', '#radio-buttons').attr("checked", false);
    
        var bestMatch = getMatch(data, userInfo);
    
        var matchModal = $("#match-modal");
        matchModal.addClass("block");
        $(".match-name").text(bestMatch.name);
        $(".match-pic").attr("src", bestMatch.photo);
    
        });
    });
    
    $(document).on("click", ".close", function(){
        $("#match-modal").removeClass("block");
    });
    
    function getMatch(allSingles, user){
        var bestMatchIndex = 0;
        var bestMatchDiff = 50;
        for (i=0; i<allSingles.length; i++){
            var currMatchScore = 0;
            for(j=0; j<allSingles[i].scores.length; j++){   
                currMatchScore += Math.abs(allSingles[i].scores[j] - user.scores[j]);
            }
    
            if((currMatchScore < bestMatchDiff) && (allSingles[i].name !== user.name)){
                bestMatchDiff = currMatchScore;
                bestMatchIndex = i;
            }
    
        }
        console.log(bestMatchIndex);
        return allSingles[bestMatchIndex];
    }
    
    
    