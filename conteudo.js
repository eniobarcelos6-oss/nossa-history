/* PERSONALIZE AQUI: textos, músicas, links e perguntas. Não precisa mexer no script.js. */
window.SITE_CONTENT = {
  instagramUrl: "https://www.instagram.com/SEU_USUARIO/",
  whatsappUrl: "https://wa.me/55SEUNUMERO?text=Oi%21%20Passei%20pelo%20site%20e%20quis%20te%20mandar%20uma%20mensagem.%20%F0%9F%92%9B",
  tracks: {
    0: { title: "Uma melodia para começar", artist: "Instrumental", file: "musicas/abertura.mp3", reason: "Escolhi uma melodia delicada para abrir esta pequena história com calma, como quem começa a folhear um álbum de lembranças." },
    1: { title: "Uma música sobre boas histórias", artist: "Escolher depois", file: "musicas/historia.mp3", reason: "Esta música acompanha a lembrança de como uma amizade pode crescer nos detalhes e se tornar importante sem a gente perceber." },
    2: { title: "A trilha das lembranças", artist: "Escolher depois", file: "musicas/lembrancas.mp3", reason: "Para lembrar que os momentos simples também merecem uma trilha sonora." },
    3: { title: "Dias sem roteiro", artist: "Escolher depois", file: "musicas/sem-roteiro.mp3", reason: "Uma música com clima leve, para combinar com as caminhadas, os copões e as conversas que não precisavam de hora para acabar." },
    4: { title: "Uma música para a Senhoritinha", artist: "Escolher depois", file: "musicas/senhoritinha.mp3", reason: "Aqui a escolha precisa ter um pouco de diversão, porque algumas pessoas e alguns apelidos merecem uma trilha própria." },
    5: { title: "Uma pausa para sentir", artist: "Escolher depois", file: "musicas/reflexao.mp3", reason: "Escolhi esta música para acompanhar palavras que nem sempre são fáceis de dizer. Sem cobrança, apenas com sinceridade e carinho." },
    6: { title: "Uma trilha para recordar", artist: "Instrumental", file: "musicas/quiz.mp3", reason: "Uma música leve para acompanhar as perguntas. Não é uma prova: é só uma brincadeira com lembranças." },
    7: { title: "Para os próximos capítulos", artist: "Escolher depois", file: "musicas/final.mp3", reason: "Guardei esta música para o final porque queria que as lanternas subissem acompanhadas de uma sensação bonita: a de que ainda podem existir boas possibilidades, se os dois quiserem." }
  },
  quiz: [
    { phase: "FASE 1 · VOCÊ LEMBRA?", q: "O que costumávamos fazer quando você saía do estágio mais cedo?", options: ["Íamos direto para casa", "Bebíamos copão e conversávamos na calçada", "Íamos ao cinema", "Fazíamos uma caminhada na praia"], correct: 1, reveal: "Um copão, uma conversa na calçada e tempo para colocar o papo em dia. Às vezes, era só disso que a gente precisava." },
    { phase: "FASE 1 · VOCÊ LEMBRA?", q: "Qual é a minha matéria favorita?", options: ["Direito Civil", "Direito Constitucional", "Direito Penal", "Processo Civil"], correct: 2, reveal: "Direito Penal! Essa você tinha como saber." },
    { phase: "FASE 1 · VOCÊ LEMBRA?", q: "Qual profissão você sempre me contou que era seu sonho?", options: ["Delegada", "Advogada Criminalista", "Promotora", "Juíza"], correct: 1, reveal: "Advogada Criminalista. Um sonho que você compartilhou comigo e que ficou guardado na memória." },
    { phase: "FASE 1 · VOCÊ LEMBRA?", q: "O que prometemos um ao outro?", options: ["Nunca discordar", "Viajar juntos todo ano", "Se apoiar até o final", "Nunca mudar"], correct: 2, reveal: "Se apoiar até o final. Uma promessa sobre estar presente e desejar o bem um do outro." },
    { phase: "FASE 2 · SENHORITINHA", q: "Qual apelido eu costumava usar com você?", options: ["Princesa", "Senhoritinha", "Pequena", "Rapunzel"], correct: 1, reveal: "Senhoritinha! Uma brincadeira que virou uma marca registrada das nossas conversas." },
    { phase: "FASE 2 · SENHORITINHA", q: "Qual personagem da Disney você gosta?", options: ["Ariel", "Cinderela", "Rapunzel", "Mulan"], correct: 2, reveal: "Rapunzel, de Enrolados. E o símbolo do sol também tem um significado especial para você." },
    { phase: "FASE 2 · SENHORITINHA", q: "Qual série você gosta?", options: ["Outer Banks", "Friends", "Bridgerton", "The Office"], correct: 0, reveal: "Outer Banks! Uma referência que combina com aquele clima de aventura e dias sem muita programação." },
    { phase: "FASE 2 · SENHORITINHA", q: "Qual música você costumava cantar bastante?", options: ["Cadeira Cativa", "Evidências", "Boate Azul", "Atrasadinha"], correct: 0, reveal: "Cadeira Cativa. Tem músicas que acabam ficando associadas a uma pessoa, mesmo sem a gente planejar." }
  ]
};
