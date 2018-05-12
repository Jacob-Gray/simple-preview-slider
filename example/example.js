document.querySelector('iframe').onload = function () {

    var example = document.querySelector('iframe').contentDocument,
        before = example.querySelector('.image-wrapper'),
        after = example.querySelector('.filter-preview');

    /**
     * Get url things in da pre
     */

    function handleTriggersOfTheLittleBoldTagThingsInThePre(el, target) {

        el.addEventListener('mouseover', function () {
            target.classList.add('highlight');
        });

        el.addEventListener('mouseout', function () {
            target.classList.remove('highlight');
        });
    }

    var triggers = document.querySelectorAll('b');

    handleTriggersOfTheLittleBoldTagThingsInThePre(triggers[0], before);
    handleTriggersOfTheLittleBoldTagThingsInThePre(triggers[1], after);
}



