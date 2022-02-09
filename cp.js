function cop()
{
    var text = document.getElementById("text").innerText;
    text.select();
    document.execCommand("copy");
    setTimeout(() => {
        alert("请等候5秒")
    }, 5 * 1000);
}