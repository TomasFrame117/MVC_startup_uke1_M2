function show(){
  
    document.getElementById('app').innerHTML =
    /*html*/
    `<div></div>
    <h1>Company Survey</h1><br/>

    <h4>User Log In</h4>
    <input class="log" type="text" label="username"/> <br/>
    <h4>Password</h4>
    <input class="log" type="text"/><br/><hr/>
    <button class="in" onclick="changePage()">Log In</button><hr/>

    
    <h4>Log in to admin</h4>
    <input class="log2" type="text"/><br/>
    <h4>Password</h4>
    <input class="log2" type="text"/><br/><hr/>

    <button class="in2" onclick="switchAdminPage()">Log In</button>                  
    </div>
    `;
    
    }

function adminPage() {
    document.getElementById('app').innerHTML = `
    <h3>Admin Page</h3>
    <div class="servayGrid">
        <div class="grid1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <div class="grid2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <div class="grid3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    
    <button onclick="createSurvey()">Create Survey</button>
    <button onclick="showResNo()">Show Results in Numbers</button>
    <button onclick="showResPerc()">Show Results in Percentage</button>
    
    `;
    updateView();
}


function viewDisclaimer(){
    document.getElementById('app').innerHTML = 
    `<p>Disclaimer: Tekst tekst, masse tekst, du svarer anonymt tekst tekst</p>
    <button onclick="changePage3()">OK</button>`;
}

function changePage() {
    model.app.currentPage = 'disclaimer';
    updateView();
}

function switchAdminPage() {
    model.app.currentPage = 'adminPage';
    updateView();
}



function createSurvey() {
html += `
<div></div>`
}

function showResNo() {
 html += `
 <div>`   
}

function showResPerc() {
html += `
<div>`
}