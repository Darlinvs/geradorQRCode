function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    var conteudoQRCode = googleChartApi + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}