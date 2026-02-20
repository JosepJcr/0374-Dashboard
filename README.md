# 0374-Dashboard
Github Repository ASIX Students, IT Project and Network Administration, Web Dashboard and implementation of resources and technology
Este proyecto consiste en el desarrollo de un sistema de monitorización de servidor Linux, capaz de:

Objetivo:
1. Recoger información del sistema (CPU, RAM, Disco, Red, Procesos).
2. Generar archivos JSON con resultados del 1.
3. Transferir los datos a un servidor web.
4. Mostrar la información en un dashboard web dinámico con actualización automática.
5. Si hay cambios bruscos en el estado del servidor (estrés, fallo de servicios, cadena de errores) enviar un correo electronico dando aviso.

Funcionamiento:
El sistema está dividido en dos partes:
A)Servidor de monitorización (Ubuntu Server) (Srv Josep 0374)
B)Servidor web Apache && Nginx (Ubuntu Server) (Srv Izan 0375)

1.Scripts Bash generan datos del sistema en formato JSON.
2.Cron automatiza la ejecución periódica.
3.Los archivos se sincronizan al servidor web mediante rsync.
4.Apache sirve el dashboard.
5.JavaScript actualiza los datos automáticamente cada 6 minutos, los mismos que necesita el servidor A) para enviar la información
6.Sistema de alertas con servicios de correo

Algunas de las tecnologías utilizadas: 
Bash Scripting
Cron
rsync
Apache
HTML / CSS / JS
