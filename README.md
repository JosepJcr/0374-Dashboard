# 0374-Dashboard

Repositori de GitHub dels estudiants d’ASIX, Projecte d’IT i Administració de Xarxes. Panell web (*Web Dashboard*) i implementació de recursos i tecnologia.

Aquest projecte consisteix en el desenvolupament d’un sistema de monitoratge de servidors Linux capaç de:

## Objectiu:

* Recollir informació del sistema (CPU, RAM, Disc, Xarxa, Processos).
* Generar fitxers JSON amb els resultats del punt 1.
* Transferir les dades a un servidor web.
* Mostrar la informació en un panell web dinàmic amb actualitzacions automàtiques.
* Si hi ha canvis sobtats en l’estat del servidor (estrès, fallada de servei, cadena d’errors), enviar una notificació per correu electrònic.

## Funcionament:

El sistema està dividit en dues parts:

A) Servidor de monitoratge (Ubuntu Server) (Srv Josep 0374)
B) Servidor web Apache && Nginx (Ubuntu Server) (Srv Izan 0375)

* Scripts Bash generen dades del sistema en format JSON.
* Cron automatitza l’execució periòdica.
* Els fitxers es sincronitzen amb el servidor web mitjançant rsync.
* Apache serveix el panell web.
* JavaScript actualitza automàticament les dades cada 6 minuts, que és el temps que necessita el servidor A) per enviar la informació.
* Sistema d’alertes amb serveis de correu electrònic.

## Algunes de les tecnologies utilitzades:

* Bash Scripting
* Cron
* rsync
* Apache
* HTML / CSS / JS

---


