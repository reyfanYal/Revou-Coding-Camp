const tombolSapa = document.getElementById('tombol-sapa');

tombolSapa.addEventListener('click', function () {
      alert("Hai");
}) ;
  
function tampilkaninput(){
   const input = document.getElementById('hai').value; 

   if (input){
    alert("hai " + input + " !")
   } else{
    alert("masukkan input lagi")
   }
}

const darkmode = document.getElementById('toggle-darkmode')
const body = document.body

darkmode.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
})


