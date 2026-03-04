#!/bin/bash

OUTPUT_DIR="/var/www/dashboard/html/web/data"
OUTPUT="$OUTPUT_DIR/connexions.json"

mkdir -p "$OUTPUT_DIR"

CONNECTIONS_JSON="["

while read -r line; do
    PROTO=$(echo "$line" | awk '{print $1}')
    STATE=$(echo "$line" | awk '{print $2}')
    LOCAL=$(echo "$line" | awk '{print $5}')
    REMOTE=$(echo "$line" | awk '{print $6}')

    # IP y puerto local
    LOCAL_IP=$(echo "$LOCAL" | awk -F':' '{print $(NF-1)}')
    LOCAL_PORT=$(echo "$LOCAL" | awk -F':' '{print $NF}')

    # IP y puerto remoto
    REMOTE_IP=$(echo "$REMOTE" | awk -F':' '{print $(NF-1)}')
    REMOTE_PORT=$(echo "$REMOTE" | awk -F':' '{print $NF}')

    CONNECTIONS_JSON+=$(cat <<EOF
{
  "Protocol": "$PROTO",
  "State": "$STATE",
  "Local_IP": "$LOCAL_IP",
  "Local_Port": "$LOCAL_PORT",
  "Remote_IP": "$REMOTE_IP",
  "Remote_Port": "$REMOTE_PORT"
},
EOF
)
done < <(ss -tuna | awk 'NR>1 && $2=="ESTAB"')

# Quitar la última coma si existe
CONNECTIONS_JSON=$(echo "$CONNECTIONS_JSON" | sed '$ s/,$//')
CONNECTIONS_JSON+="]"

cat <<EOF > "$OUTPUT"
{
  "Connexions_Establertes": $CONNECTIONS_JSON
}
EOF

