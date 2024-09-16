let h1 = document.querySelector ("h1"); 
h1.innerText= 'Productos';

let array = [];

for(let i = 1; i < 10; i++) { 
    
    array.push(`
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt"">
            <div class="card-body">
                <h4>Card ${i}</h4>
                <p class="card-text"> Hola ${i} </p>
             </div>
        </div>
     `);
    
}
document.querySelector("section").innerHTML = array.join().replaceAll(",","");