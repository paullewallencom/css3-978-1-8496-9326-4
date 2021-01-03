$(function() {
    if (window.PIE) {
        $('div[data-gauge]').each(function() {
            PIE.attach(this);

            var angle = Math.round(180 * parseInt($(this).attr('data-percent'),10)/100);
            $('div[data-arrow]',$(this)).css({
        		'transform': 'rotate(' + angle + 'deg)'
        	});
        });
    }
});