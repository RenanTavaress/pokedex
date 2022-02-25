Para esse desafio técnico seguiremos evoluindo a aplicação iniciada no módulo anterior, e para isso, baseado no layout proposto desenvolva uma aplicação em React que irá listar os Pokémons consultando as informações de uma API e ao clicar sobre algum card será direcionado para a página de detalhes, onde deverá ser feita uma nova chamada para obter as informações do Pokémon.
Para o desenvolvimento, atente-se aos seguintes pontos:
•	A aplicação deverá utilizar navegação entre rotas, possuindo duas rotas (Home e Detalhes)
•	O nome do Pokémon deve ser passado como parâmetro da url para a página de detalhes
•	Cada Pokémon pode conter um ou mais tipo. Para definir a cor do card, utilize sempre o primeiro tipo da lista. As cores definidas para cada tipo estão no protótipo abaixo
•	Para a exibição das habilidades, leve em consideração a barra completa como 100, e o valor proveniente da API como o valor a ser preenchido na barra. Ex: Para uma habilidade que ele possua valor de 45, o tamanho da barra preenchida deve ser de 45% do tamanho total da barra.
•	Para o campo de busca da página inicial, iremos fazer um filtro dentro da própria lista já carregada, ou seja, ao digitar o nome de algum Pokémon, você deverá fazer um filtro na lista de Pokémons e exibir apenas os itens que correspondem ao texto pesquisado. Caso não seja encontrado nenhum item, exiba uma mensagem simples informando que nenhum Pokémon foi encontrado.
•	Para estilização você poderá escolher se utilizará o SASS ou o Styled Components. Caso escolha utilizar o sass em seu projeto React, será necessário realizar uma pequena configuração no projeto. Mais informações nesse link → https://backefront.com.br/como-usar-scss-react/
•	Para haver uma melhor padronização de estilo, aconselho que utilizem o reset de css em seus projetos: https://meyerweb.com/eric/tools/css/reset/

API
Método	Endpoint	Descrição
GET	https://pokedex-api-three.vercel.app/api/pokemons
Responsável por listar todos os Pokémons
GET	https://pokedex-api-three.vercel.app/api/pokemons/bulbasaur
Responsável por trazer os detalhes de um Pokémon
