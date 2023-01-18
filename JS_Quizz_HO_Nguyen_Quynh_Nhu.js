function check()
{
    var question_01 = document.myform.question_01.value;
    var question_02 = document.myform.question_02.value;
    var question_03 = document.myform.question_03.value;
    var question_04= document.myform.question_04.value;
    var question_05 = document.myform.question_05.value;

    var count = 0;
    if(question_01 == "a")
    {
        count++;
    }
    if(question_02 == "a")
    {
        count++;
    }
    if(question_03 == "d")
    {
        count++;
    }
    if(question_04 == "b")
    {
        count++;
    }
    if(question_05 == "c")
    {
        count++;
    }

    alert("Vous gagnez " + count + " points");
}