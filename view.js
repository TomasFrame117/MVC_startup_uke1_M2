show();
function show(){
    
    html =
    /*html*/
    `<div></div>
    <h1>Company Survey</h1><br/>
    <h4>User Log In</h4>
    <input class="log" type="text" label="username"/> <br/>
    <h4>Password</h4>
    <input class="log" type="text"/><br/><hr/>
    <button class="in" onclick="model.app.currentPage='updateViewDisclaimer'; updateView()">Log In</button><hr/>
    <h4>Log in to admin</h4>
    <input class="log2" type="text"/><br/>
    <h4>Password</h4>
    <input class="log2" type="text"/><br/><hr/>
    <button class="in2" onclick="adminPage(side)">Log In</button>                  
    </div>
    `;
    
    appDiv.innerHTML = html;
    
    }

function adminPage() {
    html += `
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

function updateViewDisclaimer(){
    html += `<p>Disclaimer: Tekst tekst, masse tekst, du svarer anonymt tekst tekst</p>
    <button>OK</button>`;
}
