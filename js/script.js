function toggleMenuFunction() {
    var header = document.getElementById("header");
    header.classList.toggle("menu-opened");
}

function checkMenuAdded()
{
    if (document.getElementById("header"))
    {
        toggleMenuFunction();
        return;
    }
    setTimeout(checkMenuAdded, 100);
}

checkMenuAdded();