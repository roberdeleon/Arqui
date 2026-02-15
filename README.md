\# Assignment 01 - Load Balancer Round Robin (Nginx + Docker Compose)



\## Descripción



Este proyecto implementa un balanceador de carga utilizando Nginx con el algoritmo Round Robin.

Se levantan dos servidores web que muestran un mensaje distinto, y el balanceador distribuye

las peticiones entre ellos alternadamente.



\## Diagrama de infraestructura



Cliente -> (Nginx Load Balancer :8080) -> \[web1:80, web2:80]



Cliente

&nbsp; |

&nbsp; v

Load Balancer (Nginx :8080)

&nbsp;  |                |

&nbsp;  v                v

web1              web2



\## Comando para ejecutar la infraestructura



docker compose up



\## URL del balanceador



http://localhost:8080



