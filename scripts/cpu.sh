#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/cpu_info.json"

# Comprobar si existen comandos necesarios
for cmd in lscpu mpstat top awk; do
  command -v $cmd >/dev/null 2>&1 || { echo "$cmd no encontrado, instálalo."; exit 1; }
done

# Detectar CPU
CPU_MODEL=$(lscpu | awk -F: '/Model name/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_ARCH=$(lscpu | awk -F: '/Architecture/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_CORES=$(lscpu | awk -F: '/^CPU\(s\)/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')
CPU_THREADS=$(lscpu | awk -F: '/Thread\(s\) per core/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')

# Frecuencia actual del CPU (más confiable)
CPU_FREQ=$(awk -F: '/MHz/ {gsub(/^[ \t]+/, "", $2); print $2; exit}' /proc/cpuinfo)

# Cache L3
CACHE_SIZE=$(lscpu | awk -F: '/L3 cache/ {gsub(/^[ \t]+/, "", $2); print $2; exit}')

# Carga promedio
LOAD_AVERAGE=$(uptime | awk -F'load average:' '{gsub(/^[ \t]+/, "", $2); print $1, $2, $3}')

# Uso actual de CPU
CPU_USAGE=$(mpstat 1 1 | awk '/Average/ {printf "%.1f", 100 - $NF}')

# Crear JSON
mkdir -p "$(dirname "$OUTPUT")"
cat <<EOF > "$OUTPUT"
{
  "CPU_MODEL": "$CPU_MODEL",
  "CPU_ARCH": "$CPU_ARCH",
  "CPU_CORES": $CPU_CORES,
  "CPU_THREADS": $CPU_THREADS,
  "CPU_FREQ_MHZ": $CPU_FREQ,
  "CACHE_L3": "$CACHE_SIZE",
  "CPU_USAGE_PERCENT": $CPU_USAGE,
  "LOAD_AVERAGE": "$LOAD_AVERAGE"
}
EOF

echo "Información de CPU guardada en $OUTPUT"