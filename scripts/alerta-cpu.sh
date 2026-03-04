#!/bin/bash

JSON_FILE="/var/www/dashboard/html/web/data/cpu_info.json"
THRESHOLD=90
EMAIL="izanb@educem.cat"

#Extraer uso de CPU
USAGE=$(jq '.CPU_USAGE_PERCENT' "$JSON_FILE")

#Comparar decimal correctamente
if (( $(echo "$USAGE > $THRESHOLD" | bc -l) )); then

sendmail izanb@educem.cat << EOF
From: izanb@educem.cat
To: izanb@educem.cat
Subject: Alerta CPU

La CPU supera el percentatge de 90%

EOF