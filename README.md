# 0374-Dashboard
Repositorio de GitHub de los estudiantes de ASIX, Proyecto de IT y Administración de Redes. Panel web (*Web Dashboard*) e implementación de recursos y tecnología.
Este proyecto consiste en el desarrollo de un sistema de monitorización de servidores Linux capaz de:

## Objetivo:
* Recoger información del sistema (CPU, RAM, Disco, Red, Procesos).
* Generar archivos JSON con los resultados del punto 1.
* Transferir los datos a un servidor web.
* Mostrar la información en un panel web dinámico con actualizaciones automáticas.
* Si hay cambios repentinos en el estado del servidor (estrés, fallo de servicio, cadena de errores), enviar una notificación por correo electrónico.

## Funcionamiento:
El sistema está dividido en dos partes:
A) Servidor de monitorización (Ubuntu Server) (Srv Josep 0374)
B) Servidor web Apache && Nginx (Ubuntu Server) (Srv Izan 0375)
* Scripts Bash generan datos del sistema en formato JSON.
* Cron automatiza la ejecución periódica.
* Los archivos se sincronizan con el servidor web mediante rsync.
* Apache sirve el panel web.
* JavaScript actualiza automáticamente los datos cada 6 minutos, que es el tiempo que necesita el servidor A) para enviar la información.
* Sistema de alertas con servicios de correo electrónico.

## Algunas de las tecnologías utilizadas:
* Bash Scripting
* Cron
* rsync
* Apache
* HTML / CSS / JS
---


