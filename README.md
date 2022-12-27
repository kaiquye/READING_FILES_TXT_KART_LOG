<p align="center" >
     Calculando tempo de volta.
</p>


<p align="center" >
   <img width=400 src='https://user-images.githubusercontent.com/69175890/209719501-a09ae191-1d4f-4b24-8705-5969b2fcc71f.png'/>
</p>

 ### 📣  Desafio copiado de um repositorio com testes tecnicos para desenvolvedores back-end de nivel Pleno. 
 
[Gravação de tela de 27-12-2022 15:42:38.webm](https://user-images.githubusercontent.com/69175890/209720425-62864885-a754-48b8-b378-10073e0db9fc.webm)

#

## Problema 📌

Dado o seguinte log de uma corrida de Kart:

```js
Hora                               Piloto             Nº Volta   Tempo Volta       Velocidade média da volta
23:49:08.277      038 – F.MASSA                           1		1:02.852                        44,275
23:49:10.858      033 – R.BARRICHELLO                     1		1:04.352                        43,243
23:49:11.075      002 – K.RAIKKONEN                       1             1:04.108                        43,408
23:49:12.667      023 – M.WEBBER                          1		1:04.414                        43,202
23:49:30.976      015 – F.ALONSO                          1		1:18.456			35,47
23:50:11.447      038 – F.MASSA                           2		1:03.170                        44,053
23:50:14.860      033 – R.BARRICHELLO                     2		1:04.002                        43,48
23:50:15.057      002 – K.RAIKKONEN                       2             1:03.982                        43,493
23:50:17.472      023 – M.WEBBER                          2		1:04.805                        42,941
23:50:37.987      015 – F.ALONSO                          2		1:07.011			41,528
23:51:14.216      038 – F.MASSA                           3		1:02.769                        44,334
23:51:18.576      033 – R.BARRICHELLO		          3		1:03.716                        43,675
23:51:19.044      002 – K.RAIKKONEN                       3		1:03.987                        43,49
23:51:21.759      023 – M.WEBBER                          3		1:04.287                        43,287
23:51:46.691      015 – F.ALONSO                          3		1:08.704			40,504
23:52:01.796      011 – S.VETTEL                          1		3:31.315			13,169
23:52:17.003      038 – F.MASS                            4		1:02.787                        44,321
23:52:22.586      033 – R.BARRICHELLO		          4		1:04.010                        43,474
23:52:22.120      002 – K.RAIKKONEN                       4		1:03.076                        44,118
23:52:25.975      023 – M.WEBBER                          4		1:04.216                        43,335
23:53:06.741      015 – F.ALONSO                          4		1:20.050			34,763
23:53:39.660      011 – S.VETTEL                          2		1:37.864			28,435
23:54:57.757      011 – S.VETTEL                          3		1:18.097			35,633

```

## Resultado esperado ❗
- A partir de uma entrada de um arquivo de log do formato acima, montar o resultado da corrida com as seguintes informações:
   - Posição Chegada , Código Piloto , Nome Piloto , Qtde Voltas Completadas e Tempo Total de Prova .
   
## Observações 🛂
- A primeira linha do arquivo pode ser desconsiderada (Hora, Piloto, Nº Volta, Tempo Volta, Velocidade média da volta).
- A corrida termina quando o primeiro colocado completo 4 voltas

# Bônus ❗
- Não obrigatório. Faça o caso se identificar apenas com o problema ou achar que há algo interessante a ser mostrado na solução

*  ✅ Descobrir a melhor volta de cada piloto
*  ✅ Descobrir a melhor volta da corrida
*  ❌ Calcular a velocidade média de cada piloto durante toda corrida
*  ❌ Descobrir quanto tempo cada piloto chegou após o vencedor

* REGRAS

*  ✅ A solução poderá ser desenvolvida em qualquer linguagem da sua escolha;
*  ✅ Seja criativo;
*  ✅ Uma outra pessoa estará lendo o que você fez, portanto, lembre-se de buscar a semântica do problema no seu código;
*  ❌ Crie testículos;
*  ✅ Não é necessário utilizar nenhum framework, procure utilizar os recursos da linguagem;
