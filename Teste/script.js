function descobrirPersonagem() {
    let food = document.getElementById("food").value;
    let hobby = document.getElementById("hobby").value;
    let mood = document.getElementById("mood").value;
    let color = document.getElementById("color").value;
    let power = document.getElementById("power").value;
    let animal = document.getElementById("animal").value;
    let reaction = document.getElementById("reaction").value;
    let style = document.getElementById("style").value;

    let resultado = "";

    // Definindo personagem com base nas respostas
    if (food === "doces" && mood === "fofa" && color === "rosa") {
        resultado = "🎀 Você é a Hello Kitty! Sempre fofa e cheia de carinho! 💖";
    } else if (food === "salgados" && hobby === "dormir" && style === "relax") {
        resultado = "🍮 Você é o Pompompurin! Adora relaxar e comer! 😴";
    } else if (food === "sorvete" && animal === "coelho" && power === "voar") {
        resultado = "☁️ Você é o Cinnamoroll! Sempre sonhando e voando por aí! ✨";
    } else if (mood === "caos" && reaction === "rebelde" && style === "rock") {
        resultado = "😈 Você é a Kuromi! Rebeldia e diversão são o seu lema! 😜";
    } else {
        resultado = "🐸 Você é o Keroppi! Alegre, divertido e sempre pronto para aventuras! 🏞️";
    }

    document.getElementById("result").innerText = resultado;
}
