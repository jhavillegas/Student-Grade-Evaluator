function rank()
{
    var grade1 = parseInt(document.getElementsByTagName('input')[1].value);
    var grade2 = parseInt(document.getElementsByTagName('input')[2].value);
    var grade3 = parseInt(document.getElementsByTagName('input')[3].value);
    var grade4 = parseInt(document.getElementsByTagName('input')[4].value);
    var grade5 = parseInt(document.getElementsByTagName('input')[5].value);

    /*for ranking*/
    if( grade1 && grade2 && grade3 && grade4 && grade5 >= 90 && grade1 && grade2 && grade3 && grade4 && grade5 <= 100)
    {
        document.querySelector(".rank").textContent = "Top Honor Student";
        document.querySelector(".rank").style.color = "green";
    }
    else if( grade1 <=89 || grade1 && grade2 <=89 || garde1 && grade3 <=89 || grade1 && grade4 <=89 || grade1 && grade5 <=89)
    {
        document.querySelector(".rank").textContent = "Second Honorable Student";
        document.querySelector(".rank").style.color = "blue";
    }
    else if( grade2 <=89 || grade2 && grade3 <=89 || grade2 && grade4 <=89 || grade2 && grade5 <=89)
    {
        document.querySelector(".rank").textContent = "Second Honorable Student";
        document.querySelector(".rank").style.color = "blue";
    }
    else if( grade3 <=89 || grade3 && grade4 <=89 || grade3 && grade5 <=89)
    {
        document.querySelector(".rank").textContent = "Second Honorable Student";
        document.querySelector(".rank").style.color = "blue";
    }
    else if( grade4 <=89 || grade4 && grade5 <=89)
    {
        document.querySelector(".rank").textContent = "Second Honorable Student";
        document.querySelector(".rank").style.color = "blue";
    }
    else if( grade5 <=89)
    {
        document.querySelector(".rank").textContent = "Second Honorable Student";
        document.querySelector(".rank").style.color = "blue";
    }

    /* for average students */
    if( grade1 && grade2 && grade3 && grade4 && grade5 <=79 || grade1 && grade2 && grade3 && grade4 && grade5 <=79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }
    else if( grade1 <= 79 || grade1 && grade2 <= 79 || grade1 && grade3 <= 79 || grade1 && grade4 <= 79 || grade1 && grade5 <= 79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }
    else if( grade2 <= 79 || grade2 && grade3 <= 79 || grade2 && grade4 <= 79 || grade2 && grade5 <= 79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }
    else if( grade3 <= 79 || grade3 && grade4 <= 79 || grade3 && grade5 <= 79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }
    else if( grade4 <= 79 || grade4 && grade5 <= 79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }
    else if( grade5 <= 79)
    {
        document.querySelector(".rank").textContent = "Average Student";
        document.querySelector(".rank").style.color = "orange";
    }

    /* for repeater*/
    if( grade1 && grade2 && grade3 && grade4 && grade5 <=69 || grade1 && grade2 && grade3 && grade4 && grade5 <=74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
    else if( grade1 <= 74 || grade1 && grade2 <= 74 || grade1 && grade3 <= 74 || grade1 && grade4 <= 74 || grade1 && grade5 <= 74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
    else if( grade2 <= 74 || grade2 && grade3 <= 74 || grade2 && grade4 <= 74 || grade2 && grade5 <= 74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
    else if( grade3 <= 74 || grade3 && grade4 <= 74 || grade3 && grade5 <= 74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
    else if( grade4 <= 74 || grade4 && grade5 <= 74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
    else if( grade5 <= 74)
    {
        document.querySelector(".rank").textContent = "Repeater";
        document.querySelector(".rank").style.color = "Red";
    }
}