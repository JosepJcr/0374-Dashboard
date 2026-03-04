#!/bin/bash

OUTPUT_DIR="/opt/monitoring/data/remote"
OUTPUT="$OUTPUT_DIR/usuaris_connectats.json"

mkdir -p "$OUTPUT_DIR"
echo "[" > $OUTPUT

first=true

while read usuari terminal data hora origen
do
    if [[ "$origen" =~ (.*) ]]; then
        ip=$(echo "$origen" | tr -d '()')
        tipus="SSH"
    else
        ip="127.0.0.1"
        tipus="LOCAL"
    fi

    if [ "$first" = true ]; then
        first=false
    else
        echo "," >> $OUTPUT
    fi

    cat <<EOF >> $OUTPUT
{
  "usuari": "$usuari",
  "terminal": "$terminal",
  "ip": "$ip",
  "tipus": "$tipus",
  "data": "$data",
  "hora": "$hora"
}
EOF

done < <(who)

echo "]" >> $OUTPUT

echo "Fitxer JSON generat a: $OUTPUT"