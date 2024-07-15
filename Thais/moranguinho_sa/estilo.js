var icons = ["amarelo", "branco", "rosa", "marrom", "roxo", "vermelho"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;
var timeLeft = 180;
let players = [];
let selectedPlayerIndex = -1;
var timerInterval;
var currTile;
var otherTile;
var gameActive = false;

document.addEventListener('DOMContentLoaded', function() {
    loadPlayers();
    document.getElementById("playerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        createPlayer();
    });
});

function loadPlayers() {
    fetch('http://localhost/moranguinho_sa/players.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ action: 'read' })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Load Players Response:', data);
        if (Array.isArray(data)) {
            players = data.map(player => ({ id: player.id_player, name: player.name }));
            console.log(players);
            updatePlayerList();
        } else {
            console.error('Invalid data format:', data);
        }
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}

function createPlayer() {
    const formData = new FormData(document.getElementById('playerForm'));
    formData.append('action', 'create');
    fetch('http://localhost/moranguinho_sa/players.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Create Player Response:', data);
        if (data.message === 'Player created successfully') {
            loadPlayers(); 
            document.getElementById('playerForm').reset();
            document.getElementById('playerId').value = '';
            selectPlayer(players.length - 1); 
        } else if (data.error) {
            alert('Error: ' + data.error);
        } else {
            alert('Unexpected response: ' + data);
        }
    })
    .catch(error => alert('There was a problem with the fetch operation: ' + error));
}


function updatePlayerList() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    players.forEach((player, index) => {
        const li = document.createElement("li");
        li.textContent = `ID: ${player.id} - Name: ${player.name}`;
        li.onclick = () => selectPlayer(index); 
        playerList.appendChild(li);
    });
}

function selectPlayer(index) {
    selectedPlayerIndex = index;
    const selectedPlayer = players[selectedPlayerIndex].name; 
    document.getElementById("selectedPlayer").textContent = selectedPlayer;
}

function editPlayer() {
    if (selectedPlayerIndex !== -1) {
        const newName = prompt("Digite o novo nome do jogador:");
        const newNationality = prompt("Digite o novo país do jogador:");
        const newAge = prompt("Digite a nova idade do jogador:");
        const newEmail = prompt("Digite o novo e-mail do jogador:");

        if (newName !== null && newName.trim() !== "" && 
            newNationality !== null && newNationality.trim() !== "" && 
            newAge !== null && newAge.trim() !== "" && 
            newEmail !== null && newEmail.trim() !== "") {

            const playerId = players[selectedPlayerIndex].id;
            const requestBody = new URLSearchParams({
                action: 'update',
                id: playerId,
                name: newName,
                nationality: newNationality,
                age: newAge,
                email: newEmail
            });

            console.log('Request Body:', requestBody.toString());

            fetch('http://localhost/moranguinho_sa/players.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: requestBody
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Update Player Response:', data);
                if (data.message === 'Player updated successfully') {
                    players[selectedPlayerIndex] = {
                        id: playerId,
                        name: newName,
                        nationality: newNationality,
                        age: newAge,
                        email: newEmail
                    };
                    updatePlayerList();
                    document.getElementById("selectedPlayer").textContent = newName;
                } else if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    console.error('Unexpected response:', data);
                }
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        }
    } else {
        console.log('No player selected for editing.');
    }
}

function deletePlayer() {
    if (selectedPlayerIndex !== -1) {
        const confirmDelete = confirm("Tem certeza que deseja excluir este jogador?");
        if (confirmDelete) {
            const playerId = players[selectedPlayerIndex].id;
            console.log('Attempting to delete player with ID:', playerId);

            fetch('http://localhost/moranguinho_sa/players.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({ action: 'delete', id: playerId })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Delete Player Response:', data);
                if (data.message === 'Player deleted successfully') {
                    players.splice(selectedPlayerIndex, 1);
                    selectedPlayerIndex = -1;
                    updatePlayerList();
                    document.getElementById("selectedPlayer").textContent = "";
                } else if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    console.error('Unexpected response:', data);
                }
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        }
    } else {
        console.log('No player selected for deletion.');
    }
}


function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); 
}

function updateTimer() {
    document.getElementById("timer").innerText = "Tempo Restante: " + timeLeft + " segundos";
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame();
    }
    timeLeft--;
}

function startGame() {
    resetGame();
    if (selectedPlayerIndex === -1) {
        alert("Selecione um jogador antes de iniciar o jogo.");
        return;
    }

    function resetGame() {
        board = [];
        document.getElementById("board").innerHTML = "";
        score = 0;
        document.getElementById("score").innerText = score;
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        timeLeft = 180;
        document.getElementById("timer").innerText = "Tempo Restante: " + timeLeft + " segundos";
        gameActive = false;
    }

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./icons_game/" + randomWakfu() + ".png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    document.getElementById("crud").style.display = "none";
    document.getElementById("game").style.display = "block";

    startTimer();
    gameActive = true;

    window.setInterval(function(){
        if (gameActive) {
            crushWakfu();
            slideWakfu();
            generateWakfu();
        }
    }, 100);
}

function playAgain() {
    resetGame();
    startGame();
}

function randomWakfu() {
    return icons[Math.floor(Math.random() * icons.length)];
}

function dragStart() {
    if (!gameActive) return;
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    if (!gameActive) return;
    otherTile = this;
}

