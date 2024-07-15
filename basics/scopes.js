 function one (){
    const username = "jenin"
    console.log("inner")

    function two (){
        const web = "yt"
        console.log(username )
    }
    // trying to call object web outside of its scope
    // console.log(web)

    two()
 }
 one();


 function addone(num){
    return num +2
 }
 addone(3)


 const addtwo = function (num){
    return num + 4
 }
 addtwo(5)