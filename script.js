function val(){
    var name = document.getElementById("gnumber").value;
    if(isNaN(name)|| name.length<10 || name.length>16){
        document.getElementById("phone").innerHTML="Invalid phone number";
        return false;
    }
    document.getElementById("phone").innerHTML="";
    return true;
}
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbw_vLh1BV7FDWGCFFJU3q9G36SoYNd05m6snT-4T77SJryxLHc/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})