function showloading() {
    console.log("1. loading screen appeared");
}
function hideloading() {
    console.log("4. loading screen hidden");
}
function getdata(callback){
    console.log("2. start pulling data");
    setTimeout(()=>{
        console.log("3. finish pulling data");
        callback();
    },2000)
}
showloading();
getdata(hideloading);

