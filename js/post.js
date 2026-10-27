const form = document.querySelector("#form-filme");
const resposta = document.querySelector("#resposta");

const apiKey ="cv_oCphcVLdm3nZLdfQ8wHuVOmEG_iYQgMO55xz9gR03Oe-wIF2VbL9htGftvD0YDP8";
const apiUrl = "https://api-ds.codeverse.dev.br/api/filmes";

form.addEventListener("submit", async function name (event) {
    event.preventDefault();

    const dados = new FormData(form);

    const filme = {
        title: dados.get("title"),
        genero: dados.get("genero"),
        ano: dados.get("ano"),
        diretor: dados.get("diretor"),
        nota:dados.get("nota"),
        imageUrl: dados.get("imageUrl") || null
    }
})

resposta.textContent = "Enviando filme para API....";
try {

    const texto = await respostaApi.text();

    let resultado;

    try {
        resultado = texto ? JSON.parse(texto) : {};
    } catch {
        resultado = { message: texto };
    }

    if (!respostaApi.ok) {
        throw new Error(
            resultado.message ||
            resultado.error ||
            `Erro HTTP ${respostaApi.status}`
        );
    }

    resposta.textContent =
        `${resultado.title || filme.title} foi cadastrado com sucesso!`;

    console.log("Resposta da API:", resultado);

    form.reset();

} catch (error) {
    console.error("Erro ao cadastrar filme:", error);

    resposta.textContent =
        "Erro ao cadastrar: " + error.message;

}