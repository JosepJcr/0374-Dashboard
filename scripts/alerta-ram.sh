#!/bin/bash

JSON_FILE="/var/www/dashboard/html/web/data/ram_info.json"
THRESHOLD=90
EMAIL="izanb@educem.cat"

#Extraer uso de CPU
USAGE=$(jq '.PERCENT_USED' "$JSON_FILE")

#Comparar decimal correctamente
if (( $(echo "$USAGE > $THRESHOLD" | bc -l) )); then

sendmail izanb@educem.cat << EOF
From: izanb@educem.cat
To: izanb@educem.cat
Subject: Alerta RAM

La RAM supera el percentatge de 90%

EOF

fi