#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/ram_info.json"

# RAM en MB
TOTAL_RAM=$(free -m | grep Mem: | awk '{print $2}')
USED_RAM=$(free -m | grep Mem: | awk '{print $3}')
FREE_RAM=$(free -m | grep Mem: | awk '{print $4}')
BUFF_CACHE=$(free -m | grep Mem: | awk '{print $6}')
AVAILABLE_RAM=$(free -m | grep Mem: | awk '{print $7}')

# Cálculo
PERCENT_USED=$(( (TOTAL_RAM - AVAILABLE_RAM) * 100 / TOTAL_RAM ))

# # ASCII Art completo
# ASCII_RAM=$(cat <<'EOF'
# ============================
#  .----------------.  .----------------.  .----------------. 
# | .--------------. || .--------------. || .--------------. |
# | |  _______     | || |      __      | || | ____    ____ | |
# | | |_   __ \    | || |     /  \     | || ||_   \  /   _|| |
# | |   | |__) |   | || |    / /\ \    | || |  |   \/   |  | |
# | |   |  __ /    | || |   / ____ \   | || |  | |\  /| |  | |
# | |  _| |  \ \_  | || | _/ /    \ \_ | || | _| |_\/| |_ | |
# | | |____| |___| | || ||____|  |____|| || ||_____||_____|| |
# | |              | || |              | || |              | |
# | '--------------' || '--------------' || '--------------' |
#  '----------------'  '----------------'  '----------------'
# ============================
# EOF
# )

# Crear JSON
cat <<EOF > "$OUTPUT"
{
  "TOTAL_RAM_MB": $TOTAL_RAM,
  "USED_RAM_MB": $USED_RAM,
  "FREE_RAM_MB": $FREE_RAM,
  "BUFF_CACHE_MB": $BUFF_CACHE,
  "AVAILABLE_RAM_MB": $AVAILABLE_RAM,
  "PERCENT_USED": $PERCENT_USED,
  "ASCII_RAM": "$(echo "$ASCII_RAM" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')"
}
EOF

