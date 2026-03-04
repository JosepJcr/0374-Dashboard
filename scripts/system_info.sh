#!/bin/bash
# Archivo de salida
OUTPUT="/opt/monitoring/data/system_info.json"

# hostname
HOSTNAME=$(hostname)

# kernel
KERNEL=$(uname -r)

# distro
if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO_FULL="$PRETTY_NAME"
else
    DISTRO_FULL="No s'ha pogut determinar la distribució"
fi

# uptime
UPTIME=$(uptime -p)

# fecha y hora
DATETIME=$(date +"%Y-%m-%d %H:%M:%S")

# Crear JSON
cat <<EOF > "$OUTPUT"
{
  "HOSTNAME": "$HOSTNAME",
  "KERNEL": "$KERNEL",
  "DISTRO_FULL": "$DISTRO_FULL",
  "UPTIME": "$UPTIME",
  "DATETIME": "$DATETIME"
}
EOF

