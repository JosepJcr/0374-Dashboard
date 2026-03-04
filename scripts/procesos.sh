#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/process_info.json"

# ASCII vacío (no altera el resultado)
ASCII_PROC=""

# -----------------------------
# TODOS LOS PROCESOS
# -----------------------------
ALL_PROCS=$(ps -e -o comm | tail -n +2 | sort | uniq \
| awk '{printf "\"%s\",",$0}' | sed 's/,$//')

# -----------------------------
# TOP 5 CPU
# -----------------------------
TOP_CPU=$(ps -eo comm,%cpu --sort=-%cpu | head -n 6 | tail -n +2 \
| awk '{printf "{\"Proceso\":\"%s\",\"CPU\":%s},",$1,$2}' \
| sed 's/,$//')

# -----------------------------
# TOP 5 RAM
# -----------------------------
TOP_RAM=$(ps -eo comm,%mem --sort=-%mem | head -n 6 | tail -n +2 \
| awk '{printf "{\"Proceso\":\"%s\",\"RAM\":%s},",$1,$2}' \
| sed 's/,$//')

# Crear JSON
cat <<EOF > "$OUTPUT"
{
  "ASCII_PROC": "$(echo "$ASCII_PROC" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')",
  "ALL_PROCESSES": [$ALL_PROCS],
  "TOP_5_CPU": [$TOP_CPU],
  "TOP_5_RAM": [$TOP_RAM]
}
EOF

