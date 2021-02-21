function generateEngineers(engineerArr) {
    console.log(engineerArr);
    if (!engineerArr) {
        return '';
    }
    return `
    ${engineerArr
            .map(engineer => {
                return `  
                    <div class="card col-3 p-6 me-2">
                        <div class="card-title bg-dark text-light px-4">
                            <h2>${engineer.getName()}</h2>
                            <h3 class="text-warning"><span><i class="fas fa-glasses me-2"></i></span>${engineer.getRole()}</h3>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <a href=${engineer.getEmail()}>${engineer.email}</a></li>
                                <li class="list-group-item">Github: <a href=${engineer.getGithub()} target=_blank>${engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
                `;
            })
            .join('')
        }
    `;
};

function generateInterns(internArr) {
    if (!internArr) {
        return '';
    }
    return `
        ${internArr
            .map(intern => {
                return `  
                    <div class="card col-3 p-6 me-2">
                        <div class="card-title bg-dark text-light px-4">
                            <h2>${intern.getName()}</h2>
                            <h3 class="text-info"><span><i class="fas fa-user-graduate me-2"></i></span>${intern.getRole()}</h3>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <a href=${intern.getEmail()}>${intern.email}</a></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                `;
            })
            .join('')
        }
    `;
};

module.exports = (teamObj) => {
    console.log(teamObj);
    const { managerObj, engineerObj, internObj } = teamObj;

    return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie-edge">
                            <title>${managerObj.getName()}'s team</title>
                            <!-- CSS only -->
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
                                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet" />
                                <link rel="stylesheet" href="style.css" />
            </head>

            <body>
                <header>
                    <div class="container flex-row justify-space-between align-center py-3">
                        <h1 class="page-title text-light bg-dark py-2 px-3 text-center">${managerObj.getName()}'s Team</h1>
                    </div>
                </header>
                <main class="container">
                    <div class="row ms-2">
                        <div class="card col-3 p-6 me-2">
                            <div class="card-title bg-dark text-light px-4">
                                <h2>${managerObj.getName()}</h2>
                                <h3 class="text-danger"><span><i class="fas fa-mug-hot me-2"></i></span>${managerObj.getRole()}</h3>
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${managerObj.getId()}</li>
                                    <li class="list-group-item">Email: <a href=${managerObj.getEmail()}>${managerObj.email}</a></li>
                                    <li class="list-group-item">Office Number: ${managerObj.officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                        ${generateEngineers(engineerObj)}
                        ${generateInterns(internObj)}
                    </div>
                </main>
            </body>
        </html>
    `;
};