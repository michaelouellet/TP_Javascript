
jQuery(document).ready(function() {
    $clientsHolder = $('ul.tableau-img');
    $clientsClone = $clientsHolder.clone();

    $('.filter-tableau a').click(function(e) {
        e.preventDefault();
        $filterClass = $(this).attr('class');

        $('.filter-tableau a').attr('id', '');
        $(this).attr('id', 'active-imgs');

        if($filterClass == 'all'){
            $filters = $clientsClone.find('li');
        }
        else {
            $filters = $clientsClone.find('li[data-type~='+ $filterClass +']');
        }

        $clientsHolder.quicksand($filters, {duration: 700}, function() {
            $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
        });
    });
});

jQuery(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
});