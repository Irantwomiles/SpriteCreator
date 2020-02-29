let boxArray = [];

$(document).ready(function() {

    //Grid code https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

    function makeBlocks(r, c) {

        var count = 1;

        for (var i = 1; i < (r + 1); i++) {
            var row = document.createElement('div');
            row.className = "row";
            for (var j = 1; j < (c + 1); j++) {
                var box = document.createElement('div');
                box.className = "box";
                box.id = count;
                row.appendChild(box);
                var item = {id:count, color:"fff"};
                boxArray.push(item);
                count++;
            }                
            document.getElementById('boxParent').appendChild(row);
        }

        count = 0;
    }
    makeBlocks(16, 16);

});
