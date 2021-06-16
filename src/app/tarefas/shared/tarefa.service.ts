import { Injectable } from '@angular/core';
import { Tarefa } from './';


@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

listarTodos(): Tarefa[] 
{
  const tarefas =  localStorage['tarefas'];
  return tarefas ? JSON.parse(tarefas) : [];
}

cadastrar(tarefa: Tarefa) : void {
  const tarefas = this.listarTodos();
  tarefa.id = new Date().getTime();
  tarefas.push(tarefa);
  localStorage['tarefas'] = JSON.stringify(tarefas);

}

buscarPorId(id:number) : Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
}
atualizar(tarefa: Tarefa) : void {
  const tarefas: Tarefa[] = this.listarTodos();
  tarefas.forEach((obj,index,objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}


remover(id:number) : void {
  let tarefas: Tarefa[] = this.listarTodos();
  //  Verifico se o id da tabela é diferente do que estou passando. 
  //O que for igual, será excluido (ignorado da listagem a ser retornada).  
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);

  //Atualizo a tabela com os novos dados em JSON na sessao.
  localStorage['tarefas'] = JSON.stringify(tarefas);
}


/*ABAIXO, OUTRO EXEMPLO PARA REMOÇÃO DE ITENS DO ARRAY, USANDO "Splice"
/*remover(msg:string) {
    const index: number = this.data.indexOf(msg);
    if (index !== -1) {
        this.data.splice(index, 1);
    }        
}*/


alterarStatus(id:number) : void {
  const tarefas: Tarefa[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if(id === obj.id){
      objs[index].concluida = !obj.concluida;
    }
  });

  localStorage['tarefas'] = JSON.stringify(tarefas);
}
  
}


