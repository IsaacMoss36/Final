
$('#submitComment').on('click', function(){
    $('#contentContainer').append(`
    <div id = "fullComment">   
        <div>
            <p id = "commentName">${$('#userName').val()}</p>
            <p id = "commentWords">${$('#comment').val()}</p>
            <div id = "output" class="hide">

                <div id= "editItems">
                    <label for="editCommentBar"></label>
                    <input id="editCommentBar" placeholder="Edit your comment...";>
            
                    <div id = "editSubmit">Submit</div>
                </div>

            </div>
        </div>
        <div id = "changingButtons">
        <div id = "editButton">Edit</div>
        <div id = "deleteButton">Delete</div>
        </div>
    </div>
    
    `)
    
    

});

$('#contentContainer').on('click','#deleteButton', function(){
    let deleteParent = $(this).parents()[0]
    let deleteParent1 = $(deleteParent).parents()[0]
    deleteParent1.remove();
    
});


$('#contentContainer').on('click',"#editButton", function(){

    let parent1 = $(this).parents()[0];
    let parent2 = $([parent1]).parents()[0];
    let child1 = $(parent2).children()[0];
    let child2 = $(child1).children()[2];
    
    
    $(child2).toggleClass("hide");
     

    
});

$('#contentContainer').on('click','#editSubmit', function(){
    let submitParent1 = $(this).parents()[1];
    $(submitParent1).toggleClass('hide');
    
    let submitPrev1 = $(submitParent1).prev()[0] //goes to the comment already made
    

    let newComment1 = $(this).prev()[0]; //goes to the edit comment bar
   


    let editCommentVal = $(newComment1).val();
    

    $(submitPrev1).text(editCommentVal)
});







