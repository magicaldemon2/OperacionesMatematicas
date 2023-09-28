<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre_modelo = $_POST["nombre_modelo"];
    $año_carro = $_POST["año_carro"];
    $marca_carro = $_POST["marca_carro"];
    $motor_carro = $_POST["motor_carro"];
    $precio_carro = $_POST["precio_carro"];
    $num_llantas = $_POST["num_llantas"];
    $equipamiento_carro = $_POST["equipamiento_carro"];
    $info_adicional = $_POST["info_adicional"];
    $tipo_gasolina = isset($_POST["tipo_gasolina"]) ? "Gasolina" : "";
    $tipo_electrico = isset($_POST["tipo_electrico"]) ? "Eléctrico" : "";
    $tipo_estandar = isset($_POST["tipo_estandar"]) ? "Estándar" : "";
    $tipo_automatico = isset($_POST["tipo_automatico"]) ? "Automático" : "";

    // Manejar la imagen
    $imagen_carro = $_FILES["imagen_carro"];
    $nombre_imagen = $imagen_carro["name"];
    $tipo_imagen = $imagen_carro["type"];
    $ruta_temporal = $imagen_carro["tmp_name"];
    $ruta_destino = "carros/" . $nombre_imagen; // Ruta donde se guardará la imagen

    // Mover la imagen a la carpeta de destino
    move_uploaded_file($ruta_temporal, $ruta_destino);

    // Aquí puedes realizar las acciones necesarias con los datos y la imagen, como guardarlos en una base de datos

    // Ejemplo: Imprimir los datos y la ruta de la imagen
    echo "Nombre del modelo: " . $nombre_modelo . "<br>";
    echo "Año del carro: " . $año_carro . "<br>";
    echo "Marca del carro: " . $marca_carro . "<br>";
    // ... Imprimir el resto de los datos

    echo "Ruta de la imagen: " . $ruta_destino;
}
?>