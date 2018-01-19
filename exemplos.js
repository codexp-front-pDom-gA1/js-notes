var notes = [];

function updateView(section) {
    var innerHTML = "";

    for (var index = 0; index < notes.length; index++) {
        innerHTML += '<form class="note">'+
                        '<button class="note__control" type="button" onclick="onRemoveClick(this.form.parentElement, ' + index + ')">' +
                            '<i class="fa fa-times" aria-hidden="true"></i>' +
                        '</button>' +
                         '<h1 class="note__title">' + notes[index].title + '</h1>' +
                         '<p class="note__body">' + notes[index].body + '</p>' +
                     '</form>';
    }

    section.innerHTML = innerHTML;
}

function onDoneClick(form, section, inputTitle, textAreaBody) {
    // criar uma nota
    var note = {
        title: inputTitle.value,
        body: textAreaBody.value
    };

    // adicionar a nota
    notes.push(note);

    // atualizar a tela
    updateView(section);

    //limpar o formulario
    form.reset();
}

function onRemoveClick(section, index) {
    // remover a nota
    notes.splice(index, 1);

    // atualizar a tela
    updateView(section);
}



/* blabla */



var notes = [];

//guardar uma variável

//colocar na lista de notas 


//atualizar a tela //atualizar tela (criar função pra atualizar tela)

function atualizaTela(section){
    var innerHTML = "";

    for (var index=0, index < notes.length; index++){

        innerHTML += <p> <input type="text" name="titulo" id="titulo"> </p>

    }
    código atualiza tela
}


//resetar o formulario

titulo = input.titulo.value
texto= input.texto.value
this.form.titulo, this.from.texto
funcao (input.titulo, input.texto)


//limpar formulario
form.reset


//aplicar função de incluir os campos digitados + adicionar a lista vazia => notes

function onInputDados() {

    var dados = ""; // guardar html 
    
    for(var index=0; dados < index.lenght; index++) {
        +=
    }

//chama aqui


}

funcao.push (notas)

notes.dados 

for 



//aplicar evento de salvar pull.notes

//aplicar função deletar



