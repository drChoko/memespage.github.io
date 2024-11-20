document.getElementById('openImage').addEventListener('click', function(event) {
    event.preventDefault();
    const imagePath = 'ui/stethem.jpg'; // Убедитесь, что путь к файлу верный
    const imageWindow = window.open('', '_blank');
    if (imageWindow) {
        imageWindow.document.write(
            <html>
                <head>
                    <title>Изображение</title>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; background-color:#000; height:100vh;">
                    <img src="${imagePath}" alt="Изображение" style="max-width:100%; height:auto;">
                </body>
            </html>
        );
        imageWindow.document.close(); // Закрываем поток для отображения содержимого
    } else {
        alert('Поп-апы заблокированы. Разрешите их в настройках браузера.');
    }
	
	
	
});