NOSSA HISTÓRIA — VERSÃO 2

COMO ABRIR
1. Extraia o ZIP.
2. Abra index.html no navegador para visualizar.
3. Para publicar no GitHub Pages, envie TODOS os arquivos e pastas para a raiz do repositório (main / root), não apenas o index.html.

COMO TROCAR FOTOS
1. Coloque suas fotos dentro da pasta fotos/.
2. Os quadros atuais são espaços provisórios. Para inserir uma foto, abra index.html e procure por "photo-start", "photo-two", etc.
3. Substitua o bloco <div class="photo-placeholder ...">...</div> por:
   <img class="real-photo" src="fotos/minha-foto.jpg" alt="Descrição da lembrança">
4. Se quiser, renomeie a imagem, mantendo o caminho igual ao nome do arquivo.

COMO TROCAR MÚSICAS
1. Coloque arquivos MP3 dentro da pasta musicas/.
2. Os nomes esperados estão em conteudo.js: abertura.mp3, historia.mp3, lembrancas.mp3, sem-roteiro.mp3, senhoritinha.mp3, reflexao.mp3, quiz.mp3 e final.mp3.
3. Se usar outros nomes, altere o campo file da faixa correspondente em conteudo.js.
4. Edite title, artist e reason para personalizar o player.
5. A reprodução só começa quando a pessoa apertar Play. Fechar o painel não pausa a música.

COMO EDITAR QUIZ E TEXTOS MUSICAIS
Abra conteudo.js. As perguntas estão no array quiz. Cada pergunta tem q, options, correct e reveal. correct começa em zero (A), um (B), dois (C) ou três (D).

COMO COLOCAR SEUS LINKS
No começo de conteudo.js, altere instagramUrl e whatsappUrl. Use o link completo do Instagram e o link wa.me com código do país e DDD, sem espaços.

IMPORTANTE
- Os campos de fotos são provisórios; ainda não há fotos pessoais inseridas.
- As faixas MP3 ainda precisam ser escolhidas e adicionadas por você. Os controles e mensagens do player já estão preparados.
- As respostas abertas do quiz não são enviadas nem armazenadas; ficam apenas na página enquanto ela estiver aberta.
- Para atualizar o GitHub Pages, envie/substitua todos os arquivos e pastas do projeto no repositório e faça Commit changes.
