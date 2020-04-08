const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');

const  body = document.body;

darkButton.onclick = () => {
    // body.classList.remove('light');
    // body.classList.add('dark');
    //or
    body.classList.replace('light' , 'dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark' , 'light');
};

solarButton.onclick = () => {
   if () {
       
   } else {
       
   }
};