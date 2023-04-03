# Tulia

## Pasos para la instalacion del proyecto
### Asumiendo que ya tiene Git Y Node instalado puede seguir con las intrucciones, caso contrario busque en el navegador como instalar Git y Node

1. Dirijase a la parte superior derecha donde dice : Code, despliegue el boton y copie la URL que le estan brindando.
2. Vaya a la terminal presionando la tecla ctrl + R, una vez alli ponga la siguiente linea: git clone (URL que copio).
3. Si hizo los pasos correctamente podra ver que en su escritorio una carpeta llamada Tulia.
4. Ahora abra el proyecto con su editor de codigo preferido. 
5. Ya estando en el editor abra la terminal del editor o sistema operativo.
6. Ahora ponga la siguiente linea para acceder a la carpeta frontend : cd frontend
7. Ya estando en la carpeta ponga el siguiente comando : npm i, esto es para instalar las dependencias del proyecto, ahora repita esto mismo con la carpeta backend.
8. para confirmar que todo halla salido bien ponga en la terminal en la carpeta frontend : npm run dev, esto le brindara una ruta y pongala en el navegador, ya podra ver el contenido del proyecto.

## Pasos para subir cambios del proyecto
### Ya estando desarrollando el proyecto y quiera subir sus cambios debera seguir las siguientes instrucciones
1. Primero debera crear una rama propia, use el siguiente comando: git branch <nombre de la rama>, use su nombre o el del usuario de github
2. Para acceder a ella, use el siguiente comando: git checkout  <nombre de la rama>, esto lo debera hacer cada vez que vaya a subir un cambio
3. cuando tenga algo que subir(archivo modificado, nuevo archivo, nueva carpeta) use el comando: git add .  ,  esto es para agregar todos los cambios que ha realizado.
4. Ahora para enviar el commit use el comando: git commit -m"Mensaje de los cambios que realizo".
5. Por ultimo para subir el commit y los cambios use el comando: git push

## Pasos para importar cambios del proyecto localmente

### Esto es para que los cambios de los demas desarrolladores se actualizen y se vean reflejados su maquina

1. Simplemente use el comando : git pull