function dragEnd() {
    if (!currTile || !otherTile) return;

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeftRight = Math.abs(c - c2);
    let moveUpDown = Math.abs(r - r2);

    if (moveLeftRight + moveUpDown == 1) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        let validMove = crushWakfu();
        if (!validMove) {
            currTile.src = currImg;
            otherTile.src = otherImg;
        }
    }
    currTile = null;
    otherTile = null;
}

function crushWakfu() {
    let validMove = false;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let wakfu1 = board[r][c];
            let wakfu2 = board[r][c + 1];
            let wakfu3 = board[r][c + 2];

            if (wakfu1.src === wakfu2.src && wakfu2.src === wakfu3.src && !wakfu1.classList.contains("blank")) {
                wakfu1.classList.add("blank");
                wakfu2.classList.add("blank");
                wakfu3.classList.add("blank");
                validMove = true;

                if (c + 3 < columns && board[r][c + 3].src === wakfu1.src) {
                    board[r][c + 3].classList.add("blank");
                    score += 50;
                    if (c + 4 < columns && board[r][c + 4].src === wakfu1.src) {
                        board[r][c + 4].classList.add("blank");
                        score += 100;
                    }
                } else {
                    score += 30;
                }
            }
        }
    }

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let wakfu1 = board[r][c];
            let wakfu2 = board[r + 1][c];
            let wakfu3 = board[r + 2][c];

            if (wakfu1.src === wakfu2.src && wakfu2.src === wakfu3.src && !wakfu1.classList.contains("blank")) {
                wakfu1.classList.add("blank");
                wakfu2.classList.add("blank");
                wakfu3.classList.add("blank");
                validMove = true;

                if (r + 3 < rows && board[r + 3][c].src === wakfu1.src) {
                    board[r + 3][c].classList.add("blank");
                    score += 50;
                    if (r + 4 < rows && board[r + 4][c].src === wakfu1.src) {
                        board[r + 4][c].classList.add("blank");
                        score += 100;
                    }
                } else {
                    score += 30;
                }
            }
        }
    }

    document.getElementById("score").innerText = score;
    return validMove;
}

function slideWakfu() {
    for (let c = 0; c < columns; c++) {
        let ind = rows - 1;
        for (let r = columns - 1; r >= 0; r--) {
            if (!board[r][c].classList.contains("blank")) {
                board[ind][c].src = board[r][c].src;
                ind--;
            }
        }

        for (let r = ind; r >= 0; r--) {
            board[r][c].classList.add("blank");
        }
    }
}

function generateWakfu() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if (tile.classList.contains("blank")) {
                tile.src = "./icons_game/" + randomWakfu() + ".png";
                tile.classList.remove("blank");
            }
        }
    }
}


function endGame() {
    gameActive = false;
    alert("Tempo esgotado! Sua pontuação final é: " + score);
    
    saveScore().then(() => {
        document.getElementById("game").style.display = "none";
        document.getElementById("ranking-table").style.display = "block";
        document.getElementById("return-to-registration").style.display = "block"; // Mostrar o botão

        setTimeout(fetchRanking, 1000); 
    }).catch(error => {
        console.error("Erro ao salvar pontuação:", error);
    });
}

function saveScore() {
    return new Promise((resolve, reject) => {
        if (selectedPlayerIndex === -1) {
            console.error("Nenhum jogador selecionado.");
            reject("Nenhum jogador selecionado.");
            return;
        }

        const playerId = players[selectedPlayerIndex].id;
        if (!playerId || score === undefined || score === null) {
            console.error("Dados incompletos: playerId ou pontuacao estão faltando.");
            reject("Dados incompletos.");
            return;
        }

        const requestBody = new URLSearchParams({
            action: 'save_score',
            id: playerId,
            pontuacao: score
        });

        console.log('Enviando dados para save_score:', requestBody.toString());

        fetch('http://localhost/moranguinho_sa/ranking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: requestBody
        })
        .then(response => response.json())
        .then(data => {
            console.log('Save Score Response:', data);
            if (data.error) {
                console.error('Erro no save_score:', data.error);
                reject(data.error);
            } else {
                console.log(data.message);
                resolve(data.message);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            reject(error);
        });
    });
}

function fetchRanking() {
    const requestBody = new URLSearchParams({ action: 'get_ranking' });

    fetch('http://localhost/moranguinho_sa/ranking.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody
    })
    .then(response => response.json())
    .then(data => {
        console.log('Fetch Ranking Response:', data);
        if (Array.isArray(data)) {
            const rankBody = document.getElementById("rank-body");
            rankBody.innerHTML = ""; // Limpa conteúdo anterior da tabela

            data.forEach((rank, index) => {
                const row = document.createElement("tr");
                const positionCell = document.createElement("td");
                positionCell.textContent = index + 1; // Posição baseada no índice
                const playerNameCell = document.createElement("td");
                playerNameCell.textContent = rank.name;
                const scoreCell = document.createElement("td");
                scoreCell.textContent = rank.pontuacao;

                row.appendChild(positionCell);
                row.appendChild(playerNameCell);
                row.appendChild(scoreCell);

                rankBody.appendChild(row);
            });

            document.getElementById("ranking-table").style.display = "block";
            document.getElementById("return-to-registration").style.display = "block";
        } else {
            console.error('Invalid data format:', data);
        }
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}


function home(){
    window.location.href = "http://localhost/moranguinho_sa/moranguinho.html";
}