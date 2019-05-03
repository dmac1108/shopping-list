$(function() {

    //add new items to the list
    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        let newItem = $("input").val();
        let newListItem = $(
        `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        console.log(newListItem);
        $("ul").append(newListItem);

    });

    //toggle check button 
    $('ul').on('click', '.shopping-item-toggle', function(event){
        $(this).closest($("li")).find("span.shopping-item").toggleClass("shopping-item__checked");
    });
    
    
    //remove an item from the list
    $('ul').on('click', '.shopping-item-delete', function(event){
        $(this).closest($("li")).remove();
    });


    


});