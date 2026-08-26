const target = document.querySelector('#target');


const dateOptions = {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
}; 

const browsername= navigator.userAgent

 target.innerHTML = `
<p>
Browser name: ${navigator.userAgent.slice(64,72)} <br/>
Broswer Version: ${navigator.userAgent.slice(64,79)} <br/>
Screen width: ${screen.width}px<br/>
Screen height: ${screen.height}px <br/>
Available screen width:${screen.availWidth}px <br/>
Available screen heigth:${screen.availHeight}px <br/>
Current Date: ${new Date().toLocaleDateString('fi-Fi',dateOptions)}

</p>

`;
