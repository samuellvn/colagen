var fala_texto=window.webkitSpeechRecognition;
var reconhecimento=new fala_texto();
var conteudo;
var imagem;

function reconhece_voz(){
    reconhecimento.start();
}

reconhecimento.onresult=function(evento){
    console.log(evento);
    conteudo=evento.results[0][0].transcript.toLowerCase();
    console.log(conteudo);
    if(conteudo=="tire minha foto"){
        speak1();
    }
}
function foto(){
    Webcam.snap(function(data_uri){
        if(imagem=="imagem1"){
            document.getElementById("img1").src=data_uri;
        }
        if(imagem=="imagem2"){
            document.getElementById("img2").src=data_uri;
        }
        if(imagem=="imagem3"){
            document.getElementById("img3").src=data_uri;
        }
    });
}

function speak1(){
    var texto_fala=window.speechSynthesis;
    Webcam.attach(camera);
    var fala_dado="tirando sua selfie em 5 segundos";
    var fala_convertida=new SpeechSynthesisUtterance(fala_dado);
    texto_fala.speak(fala_convertida);

    setTimeout(function(){
        imagem="imagem1";
        foto();
        fala_dado="tirando sua selfie em 5 segundos";
        fala_convertida=new SpeechSynthesisUtterance(fala_dado);
        texto_fala.speak(fala_convertida);
    }, 5000);
    setTimeout(function(){
        imagem="imagem2";
        foto();
        fala_dado="tirando sua selfie em 10 segundos";
        fala_convertida=new SpeechSynthesisUtterance(fala_dado);
        texto_fala.speak(fala_convertida);
    }, 10000);
    setTimeout(function(){
        imagem="imagem3";
        foto();
        fala_dado="tirando sua selfie em 15 segundos";
        fala_convertida=new SpeechSynthesisUtterance(fala_dado);
        texto_fala.speak(fala_convertida);
    }, 15000);
}
