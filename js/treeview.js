/**
 * Treeview JS
 * Created 02/27/2020
 * Jeyz Strife
 **/
var treeview = document.getElementsByClassName('treeview');
for (let i = 0; i < treeview.length; i++)
{
    treeview[i].addEventListener('click', (e) => {
        if (e.target.className == 'treeview-trigger') {
            var sibling = e.target.parentElement.children;

            for (let x = 0; x < sibling.length; x++) {
                if (sibling[x].tagName == 'UL') {
                    if (sibling[x].style.display == "" || sibling[x].style.display == "block") {
                        sibling[x].style.display = "none";
                    } else {
                        sibling[x].style.display = "block";
                    }
                } else {
                    continue;
                }
            }
        }
    });
}