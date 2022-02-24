function verificar(){
    var data= new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById("txtano")
    var res=document.getElementById("res")
    if(fano.value.length == 0 || Number(fano.value)>ano){
        alert("Verifique os dados e tente novamente!")
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero="Homem"
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src','criançahomem.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            }else{
                //Idoso
                img.setAttribute('src','idosohomem.png')
            }
        }else if(fsex[1].checked){
            genero="Mulher"
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src','criançamulher.png')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adultamulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.style.textAlign='center'
        img.style.padding='18px'
    }
}