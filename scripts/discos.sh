#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/disk_info.json"

# # ASCII Art completo (escapando caracteres especiales)
# ASCII_DISK="============================
#   ____  ____  ___  _  _ 
# (  _ \\(_  _)/ __)( )/ )
#  )(_) )_)(_ \\__ \\ )  ( 
# (____/(____)(___/(_)\\_)                               
# ============================"

# Cabecera
HEADER=("Partición" "Total(GB)" "Usado(GB)" "Us%" "Libre(GB)" "Lib%")

# Leer df sin cabecera y crear array de particiones
DISKS=()
df -BG --output=source,size,used,avail,pcent | tail -n +2 | while read -r FS SIZE USED AVAIL PCENT; do
    USED_PCT=${PCENT%\%}
    FREE_PCT=$((100 - USED_PCT))
    # Crear JSON para cada partición
    DISK_JSON=$(cat <<EOF
{
  "FS": "$FS",
  "Total": "$SIZE",
  "Usado": "$USED",
  "Us_pct": "$USED_PCT",
  "Libre": "$AVAIL",
  "Libre_pct": "$FREE_PCT"
}
EOF
)
    DISKS+=("$DISK_JSON")
done

# Guardar JSON final
# Nota: debido a que DISKS se llena en un subshell, usamos otra forma de construir JSON:
{
  echo "{"
  echo "  \"ASCII_DISK\": \"$(echo "$ASCII_DISK" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')\","
  echo "  \"Discos\": ["
  df -BG --output=source,size,used,avail,pcent | tail -n +2 | while read -r FS SIZE USED AVAIL PCENT; do
      USED_PCT=${PCENT%\%}
      FREE_PCT=$((100 - USED_PCT))
      echo "    {"
      echo "      \"FS\": \"$FS\","
      echo "      \"Total\": \"$SIZE\","
      echo "      \"Usado\": \"$USED\","
      echo "      \"Us_pct\": \"$USED_PCT\","
      echo "      \"Libre\": \"$AVAIL\","
      echo "      \"Libre_pct\": \"$FREE_PCT\""
      echo "    },"
  done | sed '$ s/,$//'
  echo "  ]"
  echo "}"
} > "$OUTPUT"


