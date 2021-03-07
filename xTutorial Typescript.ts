// Tarefa: Adicionar cidade e estado do usuario dentro dessa mensagem
function showUserInfo(user){
    return `Welcome, ${user.name} - ${user.age}. City: ${user.nao_sei} - ${user.city}`;
}
// A chamada do atributo "nao_sei" não mostra um erro para o programador
// O programa não sabe quais atributos existem no parâmetro "user"
// O erro só vai ser percebido em tempo de execução

// Solução: definir um Tipo Abstrato de Dados usando Typescrypt
type User = {
    name: string;
    age: string;
    address: {
        city: string;
        uf: string;
    }
}

// Passar o tipo do parâmetro
function showUserInfoTS(user: User){
    return `Welcome, ${user.name} - ${user.age}. City: ${user.nao_sei} - ${user.address.city} - ${user.address.}`;
}
// "nao_sei" agora mostra um erro
// o programa agora sugere quais os atributos que existem naquele parâmetro