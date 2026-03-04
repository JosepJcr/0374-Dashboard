#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/network_info.json"

# Crear array de interfaces activas
INTERFACES_JSON="["
for IFACE in $(ip -o link show up | awk -F': ' '{print $2}'); do
    # IP (puede ser vacía)
    IP_ADDR=$(ip -4 addr show "$IFACE" | awk '/inet / {print $2}' | cut -d/ -f1)
    [ -z "$IP_ADDR" ] && IP_ADDR="N/A"

    # Tráfico RX / TX (en bytes)
    RX_BYTES=$(cat /sys/class/net/$IFACE/statistics/rx_bytes)
    TX_BYTES=$(cat /sys/class/net/$IFACE/statistics/tx_bytes)

    # Convertir a MB
    RX_MB=$(awk "BEGIN {printf \"%.2f\", $RX_BYTES/1024/1024}")
    TX_MB=$(awk "BEGIN {printf \"%.2f\", $TX_BYTES/1024/1024}")

    # Añadir objeto JSON de la interfaz
    INTERFACES_JSON+=$(cat <<EOF
{
  "Interfaz": "$IFACE",
  "IP": "$IP_ADDR",
  "RX_MB": $RX_MB,
  "TX_MB": $TX_MB
},
EOF
)
done

# Eliminar la última coma y cerrar array
INTERFACES_JSON=$(echo "$INTERFACES_JSON" | sed '$ s/,$//')
INTERFACES_JSON+="]"

# Guardar JSON final
cat <<EOF > "$OUTPUT"
{
  "Interfaces": $INTERFACES_JSON
}
EOF
