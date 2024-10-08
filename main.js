const container = document.getElementById("container");
const projects = [
    { name: 'Hello World', link: 'https://ShivaMallidi718.github.io/hello-world'},
    { name: 'Dice', link: 'https://ShivaMallidi718.github.io/dice'},
    { name: 'QR Generator', link: 'https://qr-code-six-ochre.vercel.app'},
    { name: 'Quiz', link: 'https://ShivaMallidi718.github.io/quiz'},
    { name: 'Chat Frontend', link: 'https://ShivaMallidi718.github.io/chat'},
    { name: 'Rock Paper Scissor', link: 'https://ShivaMallidi718.github.io/rock-paper-scissor'},
    { name: 'Random Colors', link: 'https://ShivaMallidi718.github.io/random-colors'},
    { name: 'Country Names', link: 'https://ShivaMallidi718.github.io/country'}
];
projects.forEach((project)=>{
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
                <a href="${project.link}">
                        <img src="folder.png" alt="Folder Image">
                        <h3>${project.name}</h3>
                </a>
            `;
    container.append(projectDiv);
});
